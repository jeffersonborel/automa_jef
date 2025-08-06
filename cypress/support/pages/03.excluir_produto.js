const VALIDA_TELA_3 = ':nth-child(1)';
const ENTRAR_CARRINHO_3 = '.shop-menu > .nav > :nth-child(3)'; 
const VALIDAR_PRODUTO_3 = '#product-21 > .cart_price > p';
const EXCLUIR_CARRINHO_3 = '#product-21 > .cart_delete > .cart_quantity_delete';


//Excluir produto
Cypress.Commands.add('excluo_produto_carrinho', () => {
  cy.get(VALIDA_TELA_3).should('be.visible')
  cy.get(ENTRAR_CARRINHO_3).click()
  cy.get(VALIDAR_PRODUTO_3).should('be.visible') 
  cy.get(EXCLUIR_CARRINHO_3).click()
  cy.log('Produto excluído com sucesso!');
  

});    

