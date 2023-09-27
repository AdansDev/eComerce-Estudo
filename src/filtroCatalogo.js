import { Produto } from "./utilidades";

const catalogoProdutos = document.getElementById("container-produto");

function exibirTodos() {
    const produtosEscondidos = Array.from(catalogoProdutos.getElementsByClassName('hidden'));

    for ( const Produto of produtosEscondidos) {
        Produto.classList.remove('hidden');
    }
}

function esconderMasculinos() {
    exibirTodos()
    const produtosMasculinos =
        Array.from(catalogoProdutos.getElementsByClassName("masculino"));

    for (const Produto of produtosMasculinos) {
        Produto.classList.add('hidden');
    }
}
function esconderFemininos() {
    exibirTodos()
    const produtosFemininos =
        Array.from(catalogoProdutos.getElementsByClassName("feminino"));

    for (const Produto of produtosFemininos) {
        Produto.classList.add('hidden');
    }
}


export function inicializarFiltros() {
   
    document.getElementById("Exibir-todos")
        .addEventListener("click", exibirTodos);
        
    document.getElementById("Exibir-feminino")
        .addEventListener("click", esconderMasculinos);

    document.getElementById("Exibir-masculino")
        .addEventListener("click", esconderFemininos);

}