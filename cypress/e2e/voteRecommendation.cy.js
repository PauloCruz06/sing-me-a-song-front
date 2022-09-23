beforeEach(async () => {
    await cy.request('POST', `${Cypress.env('api_server')}/e2e/reset`, {});
});

describe("Upvote and downvote recommendations", () => {
    it("Test upvote recomendation", () => {
        cy.visit('http://localhost:3000/');

        cy.createRecommendation().then(() => {
            cy.request('GET', `${Cypress.env('api_server')}/recommendations`).then(data => {
                const recommendation = data.body[0];

                cy.get('[data-cy="handle_upvote"]').click();

                cy.get('[data-cy="row"]').should('contain.text', recommendation.score+1);
            });
        });
    });

    it("Test downvote recomendation", () => {
        let recommendation = {};
        
        cy.visit('http://localhost:3000/');

        cy.createRecommendation().then(() => {
            cy.request('GET', `${Cypress.env('api_server')}/recommendations`).then(data => {
                recommendation = data.body[0];

                cy.get('[data-cy="handle_downvote"]').click();

                cy.get('[data-cy="row"]').should('contain.text', recommendation.score-1);
            });
        });
    });
});