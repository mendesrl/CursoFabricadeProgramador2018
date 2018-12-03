class CadastrodeClientes
{
    constructor()
    {
        this.cliente = new Cliente();
        this.clientesLista = [];
        this.carregarClientes();
    }

    salvar()
    {           
                this.cliente.nome = document.getElementById("nome").value;
                this.cliente.email= document.getElementById("email").value;
                this.cliente.telefone= document.getElementById("tel").value;
                this.cliente.data= document.getElementById("data").value;

                this.cadastrocomsucesso();
                this.clientesLista.unshift(this.cliente);
                this.cliente = new Cliente();
               
                window.localStorage.setItem("clientes",JSON.stringify(this.clientesLista));
                
    }

    carregarClientes()
    {
        var clientesLocalstorage = JSON.parse(window.localStorage.getItem("clientes"));
        if(clientesLocalstorage!=null)
        {
            this.clientesLista = clientesLocalstorage;
        }
        else
        {
            this.clientesLista = clientesJSON;
        }

    }
    cadastrocomsucesso()
    {
       alert("Cliente Cadastrado com Sucesso!");
       document.location = "../listagemClientes/listagemClientes.html";

    }
   
    

}
let controller = new CadastrodeClientes;