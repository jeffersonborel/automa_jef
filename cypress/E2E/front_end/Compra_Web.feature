#utf-8
#language: pt

Funcionalidade: Compra no site web
     Cenário: Logar no sistema
         Dado que estou logado na home page
         Quando add um produto no carrinho
         E excluo produto anterior do carrinho
        Então apresenta mensagem de sucesso 