class CalculaMaiorMenor
{
    constructor()
    {
        this.numero1 = "";
        this.numero2 = "";
    }

    numeros()
    {
         this.numero1 = document.getElementById("numero1").value;
         this.numero2 = document.getElementById("numero2").value;
       
    }

    maior()
    {
        this.limpar();
        this.numeros();
        let divMae = document.createElement("div");
        divMae.id="divMae";
        
        if(this.numero1>this.numero2){
            divMae.innerHTML= "O Maior é o: "+this.numero1;
            document.body.appendChild(divMae);
        }
        else{
            divMae.innerHTML= "O Maior é o: "+this.numero2;
            document.body.appendChild(divMae);
        }
    }
    
    menor()
    {
        this.limpar();
        this.numeros();
        let divMae = document.createElement("div");
        divMae.id="divMae";

        if(this.numero1<this.numero2){
            divMae.innerHTML= "O Menor é o: "+this.numero1;
            document.body.appendChild(divMae);
        }
        else{
            divMae.innerHTML= "O Menor é o: "+this.numero2;
            document.body.appendChild(divMae);
        }
    }

    limpar()
    {
        var abc = document.getElementById("divMae");
        if (abc!=null) {
            abc.remove();
        }
    }
   
}

let botao = new CalculaMaiorMenor();


   
    
    

    

    