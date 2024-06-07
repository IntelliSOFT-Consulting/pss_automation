///<reference types="cypress" />

import faker from 'faker';
//const { administerVaccine } = require('./functions');

context('Actions', () => {
    beforeEach(() => {
        cy.baseurl();
        cy.login();
    })

    it('.type() - Create Version', () => {
        const emails = [
            'email@example1.com',
            'email@example2.com',
            'email@example3.com',
            'email@example4com',
            'email@example5.com',
            
        ]
        const versionName = faker.random.number();
        cy.wait(5000)

        cy.get('[data-test="headerbar-apps-icon"]').click()
        cy.wait(5000)
        cy.get('[href="https://pssinternational.intellisoftkenya.com/api/apps/PSS-Insight/index.html"] > img.jsx-3199173843').click()
        cy.wait(5000)
        cy.get('.ant-menu-root').contains('Notifications').click()
        cy.get('.ant-menu-submenu-open').contains('Broadcast').click()


        const randomNumber = Math.floor(Math.random() * 2);
        if (randomNumber === 0) {
            cy.get('#sendTo > :nth-child(1) > :nth-child(2)').click();
          } else {
            cy.get(':nth-child(2) > .ant-radio > .ant-radio-input').click();
          }
        const randomNumber14 = Math.floor(Math.random() * 2); // Generates a number between 0 and 1
        switch (randomNumber14) {
        case 0:
        cy.get('#sendTo > :nth-child(1) > :nth-child(2)').click()
        cy.get('#title').type('This is a test Broadcast')
        cy.get('#message').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
        cy.get('.btnSuccess-0-2-7').click()
        break;

        case 1:

        cy.get(':nth-child(2) > .ant-radio > .ant-radio-input').click()
        const randomIndex1 = Math.floor(Math.random() * emails.length);
               const typeEmail = emails[randomIndex1];
        cy.get('.ant-select-selection-overflow').type(typeEmail)
        cy.get('#title').type('This is a test Broadcast')
        cy.get('#message').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
        cy.get('.btnSuccess-0-2-7').click()
        default:
    
    break;
        }
    

    })
})