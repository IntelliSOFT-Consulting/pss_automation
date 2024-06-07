///<reference types="cypress" />

import '../../support/commandsNational'
import faker from 'faker';
//const { administerVaccine } = require('./functions');

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
        cy.get('[href="https://local.pssinsight.org/api/apps/PSS-Insight/index.html"]').click()
        cy.wait(5000)
        cy.get('[href="#/templates/versions"]').click()
        cy.get('[data-test="dhis2-uicore-button"]').click()
        cy.wait(5000)
        cy.get('#versionDescription').type(versionName)
        cy.wait(5000)

      //policy laws
         
    cy.get(':nth-child(1) > .App_accordionTitle__ax5bv').click();
    cy.get(':nth-child(1) > .indicatorCheckbox-0-2-15 > [data-test="dhis2-uicore-checkbox"] > input.jsx-4249355495').click();
    cy.get(':nth-child(3) > .indicatorCheckbox-0-2-15 > [data-test="dhis2-uicore-checkbox"] > input.jsx-4249355495').click();
    cy.get(':nth-child(5) > .indicatorCheckbox-0-2-15 > [data-test="dhis2-uicore-checkbox"] > input.jsx-4249355495').click();

    //financing
    cy.get(':nth-child(2) > .App_accordionTitle__ax5bv').click();
    cy.get(':nth-child(2) > .App_accordionContent__QzgBj > :nth-child(1) > .indicatorCheckbox-0-2-15 > [data-test="dhis2-uicore-checkbox"]> input.jsx-4249355495').click();
    cy.get(':nth-child(2) > .App_accordionContent__QzgBj > :nth-child(3) > .indicatorCheckbox-0-2-15 > [data-test="dhis2-uicore-checkbox"] > input.jsx-4249355495').click();
    cy.get(':nth-child(2) > .App_accordionContent__QzgBj > :nth-child(5) > .indicatorCheckbox-0-2-15 > [data-test="dhis2-uicore-checkbox"] > input.jsx-4249355495').click();

    cy.get(':nth-child(3) > .App_accordionTitle__ax5bv').click();
    cy.get(':nth-child(3) > .App_accordionContent__QzgBj > :nth-child(1) > .indicatorCheckbox-0-2-15 > [data-test="dhis2-uicore-checkbox"] > input.jsx-4249355495').click();
   cy.get(':nth-child(3) > .App_accordionContent__QzgBj > :nth-child(3) > .indicatorCheckbox-0-2-15 > [data-test="dhis2-uicore-checkbox"] > input.jsx-4249355495').click();
   cy.get(':nth-child(3) > .App_accordionContent__QzgBj > :nth-child(5) > .indicatorCheckbox-0-2-15 > [data-test="dhis2-uicore-checkbox"] > input.jsx-4249355495').click();

    cy.get(':nth-child(4) > .App_accordionTitle__ax5bv').click();
    cy.get(':nth-child(4) > .App_accordionContent__QzgBj > :nth-child(1) > .indicatorCheckbox-0-2-15 > [data-test="dhis2-uicore-checkbox"] > input.jsx-4249355495').click();
   cy.get(':nth-child(4) > .App_accordionContent__QzgBj > :nth-child(3) > .indicatorCheckbox-0-2-15 > [data-test="dhis2-uicore-checkbox"] > input.jsx-4249355495').click();
   cy.get(':nth-child(4) > .App_accordionContent__QzgBj > :nth-child(5) > .indicatorCheckbox-0-2-15 > [data-test="dhis2-uicore-checkbox"] > input.jsx-4249355495').click();


    cy.get(':nth-child(5) > .App_accordionTitle__ax5bv').click();
    cy.get(':nth-child(5) > .App_accordionContent__QzgBj > :nth-child(1) > .indicatorCheckbox-0-2-15 > [data-test="dhis2-uicore-checkbox"] > input.jsx-4249355495').click();
   cy.get(':nth-child(5) > .App_accordionContent__QzgBj > :nth-child(3) > .indicatorCheckbox-0-2-15 > [data-test="dhis2-uicore-checkbox"] > input.jsx-4249355495').click();


    cy.get(':nth-child(6) > .App_accordionTitle__ax5bv').click();
    cy.get(':nth-child(6) > .App_accordionContent__QzgBj > :nth-child(1) > .indicatorCheckbox-0-2-15 > [data-test="dhis2-uicore-checkbox"] > input.jsx-4249355495').click();
    cy.get(':nth-child(6) > .App_accordionContent__QzgBj > :nth-child(3) > .indicatorCheckbox-0-2-15 > [data-test="dhis2-uicore-checkbox"] > input.jsx-4249355495').click();


    cy.get(':nth-child(7) > .App_accordionTitle__ax5bv').click();
    cy.get(':nth-child(7) > .App_accordionContent__QzgBj > :nth-child(1) > .indicatorCheckbox-0-2-15 > [data-test="dhis2-uicore-checkbox"] > input.jsx-4249355495').click();
   cy.get(':nth-child(7) > .App_accordionContent__QzgBj > :nth-child(3) > .indicatorCheckbox-0-2-15 > [data-test="dhis2-uicore-checkbox"] > input.jsx-4249355495').click();


    cy.get(':nth-child(8) > .App_accordionTitle__ax5bv').click();
    cy.get(':nth-child(8) > .App_accordionContent__QzgBj > :nth-child(1) > .indicatorCheckbox-0-2-15 > [data-test="dhis2-uicore-checkbox"] > input.jsx-4249355495').click();
    cy.get(':nth-child(8) > .App_accordionContent__QzgBj > :nth-child(3) > .indicatorCheckbox-0-2-15 > [data-test="dhis2-uicore-checkbox"] > input.jsx-4249355495').click();
    cy.get(':nth-child(8) > .App_accordionContent__QzgBj > :nth-child(5) > .indicatorCheckbox-0-2-15 > [data-test="dhis2-uicore-checkbox"] > input.jsx-4249355495').click();

    cy.contains('Publish template').click()

    })
})