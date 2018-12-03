class CadastrodeUsuarios
{
    constructor()
    {
        this.usuario = new Usuario();
        this.usuariosLista = [];
        this.carregarUsuarios();
    }

    salvar()
    {           
                this.usuario.nome = document.getElementById("nome").value;
                this.usuario.cpf = document.getElementById("cpf").value;
                this.usuario.endereco= document.getElementById("endereco").value;
                this.usuario.email= document.getElementById("email").value;
                this.usuario.telefone= document.getElementById("tel").value;
                this.usuario.senha= document.getElementById("senha").value;
                this.usuario.cargo= document.getElementById("cargo").value;
                this.usuario.linkfoto = document.getElementById("linkfoto").value;
                
                this.cadastrocomsucesso();
                this.usuariosLista.unshift(this.usuario);
                this.usuario = new Usuario();
               
                window.localStorage.setItem("usuarios",JSON.stringify(this.usuariosLista));
    }

    carregarUsuarios()
    {
        var usuariosLocalstorage = JSON.parse(window.localStorage.getItem("usuarios"));
        if(usuariosLocalstorage!=null)
        {
            this.usuariosLista = usuariosLocalstorage;
        }
        else
        {
            this.usuariosLista = usuariosJSON;
        }

    }
    cadastrocomsucesso()
    {
       alert("Usuario Cadastrado com Sucesso!");
       document.location = "../listagemUsuarios/listagemUsuarios.html";
    }

}
let controller = new CadastrodeUsuarios;