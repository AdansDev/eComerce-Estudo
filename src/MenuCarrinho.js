import { Produto,  salvarLocalStorage, lerLocalStorage} from "./utilidades";

const idsProdutosCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};

// readMe06 L108

function abrirCarrinho() {
  document.getElementById('carrinho').classList.add('right-[0px]')
  document.getElementById('carrinho').classList.remove('right-[-375px]')
};

function fecharCarrinho() {
  document.getElementById('carrinho').classList.remove('right-[0px]')
  document.getElementById('carrinho').classList.add('right-[-375px]');
};

function irParaCheckout(){
  if(Object.keys(idsProdutosCarrinhoComQuantidade).length === 0){
    return;
  }
  window.location.href = window.location.origin + "/checkout.html"
}

export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById('fechar-carrinho')
  const botaoAbrirCarrinho = document.getElementById('abrir-carrinho')
  const botaoIrParaCheckout = document.getElementById('finalizar-compra')
 
  botaoFecharCarrinho.addEventListener('click', fecharCarrinho)
  botaoAbrirCarrinho.addEventListener('click', abrirCarrinho)
  botaoIrParaCheckout.addEventListener('click' , irParaCheckout)
}

function removerDoCarrinho(idProduto) {
  delete idsProdutosCarrinhoComQuantidade[idProduto];
  salvarLocalStorage('carrinho' , idsProdutosCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  renderizarProdutosCarrinho()
}

function incrementarQuantidadeDeProduto(idProduto) {
  idsProdutosCarrinhoComQuantidade[idProduto]++;
  salvarLocalStorage('carrinho' , idsProdutosCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  atualizaInformacaoQuantidade(idProduto);
}

function decrementarQuantidadeDeProduto(idProduto) {
  if(idsProdutosCarrinhoComQuantidade[idProduto]=== 1){
    removerDoCarrinho(idProduto);
    return;
  }
  idsProdutosCarrinhoComQuantidade[idProduto]--;
  salvarLocalStorage('carrinho' , idsProdutosCarrinhoComQuantidade);
  atualizarPrecoCarrinho()
  atualizaInformacaoQuantidade(idProduto);
}

function atualizaInformacaoQuantidade(idProduto) {
  document.getElementById(`quantidade-${idProduto}`).innerText =
    idsProdutosCarrinhoComQuantidade[idProduto];
}

function DesenharProdutoNocarrinho(idProduto){
  const estoque = Produto.find((p) => p.id === idProduto)
  const containerProdutosCarrinho = document.getElementById('produtos-carrinho')


  const elementoArticle = document.createElement("article"); //<article></article>
  const articleClasses = [
    "flex",
    "bg-slate-100",
    "rounded-lg",
    "p-1",
    "relative",
  ];
  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  } //<articleclass="flex bg-slate-100 rounded-lg p-2 relative"></articleclass=>

  const cartaoProdutocarrinho = `   
  <button id="remover-item${idProduto}" class="absolute top-0 right-2">
          <i 
            class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-900">
          </i>
   </button>

   <img src="Assets/images/${estoque.Imagem}" alt="carrinho: ${estoque.nome}" class="h-24 rounded-lg" />
   
   <div class="py-2 mx-4 flex flex-col justify-between">
   <p class="text-slate-900 text-sm">${estoque.nome}</p>
   <p class="text-slate-400 text-xs">Tamanho M</p>
   <p class="text-green-700 text-lg">$${estoque.preco}</p>
   </div>

   <div class="flex text-slate-950 items-end absolute bottom-0 right-2">
  
      <button id="decrementar-Quantidade${estoque.id}">-</button>

      <p id='quantidade-${estoque.id}' class='ml-2'>${idsProdutosCarrinhoComQuantidade[estoque.id]}</p>
   
      <button class='ml-2'  id="incrementar-Quantidade${estoque.id}">+</button>
   </div>
   `;
   //<articleclass="flex bg-slate-100 rounded-lg p-2 relative">codigo do cartão do produto</articleclass=>
   elementoArticle.innerHTML = cartaoProdutocarrinho
  containerProdutosCarrinho.appendChild (elementoArticle)


  document
    .getElementById(`decrementar-Quantidade${estoque.id}`)
    .addEventListener("click", () => decrementarQuantidadeDeProduto(estoque.id));
  document
    .getElementById(`incrementar-Quantidade${estoque.id}`)
    .addEventListener("click", () => incrementarQuantidadeDeProduto(estoque.id));
  document
    .getElementById(`remover-item${estoque.id}`)
    .addEventListener("click", () => removerDoCarrinho(estoque.id));

}
export function renderizarProdutosCarrinho(){
  const containerProdutosCarrinho = document.getElementById('produtos-carrinho');
  containerProdutosCarrinho.innerHTML = '';
  
  for( const idProduto in idsProdutosCarrinhoComQuantidade){
    DesenharProdutoNocarrinho(idProduto)
  }
}

export function adicionarAoCarrinho(idProduto) {
  if (idProduto in idsProdutosCarrinhoComQuantidade) {
    incrementarQuantidadeDeProduto(idProduto);
    return;
  }
  idsProdutosCarrinhoComQuantidade[idProduto] = 1;
  salvarLocalStorage('carrinho' , idsProdutosCarrinhoComQuantidade);
  DesenharProdutoNocarrinho(idProduto)
  atualizarPrecoCarrinho()
}

export function atualizarPrecoCarrinho() {
  const precoCarrinho = document.getElementById("preco-total");
  let precoTotalCarrinho = 0;
  for(const ideProdutoNoCarrinho in idsProdutosCarrinhoComQuantidade){
    precoTotalCarrinho += Produto.find(p => p.id === ideProdutoNoCarrinho).preco 
    * idsProdutosCarrinhoComQuantidade[ideProdutoNoCarrinho]
  }
  precoCarrinho.innerText = `Total: $${precoTotalCarrinho}`;
}
  
