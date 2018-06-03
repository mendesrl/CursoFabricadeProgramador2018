class Calculadora
{
    //Esta função faz a soma de dois numeros inteiros
    soma()
    {

        //Declaracao de variaveis se for INT usa parseInt, vou utilizar parseFloat
        //var n1 = parseFloat(document.getElementById("numero1").value);
        //var n2 = parseFloat(document.getElementById("numero2").value);
        /*alert("O resultado da soma é: " + soma);*/
        

        //1-Leitura das variaveis
        var n1 = parseInt(document.getElementById("numero1").value);
        var n2 = parseInt(document.getElementById("numero2").value);

        //2-soma de inteiros
        var soma = n1 + n2;

        //3-Imprime resultados
        document.getElementById("total").value = soma;
        
    }

    //Esta função faz a subtração de dois numeros flutuantes
    sub(){

        //1-Declaracao de variaveis
        var n1 = parseInt(document.getElementById("numero1").value);
        var n2 = parseInt(document.getElementById("numero2").value);

        //2-subtração de numeros
        var sub = n1 - n2;

        //3-Imprimir os resultados em tela
        document.getElementById("total").value = sub;
        /*Imprimir como alerta :alert("O resultado da subtração é: " + sub);*/
        
    }

    //Esta função faz a multiplicação de dois numeros flutuantes
    mul(){
        
        //1-Declaracao de variaveis
        var n1 = parseInt(document.getElementById("numero1").value);
        var n2 = parseInt(document.getElementById("numero2").value);

        //2-Multiplicação de numeros
        var mul = n1 * n2;

        //3-Imprimir os resultados
        document.getElementById("total").value = mul;
        /*alert("O resultado da multiplicação é: " + mul);*/
        
    }

    //Esta função faz a divisão de dois numeros flutuantes
    divs()
    {
    //Declaracao de variaveis
    var n1 = parseInt(document.getElementById("numero1").value);
    var n2 = parseInt(document.getElementById("numero2").value);

    //subtração de numeros
    var divs = n1 / n2;

    //alert("O resultado da divisão é: " + divs);
    
    //Vai imprimir a divisão na tela no campo resultado
    document.getElementById("total").value = divs;
    }



    

}
var calc = new Calculadora ();
