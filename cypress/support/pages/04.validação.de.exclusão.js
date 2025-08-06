const VALIDA_REMOVER_PRODUTO_4 = '#product-21 > .cart_price > p'; 
const ACESSO_CARRINHO_4 = ':nth-child(3) > a';


//Validação da mensagem
Cypress.Commands.add('Mensagem_de_validação', () => {
  cy.get(ACESSO_CARRINHO_4).CLICK
  cy.get(VALIDA_REMOVER_PRODUTO_4).should('not.exist');
  cy.screenshot('produto-removido');

}); 