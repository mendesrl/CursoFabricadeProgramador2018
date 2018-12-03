class ListadeClientes
{
    constructor()
    {
        this.clientesLista = [];
        this.carregarClientes();
        this.exibirv();
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

    exibirv()
    {
        for (var i=0; i<this.clientesLista.length; i++)
        {
        
            let divFilha = document.createElement("div");
            divFilha.id = "divFilha";

            
            let spanData = document.createElement("span");
            spanData.innerText = "🎁Aniversário: "+this.clientesLista[i].data;
            spanData.id = "spanCargo";

            let h3Nome = document.createElement("h3")
            h3Nome.innerText = this.clientesLista[i].nome;
            h3Nome.id = "nome";

            let spanEmail = document.createElement("span");
            spanEmail.innerText ="📧Email: " +this.clientesLista[i].email;
            spanEmail.id = "email";

            let spanTel = document.createElement("span");
            spanTel.innerText ="📞Contato: " +this.clientesLista[i].telefone;
            spanTel.id = "tel";

            divFilha.appendChild(h3Nome);
            divFilha.appendChild(spanData);
            divFilha.appendChild(spanEmail);
            divFilha.appendChild(spanTel);
           
            document.getElementById("divMae").appendChild(divFilha);
        }
    }
}

let controller = new ListadeClientes();

