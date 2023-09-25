const catalogoProdutos = document.getElementById("container-produto");

function esconderMasculinos(){
    const produtosMasculinos =
    Array.from(catalogoProdutos.getElementsByClassName('masculino'));

    for( const Produto of produtosMasculinos){
        Produto.classList.add('hidden');
    }
}
export function inicializarFiltros(){
      document.getElementById("Exibir-feminino")
      .addEventListener("click", esconderMasculinos);
  } 