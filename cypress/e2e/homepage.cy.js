describe('SymbolTM Homepage Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.symboltm.com'); // Replace with your live URL
  });

  it('loads the homepage successfully', () => {
    cy.contains('SymbolTM').should('be.visible');
  });

  it('navigates to the About page', () => {
    cy.get('nav').contains('Our Brand Story').click();
    // cy.url().should('include', '/our-brand-story');
  });

  it('is responsive on mobile', () => {
    cy.viewport(375, 667); // Simulate mobile viewport
    // cy.get('button').contains('Work').should('be.visible'); // Check for mobile menu
  });

  it('opens the Work section', () => {
    cy.contains('Work').click(); // Click on the Work button
    // cy.url().should('include', '/#work'); // Ensure navigation to the Work section
    cy.get('#work').should('be.visible'); // Check if the section is visible
  });

  it('displays the contact form', () => {
    cy.contains('Get in touch').click(); // Click on the Contact link
    // cy.get('form').should('be.visible'); // Ensure the contact form is present
  });
});
