import { lerLocalStorage, DesenharProdutoChekout } from "./src/utilidades";

function criarPedidoHistorico(pedidoComData) {
    const elementoPedido = ` <p class= 'text-xl text-bold'>${pedidoComData.dataPedido}</p>
    <section id= 'container-produto-${pedidoComData.dataPedido}'></section>
     `;
    const main = document.getElementsByTagName('main')[0];
    main.innerHTML += elementoPedido
    for (const idProduto in pedidoComData.pedido) {
        DesenharProdutoChekout(
            idProduto,
            `container-produto-${pedidoComData.dataPedido}`,
            pedidoComData.dataPedido[idProduto])
    };

}
function renderizarHistoricoPedidos(){
    const historico =lerLocalStorage('historico');
    for(const pedidoComData of historico){
        criarPedidoHistorico(pedidoComData)
    }
}

