function gerar ()
{
    
    //Criando uma div
    var numero = document.getElementById("numero").value;
    var divResultado = document.createElement("div");
    var tabuada="";

    for(var i=1; i<=10; i++)
    {
        tabuada += numero+"x"+i+"="+numero*i+"\n";
    } 

    divResultado.innerHTML = tabuada;
    //adicionando a divResuktadi dentro do body
    document.body.appendChild(divResultado);
    
    //console.log(divResultado);
}


function gerarTodos ()
{
    for(var numero=0; numero<=4; numero++)
    {
        var divResultado = document.createElement("div");
        var tabuada="";

        for(var i=1; i<=10; i++)
        {
            tabuada += numero+"x"+i+"="+numero*i+"\n";
        } 

        divResultado.innerHTML = tabuada;
        document.body.appendChild(divResultado);

    }
    
}