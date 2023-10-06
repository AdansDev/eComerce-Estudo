import { DesenharProdutoChekout, lerLocalStorage, apagarDoLocalStorage, salvarLocalStorage } from "./src/utilidades";

function mostrarProdutosCheckout() {
  const idsProdutosCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
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
 const idsProdutosCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
 if(Object.keys(idsProdutosCarrinhoComQuantidade).length === 0){
  return;
 }
const dataAtual = new Date();
const pedidoFeito = {
  dataPedido: dataAtual,
  pedido: idsProdutosCarrinhoComQuantidade
}
const historicoDePedidos = lerLocalStorage('historico') ?? []
const historicoDePedidosAtualizado =[pedidoFeito, ...historicoDePedidos];

salvarLocalStorage('historico' , historicoDePedidosAtualizado)
apagarDoLocalStorage('carrinho')
window.location.href = window.location.origin + "/pedidos.html";
}

mostrarProdutosCheckout();

document.addEventListener('submit' , (evento) => finalizarCompra(evento))