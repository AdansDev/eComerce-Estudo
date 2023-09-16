import { document } from "postcss";
import { Produto } from "./utilidades";

const idsProdutosCarrinhoComQuantidade = {};

function abrirCarrinho() {
  document.getElementById('carrinho').classList.add('right-[0px]')
  document.getElementById('carrinho').classList.remove('right-[-375px]')
};

function fecharCarrinho() {
  document.getElementById('carrinho').classList.remove('right-[0px]')
  document.getElementById('carrinho').classList.add('right-[-375px]') ;
};
export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById('fechar-carrinho')
  const botaoAbrirCarrinho = document.getElementById('abrir-carrinho')
  botaoFecharCarrinho.addEventListener('click', fecharCarrinho)
  botaoAbrirCarrinho.addEventListener('click', abrirCarrinho)
}

function incrementarQuantidadeDeProduto(idProduto) {
  idsProdutosCarrinhoComQuantidade[idProduto]++;
  atualizaInformacaoQuantidade(idProduto);
}
function decrementarQuantidadeDeProduto(idProduto) {
      idsProdutosCarrinhoComQuantidade[idProduto]--;
    atualizaInformacaoQuantidade(idProduto);
  }
function atualizaInformacaoQuantidade(idProduto) {
  document.getElementById(`quantidade-${idProduto}`).innerText = idsProdutosCarrinhoComQuantidade[idProduto];
}
export function adicionarAoCarrinho(idProduto) {
  if (idProduto in idsProdutosCarrinhoComQuantidade) {
    incrementarQuantidadeDeProduto(idProduto);
    return;
  }
  idsProdutosCarrinhoComQuantidade[idProduto] = 1;
  const estoque = Produto.find((p) => p.id === idProduto)
  const containerProdutosCarrinho = document.getElementById('produtos-carrinho')
  
  const cartaoProdutocarrinho = ` 
  <article class="flex bg-slate-100 rounded-lg p-2 relative">
  
  <button id="fechar-carrinho" class="absolute top-0 right-2">
  <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-900">
  </i>
   </button>
   <img src="Assets/images/${estoque.Imagem}" alt="carrinho: ${estoque.nome}" class="h-24 rounded-lg" />
   <div class="py-2 mx-4 flex flex-col justify-between">
   <p class="text-slate-900 text-sm">${estoque.nome}</p>
   <p class="text-slate-400 text-xs">Tamanho M</p>
   <p class="text-green-700 text-lg">$${estoque.preco}</p>
   </div>
   <div class="flex text-slate-950 items-end absolute bottom-0 right-2">
   <button id="decrementar-Quantidade(${estoque.id})">-</button>
   <p id='quantidade-${estoque.id}' class='ml-2'>${idsProdutosCarrinhoComQuantidade[estoque.id]}</p>
   <button class='ml-2'  id="incrementar-Quantidade(${estoque.id})">+</button>
   </div>
   </article>`;
   containerProdutosCarrinho.innerHTML += cartaoProdutocarrinho;

  
   document
  .getElementById(`decrementar-Quantidade${estoque.id}`)
  .addEventListener("click", () => decrementarQuantidadeDeProduto(estoque.id));
document
  .getElementById(`incrementar-Quantidade${estoque.id}`)
  .addEventListener("click", () => incrementarQuantidadeDeProduto(estoque.id));

  }
  