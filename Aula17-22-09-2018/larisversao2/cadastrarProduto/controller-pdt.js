class CadastrodeProdutos
{
    constructor()
    {
        this.produto = new Produto();
        this.produtosLista = [];
        this.carregarProdutos();
    }
    
    salvar()
    {
        this.produto.nome = document.getElementById("nome").value;
        this.produto.qtd = document.getElementById("qtd").value;
        this.produto.preco = document.getElementById("preco").value;
        this.produto.categoria = document.getElementById("categoria").value;
        this.produto.linkfoto = document.getElementById("linkfoto").value;
        
        this.cadastrocomsucesso();
        this.produtosLista.unshift(this.produto);
        this.produto = new Produto();
        
        window.localStorage.setItem("produtos",JSON.stringify(this.produtosLista));
        this.exibirv();
        
    }

    cadastrocomsucesso()
    {
       alert("Produto Cadastrado com Sucesso!")
       document.location = "../listagemProdutos/listagemProdutos.html";
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

    }
}
let controller = new CadastrodeProdutos;