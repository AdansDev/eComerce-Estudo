read 01 - para começar um projeto acesse  https://vitejs.dev/guide/
          clique em get started
          selecione a opção With NPM e copie o código: npm create vite@latest  
          no PC acesse o explorador
          crie uma pasta, dentro dela pressione a tecla Shift e o botão direito do mouse
          na janela que aparecer clique em Open PowerShell ou abrir Terminal
          o terminal ira abrir ja dentro da pasta que acabou de criar
          cole o comando npm create vite@latest
          ira aparece uma msg :
                Need to install the following packages:
                create-vite@4.4.1
                Ok to proceed? (y)
          digite Y e aperte Enter
          ira aparece uma msg :
                ? Project name:
          Digite o Nome do Projeto e aperte enter
          ira aparece uma msg :
                ? Select a framework:
          aparecera algumas opções, com o seletor(seta)selecione Vanilla
          ira aparece uma msg :
                ? Select a variant:
          aparecera algumas opções, com o seletor(seta)selecione JavaScript
          ira aparece uma msg :
                Done. Now run:
                              cd revisao
                              npm install
                              npm run dev
          nesta etapa o terminal esta te dando 3 comandos(listados acima) os quais
          vc deve digitar um por vez aguarde o processamento de cada um deles,após 
          isso ira aparecer a msg:
                VITE v4.5.0  ready in 764 ms
                ➜  Local:   http://localhost:5174/
                ➜  Network: use --host to expose
                ➜  press h to show help
          copie e cole no navegador o endereço sublinhado, pressione Enter
          em seguida abra o VSCode e para abrir o arquivo que vc acabou de criar
          Pressione  CTRL + K + O
          selecione a pasta que vc acabou de criar e pressione "Selecionar pasta"
           O VsCode ira abrir ja com alguns projetos prontos, você deverá apagar 
           as seguintes pastas e deixar as restantes
            counter.js
            main.js
            javaScrip.svg
          apague somente o conteúdo das seguintes pastas
            index.html
            style.css   

readMe02    presssione "!" , o VSCode ira completar com a estrutura basica
            do início do projeto
            mude a linguagem de "en" para "PT-br"   

readMe03     a linha 2 importa uma função de um arquivo externo
             que sera essencial para a linha 42
             a linha 5 é uma função que tem por finalidade buscar todos
             os elementos do BD, para isso cria-se uma VARIÁVEL "Const"  "catalogoProduto" dentro da função de looping "for" dizendo 
             de onde deve busrcar os arquivos, no caso, a const "produto"
             do arquivo utilidades, definido esse parametro abrir "{}" e montar a estrutura que vc quer que apareca na tela  L: 7a36
             a linha 37 tem uma função muito importante, é ela que vai buscar as informações da TAG "container-produto" la do arquivo index.html e ACRESCENTAR as informações da variável
             "cartaoProduto" com o comando ".innerHTML +="
             ESSE COMANDO É O RESPONSAVEL POR MONTAR A TELA PRINCIPAL DO
             SITE


readMe04    estilização da pagina, via tailwindcss
            Acesse TailWindCSS.com , clique Get Started
            no terminal execute os seguintes comandos:
                  "npm install -D tailwindcss postcss autoprefixer" aguarde carregar, depois execute o seguinte comando:
                  "npx tailwindCcss init" e aguarde finalizar
            proximo passo: crie um arquivo "postcss.config.js" e cole o comando abaixo
            " export default  { plugins: {   tailwindcss: {},  autoprefixer: {},  },} ; "
            proximo passo: crie um arquivo "tailwind.config.js" e cole o comando abaixo
            /** @type {import('tailwindcss').Config} */
            export default { content: ["./src/**/*.{html,js}", "./*.{html,js}"],
                    theme: { extend: {}, },
                    plugins: [], };
            proximo passo: na pasta style.css, cole o seguinte comando
             @tailwind base;
             @tailwind components;
             @tailwind utilities;
             todas as instruções acima encontra-se no site tailwindcss.com
             significado dos comandos CSS (consulte tabela no tailwindcss.com)
             w-xx -  w  largura(width)  e xx significa o numeral que define o tamanho
             m-x  m  margem(margin) todos os lados my(acima e abaixo)  mx(esquerda e direita)  e x significa o numeral que define o espaço
             "display" flex  ajusta o contéudo de acordo com o tamanho da pagina automaticamente
             "display" flex + flex-wrap ajusta em mais de uma linha caso o espaço seja insuficiente

readMe05    estilizando o cabeçalho da pagina
            A TAG <header> tem essa função, class CSS "display" flex, TAG <img> para inserir a figura desejada
            use CSS "h-x" Height(altura), onde x indica o tamanho desejado (consulte tabela no tailwindcss.com)
            p-x padding(preenchimento) , onde x indica o tamanho desejado (consulte tabela no tailwindcss.com)
            justify Content (alinhamento horizontal)+(space-between) separa os blocos entre si, de acordo com o espaço disponível
            gap-x (brecha ou espaço) entre itens dentro do Display flex , onde x indica o espaçamento desejado (consulte tabela no tailwindcss.com)
            aling-Itens(alinhameto Vertical)+(itens-end)alinha os itens no final(embaixo) do bloco(consulte tabela no tailwindcss.com)
            para estilizar os botões com ícones (no caso aqui "histótico" e "carrinho") acesse "Font Awesome" e cdnjs.com (via Google)
            no site cdnjs.com, copie o link e cole dentro da TAG <head> para habilitar o acesso aos icones, após acesse fontawesome.com/icons
            depois selecione "free and open-source icons" selecione o icone desejado, copie o link e cole dentro da tag <button>
            cart(carrinho)

readMe06    criação do quadro carrinho - o código deve ser escrito acima da TAG <header>, para não influenciar na 
            dinamica da pagina principal
            crie <section> e "class"  CSS (Position)+(fixed) para sobrepor a <header> +(top-0)para fixar no topo
            da pagina e "right-[-375px}" para fixar á direita da pagina ocultamente, pois essa janela só deve aparecer 
            sob demanda, nessa TAG é importante definir a lagura para, ao ser acionada não ocupar a pagina inteira
            com  w largura(width) de [375px] conforme L 26 - o valor 375px é definido conforme a conveniencia do projeto
            h-screen  height(altura) onde screen significa que deve ocupar 100% da pagina verticalmente
            w-x Width(largura)onde x indica o tamanho desejado (consulte tabela no tailwindcss.com)
            caso não tenha o tamanho predefinido na tabela utilize valor arbitrário  e digite o tamanho desejado ex: w-[50px]
            - associado ao arquivo HTMl cria-se a função que vai dar atuação para que o carrinho apareça no clicar do botão
            com o comando  document.getElementById('carrinho').classList.add() diz o seguinte: no arquivo HTML 
            com identificador  'carrinho' procure a class 'right-[-375px]' remova-a e inclua 'right-[0px]'. o mesmo conceito
            se aplica as L 7 a 14 

readMe07    a definição type=module é importante para que o JS entenda que as funcionalidades estão sendo importadas/exportadas
            para arquivos em pastas diferentes
            a classe Flex-wrap indica que o conteúdo seja melhor distribuido dentro de uma <section> mesmo que fique em linha diferentes










 