import { faker } from '@faker-js/faker';

beforeEach(async () => {
  await cy.request('POST', `${Cypress.env('api_server')}/e2e/reset`, {});
});

describe('Create and show recommendations', () => {
  it('Test create recommendations', () => {
    const recommendation = {
      name: faker.lorem.words(),
      youtubeLink: "https://youtu.be/4XKGfziuw5c"
    };
    
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="input_name"]').type(recommendation.name);
    cy.get('[data-cy="input_url"]').type(recommendation.youtubeLink);
    cy.get('[data-cy="button_submit"]').click();

    cy.get('[data-cy="song_name"]').should('contain.text', recommendation.name);
  });
});