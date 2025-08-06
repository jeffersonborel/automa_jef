//imports
import {Given, When, And, Then, Before, After} from 'cypress-cucumber-preprocessor/steps';



//funções BDD
Given('que estou logado na home page', () => {
    cy.visit('https://www.automationexercise.com/login')
    cy.get('[data-qa="login-email"]').type('teste@inmetrics.com.br')
    cy.get('[data-qa="login-password"]').type('Teste@123')
    cy.get('[data-qa="login-button"]').click()
    cy.get('b').contains('inmetrics')
    

})