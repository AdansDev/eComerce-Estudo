import { adicionarAoCarrinho } from "./MenuCarrinho";
import { Produto } from "./utilidades";

export function renderizarCatalogo() {

    for (const catalogoProduto of Produto) {
        const cartaoProduto = `<div
         class="border-solid
            w-48
            m-2
            p-2 
            flex flex-col
            justify-between
            group
            shadow-2xl
            shadow-slate-600
            rounded-lg
            "id="card-produto-${catalogoProduto.id}">

        <img src="./Assets/images/${catalogoProduto.Imagem}" 
        alt="Produto 1 do Magazine Hashtag"
        class= 'group-hover:scale-110 duration-300 my-3  rounded-lg'
        />
        <p class='text-sm'>${catalogoProduto.marca}</p>
        <p class='text-sm'>${catalogoProduto.nome}</p>
        <p class='text-sm'>$${catalogoProduto.preco}</p>
        <button id='adicionar-${catalogoProduto.id}'
         class=
        'bg-slate-950 
         hover:bg-slate-700
         text-slate-200'>
         <i 
         class="fa-solid fa-cart-plus">
         </i>
         </button>
        </div>`;
        document.getElementById("container-produto").innerHTML += cartaoProduto;
                
    }
    for (const catalogoProduto of Produto){
    document.getElementById(`adicionar-${catalogoProduto.id}`)
    .addEventListener('click' , ()=> adicionarAoCarrinho(catalogoProduto.id));
    }
}