beforeEach(async () => {
    await cy.request('POST', `${Cypress.env('api_server')}/e2e/reset`, {});
});

describe("Test top page", () => {
    it("tests a recommendation when entering the '/top' route", () => {
        cy.createRecommendation().then(() => {
            cy.request('GET', `${Cypress.env('api_server')}/recommendations/top/10`).then(data => {
                const recommendation = data.body[0];

                cy.visit('http://localhost:3000/top');
     
                cy.get('[data-cy="song_name"]').should('contain.text', recommendation.name);
            }); 
        });
    });
});