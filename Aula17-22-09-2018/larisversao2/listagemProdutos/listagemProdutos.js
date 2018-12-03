class ListadeProdutos
{
    constructor()
    {
        this.carrinho = carrinho;
        this.produtosLista = [];
        this.carregarProdutos();
       
        
    }

    carregarProdutos()
    {
        var produtosLocalstorage = JSON.parse(window.localStorage.getItem("produtos"));
        if(produtosLocalstorage!=null)
        {
            this.produtosLista = produtosLocalstorage;
        }
        else
        {
            this.produtosLista = produtosJSON;
        }

        for (var i=0; i<this.produtosLista.length; i++)
        {
            this.exibirv(this.produtosLista[i],this.carrinho);
        }
    }

    exibirv(produto,carrinho)
    {
    
            let divFilha = document.createElement("div");
            divFilha.id = "divFilha";

            let img = document.createElement("img");
            img.src = produto.linkfoto;
            img.id = "imglinkfoto"
            
            let spanCategoria = document.createElement("span");
            spanCategoria.innerText = produto.categoria;
            spanCategoria.id = "spanCategoria";

            let spanqtd = document.createElement("span");
            spanqtd.innerText = "Und: " +produto.qtd;
            spanqtd.id = "qtd";

            let h3Nome = document.createElement("h3")
            h3Nome.innerText = produto.nome;
            h3Nome.id = "nome";

            let h2Preco = document.createElement("h2")
            h2Preco.innerText ="R$: "+produto.preco;
            h2Preco.id = "preco";

            let imgItem = document.createElement("img");
            imgItem.src="img/carrinho.svg";

            let adicionaBotao = document.createElement("button");
            adicionaBotao.onclick = function(){
                carrinho.adicionar(produto);
                document.location = "../carrinho/listagemCarrinho.html";
            } 
            adicionaBotao.innerText = "Adicionar";
            adicionaBotao.id = "adicionaBotao";

            adicionaBotao.appendChild(imgItem);

            divFilha.appendChild(img);
            divFilha.appendChild(spanCategoria);
            divFilha.appendChild(spanqtd);
            divFilha.appendChild(h3Nome);
            divFilha.appendChild(h2Preco);
            divFilha.appendChild(adicionaBotao);
            document.getElementById("divMae").appendChild(divFilha);
        }
    }
        
    

let controller = new ListadeProdutos();