class Lista
{
    constructor(){this.lista = [];}

    limpar()
    {
        var abc = document.getElementById("divMae");
        if (abc!=null) {
            abc.remove();
        }
    }

    adicionar()
    {
        this.limpar();
        //pega o numero inserido pelo usuario
        var numeroInserido = parseInt(document.getElementById("numeroInserido").value);
        var divMae = document.createElement("div");
        var divFilha = document.createElement("div");
        divMae.id = "divMae";

            //Insere o numero na lista
        this.lista.push(numeroInserido);
        
        
        divFilha.innerText = "A lista é: " +this.lista+".";
        divMae.appendChild(divFilha);
        document.body.appendChild(divMae);    
    }

    media()
    {
        var soma = 0;
        var media = 0;
        var divMae = document.createElement("div");
        var divFilha = document.createElement("div");
        divMae.id = "divMae";

        for(var indice=0; indice<this.lista.length; indice++)
        {
            soma += this.lista[indice];
        }

        media = soma/this.lista.length;
        divFilha.innerText = "A média da lista ("+this.lista+ ") é: " +media;
        divMae.appendChild(divFilha);
        document.body.appendChild(divMae); 
    }





}
let lista = new Lista();