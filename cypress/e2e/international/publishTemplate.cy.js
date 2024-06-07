///<reference types="cypress" />

import faker from 'faker';
//const { administerVaccine } = require('./functions');

context('Actions', () => {
    beforeEach(() => {
        cy.clearCookie('https://pssinternational.intellisoftkenya.com/');;
        cy.baseurl();
        cy.login();
    })

    it('.type() - Create Version', () => {
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
        cy.get('[href="https://pssinternational.intellisoftkenya.com/api/apps/PSS-Insight/index.html"] > img.jsx-3199173843').click()
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
})