class ListadeUsuarios
{
    constructor()
    {
        this.usuariosLista = [];
        this.carregarUsuarios();
        this.exibirv();
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

    exibirv()
    {
        for (var i=0; i<this.usuariosLista.length; i++)
        {
        
            let divFilha = document.createElement("div");
            divFilha.id = "divFilha";

            let img = document.createElement("img");
            img.src = this.usuariosLista[i].linkfoto;
            img.id = "imglinkfoto"
            
            let spanCargo = document.createElement("span");
            spanCargo.innerText = this.usuariosLista[i].cargo;
            spanCargo.id = "spanCargo";

            let h3Nome = document.createElement("h3")
            h3Nome.innerText = this.usuariosLista[i].nome;
            h3Nome.id = "nome";

            let spanEmail = document.createElement("span");
            spanEmail.innerText = this.usuariosLista[i].email;
            spanEmail.id = "email";

            let spanTel = document.createElement("span");
            spanTel.innerText = this.usuariosLista[i].telefone;
            spanTel.id = "tel";

            divFilha.appendChild(h3Nome);
            divFilha.appendChild(img);
            divFilha.appendChild(spanCargo);
            divFilha.appendChild(spanEmail);
            divFilha.appendChild(spanTel);
           
            document.getElementById("divMae").appendChild(divFilha);
        }
    }
}

let controller = new ListadeUsuarios();

