 export const Produto = [{
    id:"1",
    nome: "Bone Preto",
    marca: "Insider",
    preco: 70,
    Imagem: "bone_Masculino.jpg",
    feminino: false
},
{
    id:"2",
    nome: "calca Masculina",
    marca: "Insider",
    preco: 110,
    Imagem: "calca_Masculino.jpg",
    feminino: false
},
{
    id:"3",
    nome: "moleton Masculina",
    marca: "Zara",
    preco: 200,
    Imagem: "moleton_Masculino.jpg",
    feminino: false
},
{
    id:"4",
    nome: "Pantalona Feminino",
    marca: "Insider",
    preco: 210,
    Imagem: "pantalona_Feminino.jpg",
    feminino: true
},
{
    id:"5",
    nome: "Saia Feminina",
    marca: "Insider",
    preco: 180,
    Imagem: "saia_feminino.png",
    feminino: true

},
{
    id:"6",
    nome: "SegundaPele Masculina",
    marca: "Insider",
    preco: 55,
    Imagem: "SegundaPele_Masculino.jpg",
    feminino: false
},
{
    id:"7",
    nome: "Short Feminino",
    marca: "Insider",
    preco: 78,
    Imagem: "short_feminino.png",
    feminino: true
},
{
    id:"8",
    nome: "Sobretudo Feminino",
    marca: "Insider",
    preco: 310,
    Imagem: "sobretudo_Feminino.png",
    feminino: true
},
]

export function salvarLocalStorage(chave , informacao){
    localStorage.setItem(chave , JSON.stringify(informacao));
}
export function lerLocalStorage(chave){
  return  JSON.parse(localStorage.getItem(chave));
}
export function apagarDoLocalStorage(chave){
  localStorage.removeItem(chave)
}
 export function DesenharProdutoChekout(idProduto , idContainerHTML , quantidadeProduto){
    const estoque = Produto.find((p) => p.id === idProduto)
    const containerProdutosCarrinho =
     document.getElementById(idContainerHTML)
  
  
    const elementoArticle = document.createElement("article"); //<article></article>
    const articleClasses = [
      "flex",
      "bg-stone-300",
      "rounded-lg",
      "p-1",
      "relative",
      "mb-2",
    ];
    for (const articleClass of articleClasses) {
      elementoArticle.classList.add(articleClass);
    } //<articleclass="flex bg-slate-100 rounded-lg p-2 relative"></articleclass=>
  
    const cartaoProdutocarrinho = `   
    
  
     <img src="Assets/images/${estoque.Imagem}" alt="carrinho: ${estoque.nome}" class="h-24 rounded-lg" />
     
     <div class="py-2 mx-4 flex flex-col justify-between">
     <p class="text-slate-900 text-sm">${estoque.nome}</p>
     <p class="text-slate-400 text-xs">Tamanho M</p>
     <p class="text-green-700 text-lg">$${estoque.preco}</p>
     </div>
  
     <div class="flex text-slate-950 items-end absolute bottom-0 right-2">  
        <p id='quantidade-${estoque.id}' class='ml-2'>${quantidadeProduto}</p>      
     </div>
     `;
     //<articleclass="flex bg-slate-100 rounded-lg p-2 relative">codigo do cartão do produto</articleclass=>
     elementoArticle.innerHTML = cartaoProdutocarrinho
    containerProdutosCarrinho.appendChild (elementoArticle)
  
  
  
  }
  export function renderizarProdutosCarrinho(){
    const containerProdutosCarrinho = document.getElementById('produtos-carrinho');
    containerProdutosCarrinho.innerHTML = '';
    
    for( const idProduto in idsProdutosCarrinhoComQuantidade){
      DesenharProdutoNocarrinho(idProduto)
    }
  }