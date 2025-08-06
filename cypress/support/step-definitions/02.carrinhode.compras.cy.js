//imports
import {Given, When, And, Then, Before, After} from 'cypress-cucumber-preprocessor/steps';


//funções BDD
When('add um produto no carrinho', () => {
    cy.add_produto_carrinho()

})