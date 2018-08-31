function GerarTabuada()
{
    //primeiroFator * segundoFator = resultadoTabuada

    let primeiroFator = document.getElementById("numeroDesejado").value;
    let divMãe = document.createElement("div");
    let resultadoTabuada="";

    for(let segundoFator=1; segundoFator<=10; segundoFator++)
    {
        resultadoTabuada += primeiroFator + "x" + segundoFator +"="+ primeiroFator * segundoFator + "\n";
    }
    
    divResultado.innerHTML = resultadoTabuada;
    document.getElementById("exibeTabuada").appendChild(divResultado);
    let listaTabuadasGeradas = document.getElementById("exibeTabuada");
    listaTabuadasGeradas.removeChild(listaTabuadasGeradas.childNodes[0]); 
    
}



function TodasTabuadas()
{
    
    //primeiroFator * segundoFator = resultadoTabuada
    for(var primeiroFator=1; primeiroFator<10; primeiroFator++)
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



