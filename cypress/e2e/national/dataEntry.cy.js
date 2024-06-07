///<reference types="cypress" />

import '../../support/commandsNational'
import faker from 'faker';
//const { administerVaccine } = require('./functions');
const numberOfDownArrowPresses = Cypress._.random(1, 10);

context('Actions', () => {
    beforeEach(() => {
        cy.clearCookie('https://local.pssinsight.org');;

        cy.baseurl();
        cy.login();
    })

    it('.type() - Create Version', () => {
      
        const versionName = faker.random.number();
        cy.wait(8000)

        cy.get('[data-test="headerbar-apps-icon"]').click()
        cy.wait(5000)
        cy.get('[href="https://local.pssinsight.org/api/apps/PSS-Insight-Data-Entry/index.html"]').click()
        cy.wait(5000)
        cy.get('[href="#/create"] > [data-test="dhis2-uicore-menuitem"] > a.jsx-2002348738 > .jsx-2002348738').click()
        cy.wait(5000)
        cy.get('#selectedPeriod').click()
        for (let i = 0; i < numberOfDownArrowPresses; i++) {
            cy.get('#selectedPeriod').type('{downarrow}', {force: true});
            }
            cy.get('#selectedPeriod').type('{enter}', {force: true});
            cy.get(':nth-child(1) > .App_accordionTitle__ax5bv').click()
            cy.get('#AJGrDQkZZTk').type('5000000')
            cy.get(':nth-child(2) > .App_accordionTitle__ax5bv').click()
            cy.get(':nth-child(1) > .App_accordionContent__QzgBj > :nth-child(1) > .indicatorTable-0-2-15 > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-tbody > :nth-child(2) > [colspan="5"] > .tableFlex-0-2-17 > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
            cy.get(':nth-child(1) > .indicatorTable-0-2-15 > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-tbody > :nth-child(3) > :nth-child(3) > [data-test="dhis2-uicore-field"] > [data-test="dhis2-uicore-field-content"] > :nth-child(1) > input.jsx-3878022568').click()
            cy.get(':nth-child(1) > .indicatorTable-0-2-15 > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-tbody > :nth-child(4) > :nth-child(3) > [data-test="dhis2-uicore-field"] > [data-test="dhis2-uicore-field-content"] > :nth-child(2) > input.jsx-3878022568').click()
            cy.get(':nth-child(2) > .indicatorTable-0-2-15 > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-tbody > :nth-child(4) > :nth-child(3) > [data-test="dhis2-uicore-field"] > [data-test="dhis2-uicore-field-content"] > :nth-child(1) > input.jsx-3878022568').click()
            cy.get(':nth-child(3) > .App_accordionTitle__ax5bv').click()
            cy.get(':nth-child(4) > .App_accordionTitle__ax5bv').click()
            cy.get(':nth-child(5) > .App_accordionTitle__ax5bv').click()
            cy.get(':nth-child(2) > .App_accordionTitle__ax5bv').click()
            cy.get(':nth-child(2) > .App_accordionTitle__ax5bv').click()


      
    })
})