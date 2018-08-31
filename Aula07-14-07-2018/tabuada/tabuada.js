function gerarTabuada ()
{
    let primeiroFator = document.getElementById("primeiroFator").value;
    let divResultado = document.createElement("div");
    let resultadoTabuada="";

    for(let segundoFator=1; segundoFator<=10; segundoFator++){
        resultadoTabuada += primeiroFator + "x" + segundoFator +"="+ primeiroFator * segundoFator + "\n";} 

    divResultado.innerHTML = resultadoTabuada;
    document.getElementById("myDivList").appendChild(divResultado);
    let list = document.getElementById("myDivList");
    list.removeChild(divResultado);   
}

function gerarTodasTabuadas ()
{
    //primeiroFator * segundoFator = resultadoTabuada
    for(var primeiroFator=1; primeiroFator<=10; primeiroFator++)
    {
        var divResultado = document.createElement("div");
        var resultadoTabuada="";

        for(var segundoFator=1; segundoFator<=10; segundoFator++)
        {
            resultadoTabuada += primeiroFator + "x" + segundoFator + "=" + primeiroFator * segundoFator+"\n\n";
        } 

        divResultado.innerHTML = resultadoTabuada;
        document.getElementById("myDivListTodos").appendChild(divResultado);

    }
    
}

