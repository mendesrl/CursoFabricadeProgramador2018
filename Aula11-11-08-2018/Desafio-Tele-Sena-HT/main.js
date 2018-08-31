class TeleSenaHT
{
    constructor()
    {
        this.lista = [];
        this.listaInvertida = [];
    }
    
    sortear()
    {
        this.limpar();
        
        for(let quantidadeNumeros=0; quantidadeNumeros<10; quantidadeNumeros++){
            this.lista.push(Math.floor(Math.random() * 10));
        }
        
        this.exibirLista( this.lista );
        this.invertido();
        this.exibirLista( this.listaInvertida );

    }

    exibirLista( listaParaExibir)
    {
        
        var divMae = document.createElement("div");
        divMae.id = "divMae";

        for(var i=0; i<listaParaExibir.length; i++)
        {
            
            var divFilha = document.createElement("div");
            divFilha.innerText = listaParaExibir[i];
            divMae.appendChild(divFilha);
            
            
        }
        
        document.body.appendChild(divMae);
        
        
    }

    invertido ()
    {   
        
        this.listaInvertida = this.lista.reverse();
        
    }


    limpar(){
        var abc = document.getElementById("divMae");
        if (abc!=null) 
        {
            abc.remove();
            var c = document.getElementsByTagName("div");
            c.remove();
            
        }
    }

    
   
}
let teleSena =  new TeleSenaHT();