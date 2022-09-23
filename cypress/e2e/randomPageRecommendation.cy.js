beforeEach(async () => {
    await cy.request('POST', `${Cypress.env('api_server')}/e2e/reset`, {});
});

describe("Test random page", () => {
    it("tests a recommendation when entering the '/random' route", () => {
        cy.createRecommendation().then(() => {
            cy.request('GET', `${Cypress.env('api_server')}/recommendations/random`).then(data => {
                const recommendation = data.body;

                cy.visit('http://localhost:3000/random');
     
                cy.get('[data-cy="song_name"]').should('contain.text', recommendation.name);
            }); 
        });
    });
});