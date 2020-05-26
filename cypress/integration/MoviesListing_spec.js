describe('Movies Listing', () => {
    cy.visit('http://localhost:3000/');

    it('radio should toggle correctly', () => {
        cy.get('#label-searchBy-1').click().should('have.class', 'active');
    })
});
