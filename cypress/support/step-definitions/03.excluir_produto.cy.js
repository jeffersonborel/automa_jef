//imports
import {Given, When, And, Then, Before, After} from 'cypress-cucumber-preprocessor/steps';


//funções BDD
And('excluo produto anterior do carrinho', () => {
    cy.excluo_produto_carrinho()

})

