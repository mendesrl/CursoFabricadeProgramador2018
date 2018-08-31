function gerar()
{
    //primeiroFator * segundoFator = resultadoTabuada

    let primeiroFator = document.getElementById("numero").value;
    let divMae = document.createElement("div");
    let resultadoTabuada ="";
    let divFilha = document.createElement("div");

    for(let segundoFator=1; segundoFator<11; segundoFator++)
    {
        
        resultadoTabuada += primeiroFator+"x"+segundoFator+"="+primeiroFator*segundoFator+"\n";
    }

    divFilha.innerHTML= resultadoTabuada;
    divMae.appendChild(divFilha);
    document.body.appendChild(divMae);
}



function todos()
{
    for(let primeiroFator=1; primeiroFator<3; primeiroFator++)
    {
        let divMae = document.createElement("div");
        let resultadoTabuada ="";
        let divFilha = document.createElement("div");

        for(let segundoFator=1; segundoFator<11; segundoFator++)
        {
        
            resultadoTabuada += primeiroFator+"x"+segundoFator+"="+primeiroFator*segundoFator+"\n";
        }

    divFilha.innerHTML= resultadoTabuada;
    divMae.appendChild(divFilha);
    document.body.appendChild(divMae);
    }
}