class MenuController{
    constructor(){
        this.paginaInicial();
    }

    paginaInicial(){
        document.getElementById("conteudo").innerHTML = '<object type="text/html" data="../listagemProdutos/listagemProdutos.html" ></object>'
    }

    usuario(){
        document.getElementById("conteudo").innerHTML = '<object type="text/html" data="../listagemUsuarios/listagemUsuarios.html" ></object>'
    }

    produto(){
        document.getElementById("conteudo").innerHTML = '<object type="text/html" data="../cadastrarProduto/produto.html" ></object>'
    }

    cadastroUsuario(){
        document.getElementById("conteudo").innerHTML = '<object type="text/html" data="../cadastrarUsuario/usuario.html" ></object>'
    }

    cliente(){
        document.getElementById("conteudo").innerHTML = '<object type="text/html" data="../listagemClientes/listagemClientes.html" ></object>'
    }

    cadastroCliente(){
        document.getElementById("conteudo").innerHTML = '<object type="text/html" data="../cadastrarCliente/cliente.html" ></object>'
    }

    

    moai(){
        document.getElementById("conteudo").innerHTML = '<object type="text/html" data="../moai/lista.html" ></object>'
    }

}

let controller = new MenuController();

