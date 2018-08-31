class Calculadora
{
    calcular()
    {
        //1ºLeitura de entradas
        let peso = parseFloat(document.getElementById("peso").value);
        let altura = parseFloat(document.getElementById("altura").value);
        let divMae = document.createElement("div");
        divMae.id = "divMae";

        //2ºCalculo do IMC
        let imc = parseFloat(peso / (altura*altura).toFixed(2));
        

        //3°Imprimir resultado do IMC
        divMae.innerText = imc.toFixed(2);
        document.body.appendChild(divMae);
        //window.alert("O resultado do IMC é :" + imc.toFixed(2));
    }

   

    
}
var calculadora = new Calculadora();

