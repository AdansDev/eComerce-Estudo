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
function finalizarCompra(evento){
evento.preventDefault();
window.location.href = window.location.origin + "/pedidos.html";
}

mostrarProdutosCheckout();

document.addEventListener('submit' , (evento) => finalizarCompra(evento))