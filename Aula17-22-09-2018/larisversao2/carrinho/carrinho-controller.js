class CarrinhoController
{
    constructor()
    {
        this.carrinho = carrinho.getCarrinho();
        this.carregarProdutos();
    }


    carregarProdutos()
    {
        for (var i=0; i<this.carrinho.length; i++)
        {
            this.exibirv(this.carrinho[i],this.carrinho,i);
        }
    }

    exibirv(produto,carrinho,id)
    {
    
            let divFilha = document.createElement("div");
            divFilha.id = id;
            divFilha.classList.add("divFormat");

            let img = document.createElement("img");
            img.src = produto.linkfoto;
            img.id = "imglinkfoto"
            
            let spanqtd = document.createElement("span");
            spanqtd.innerText = produto.qtd;
            spanqtd.id = "qtd";

            let h3Nome = document.createElement("h3")
            h3Nome.innerText = produto.nome;
            h3Nome.id = "nome";

            let h2Preco = document.createElement("h2")
            h2Preco.innerText ="R$: "+produto.preco;
            h2Preco.id = "preco";

            let imgItem = document.createElement("img");
            imgItem.src="../moai/img/delete.svg";
            imgItem.setAttribute("onclick", "carrinhoController.excluir('" +divFilha.id+"')");
           
            
            divFilha.appendChild(img);
            divFilha.appendChild(h3Nome);
            divFilha.appendChild(spanqtd);
            divFilha.appendChild(h2Preco);
            divFilha.appendChild(imgItem);
            document.getElementById("divMae").appendChild(divFilha);
        }

        excluir(id)
        {
            let conv = document.getElementById(id);
            let lis = document.getElementById("divMae");
            lis.removeChild(conv)
        }

}
        
let carrinhoController = new CarrinhoController();