import { DesenharProdutoChekout, lerLocalStorage } from "./src/utilidades";

function mostrarProdutosCheckout() {
  const idsProdutosCarrinhoComQuantidade = lerLocalStorage("carrinho");
  for (const idProduto in idsProdutosCarrinhoComQuantidade) {
    DesenharProdutoChekout(
      idProduto,
      "container-produto-comprado",
      idsProdutosCarrinhoComQuantidade[idProduto]
    );
  }
}
mostrarProdutosCheckout()