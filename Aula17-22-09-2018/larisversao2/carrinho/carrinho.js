class Carrinho{
    constructor(){
        this.produtosLista = this.getCarrinho();
        
    }

    adicionar(produto){
        alert("Produto adicionado no carrinho");
        this.produtosLista.push(produto);
        window.localStorage.setItem("carrinho", JSON.stringify(this.produtosLista));
    }

    getCarrinho(){
        var carrinhoLocalstorage = JSON.parse(window.localStorage.getItem("carrinho"));
        
        if(carrinhoLocalstorage !=null)
        {
            return carrinhoLocalstorage;
        }
        else
        {
            return [];
        }
    }

    
}

let carrinho = new Carrinho();