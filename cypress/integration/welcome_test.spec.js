describe('Heading text', () => {
    it('contains the correct title', () => {
        cy.visit('/auth');

        cy.get('title')
            .invoke('text')
            .should('equal', 'Welcome to Keycloak');   
    });

    it('contains the correct title on iphone x', () => {
        cy.viewport("iphone-x")
        cy.visit('/auth');

        cy.get('title')
            .invoke('text')
            .should('equal', 'Welcome to Keycloak');
    });
});