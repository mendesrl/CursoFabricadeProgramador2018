class ControllerCachorro
{
    constructor()
    {
        this.cachorro = new Cachorro
    }


    salvar()
    {
        this.cachorro.nome = document.getElementById("nome").value;
        this.cachorro.idade = document.getElementById("idade").value;
        this.cachorro.dono = document.getElementById("dono").value;
        let divMae = document.createElement("div");

        divMae.innerText = "Nome é: "+this.cachorro.nome+"\n"+
        "Idade é: "+this.cachorro.idade+"\n"+
        "Dono é: "+this.cachorro.dono;

        document.body.appendChild(divMae);
        
    }

    latir()
    {
        this.cachorro.latir();
    }

    lamber()
    {
        this.cachorro.lamber();
    }



}

let controller = new ControllerCachorro();