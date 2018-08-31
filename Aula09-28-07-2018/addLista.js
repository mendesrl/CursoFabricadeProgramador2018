class Lista
{
     
    constructor()
    {
        this.lista = [];
        this.listaImpar = [];
        this.listaPar = [];
        this.newList = [];
    }
    
    adicionar()
    {
        //pega o numero inserido pelo usuario
        var numeroInserido = parseInt(document.getElementById("numeroInserido").value);

            //Insere o numero na lista
        this.lista.push(numeroInserido);
        
        //exibe a lista
        this.exibirLista( this.lista );
        this.enableButton();
            
    }
    enableButton()
    {
        if(this.lista.length>1)
        {
            document.getElementById("botaoOrdenar").disabled = false;
            document.getElementById("botaoImpar").disabled = false;
            document.getElementById("botaoPar").disabled = false;
        }
    }
    ordenar()
    {
        
            for(var i=0; i<this.lista.length; i++)//compara todos os numeros com todos os numeros
            {
            
                for(var indice=0; indice<this.lista.length; indice++)
                {
                    if(this.lista[indice]>this.lista[indice+1])
                    {
                        var aux = this.lista[indice];
                        this.lista[indice] = this.lista[indice+1];
                        this.lista[indice+1] = aux;
                    }
                }
                

            }
            this.exibirLista( this.lista );

    }
    numerosImpares()
    {
        this.listaImpar = [];

            for(var indice=0; indice<this.lista.length; indice++)
            {
                
                if(this.lista[indice] %2 !=0)
                {
                    this.listaImpar.push(this.lista[indice]);
                }
                
            }
            
        this.exibirLista( this.listaImpar );
        
    }
    numerosPares()
    {
        this.listaPar = [];
       
            for(var indice=0; indice<this.lista.length; indice++)
            {
                
                if(this.lista[indice] %2 ==0)
                {
                    this.listaPar.push(this.lista[indice]);
                }
            }

        this.exibirLista( this.listaPar );
        
    }

    novaLista()
    {
        for(var i=0; i<this.lista.length; i++)//compara todos os numeros com todos os numeros
            {
            
                for(var indice=0; indice<this.lista.length; indice++)
                {
                    if(this.lista[indice]>this.lista[indice+1])
                    {
                        var aux = this.lista[indice];
                        this.lista[indice] = this.lista[indice+1];
                        this.lista[indice+1] = aux;
                    }
                }
                

            }

            this.listaImpar = [];

            for(var indice=0; indice<this.lista.length; indice++)
            {
                
                if(this.lista[indice] %2 !=0)
                {
                    this.listaImpar.push(this.lista[indice]);
                }
                
            }

            this.listaPar = [];
       
            for(var indice=0; indice<this.lista.length; indice++)
            {
                
                if(this.lista[indice] %2 ==0)
                {
                    this.listaPar.push(this.lista[indice]);
                }
            }

        this.newList = [];

        this.newList.push(this.listaPar +","+this.listaImpar );
            

        this.exibirLista( this.newList );
    }



    limpar()
    {
        var abc = document.getElementById("divMae");
        if (abc!=null) {
            abc.remove();
        }
    }
    exibirLista( listaParaExibir )
    {
        //remove a div lista do body
        this.limpar();

        //Criando uma divMae para agrupar todos os numeros
        var divMae = document.createElement("div");
        //adicionando ID a vid
        divMae.id = "divMae";

        for(var i=0; i<listaParaExibir.length; i++)
        {
            //criando a div filha
            var divFilha = document.createElement("div");
            //adicionando o valor da posição i na divFilha
            divFilha.innerText = listaParaExibir[i];
            //adicionando a divfilha na divMae
            divMae.appendChild(divFilha);
        }

        document.body.appendChild(divMae);

    }
    
}
let lista = new Lista();

