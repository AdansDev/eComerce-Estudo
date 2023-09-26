import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtroCatalogo";
import { atualizarPrecoCarrinho, inicializarCarrinho, renderizarProdutosCarrinho } from "./src/MenuCarrinho";



renderizarCatalogo();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();



