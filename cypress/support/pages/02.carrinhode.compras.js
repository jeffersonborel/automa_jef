
const BTN_ADD_CARRINHO = ':nth-child(20) > .product-image-wrapper > .choose > .nav > li > a';
const BTN_ADD_CARRINHO_2 = ':nth-child(5) > .btn';
const MENSAGEM_DE_ADD  = ':nth-child(5) > .btn';
const CONFIRMAR_MENSAGEM = '.modal-footer > .btn';




Cypress.Commands.add('add_produto_carrinho', () => {
  cy.get(BTN_ADD_CARRINHO).click()
  cy.get(BTN_ADD_CARRINHO_2).click()
  cy.get(MENSAGEM_DE_ADD).should('be.visible') 
  cy.screenshot('produto-add_sucesso');
  cy.get(CONFIRMAR_MENSAGEM).click()
  
});


