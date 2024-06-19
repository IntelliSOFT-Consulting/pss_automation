///<reference types="cypress" />

import faker from 'faker';
//const { administerVaccine } = require('./functions');

context('Actions', () => {
    beforeEach(() => {
       // cy.clearLocalStorage('https://global.pssinsight.org/dhis-web-commons/security/login.action');
        cy.baseurl();
        cy.login();
    })

    it('.type() - Create Version', () => {
           const thresholds = {
            performance: 50,
            accessibility: 80,
            'first-contentful-paint': 2000,
            'largest-contentful-paint': 3000,
            interactive: 2000,
            seo: 60,
            pwa: 50,
            };
            const lighthouseConfig = {
            formFactor: 'desktop',
            screenEmulation: { disabled: true },
            };
            
        describe('Bstackdemo', () => {
        const accordionNames = [
            'Policy Laws and Governance',
            'Financing',
            'Outcomes and Attributes',
            'Innovation, Research and Development, Manufacturing, and Trade',
            'Human Resources',
            'Information',
            'Pharmaceutical Products and Services',
            'Regulatory Systems'
        ]
        const versionName = faker.random.number();
        cy.wait(5000)

        cy.get('[data-test="headerbar-apps-icon"]').click()
        cy.wait(5000)
        cy.get('[href="https://pssinternational.intellisoftkenya.com/api/apps/PSS-Insight/index.html"]').click()
        cy.wait(5000)
        cy.get('[href="#/templates/versions"]').click()
        cy.get('[data-test="dhis2-uicore-button"]').click()
        cy.get('#versionDescription').type(versionName)
        cy.wait(5000)

        accordionNames.forEach((name) => {
        cy.get('.App_accordionTitle__ax5bv').contains(name).click();
        cy.wait(1000); 
        cy.get('input[type="checkbox"].jsx-4249355495').each(($el) => {
            cy.wrap($el).check({force: true});
        })
    })
        cy.contains('Publish template').click()

    })
    cy.lighthouse( thresholds, lighthouseConfig );
})
})


