Cypress.Commands.add("baseurl", () => {
    //cy.clearCookies();
    
    cy.visit('https://local.pssinsight.org');
  })
  
  Cypress.Commands.add('login', () => {
   cy.get('#j_username').type('admin');
   cy.get('#j_password').type('district');
   cy.get('#submit').click({force: true});
  })
  Cypress.Commands.add("typeWithClear", { prevSubject: true }, (subject, text) => {
    // Clear the field using cy.clear() if it already has data
    cy.wrap(subject).then((element) => {
      
    });
  
    // Type the specified text into the field
    cy.wrap(subject).type(text);
  });
  
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Suppress uncaught exceptions
    return false;
  })
  