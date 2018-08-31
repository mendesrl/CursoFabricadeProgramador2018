class ListadAlunos
{
    constructor()
    {
        this.lista = [];
    }

    adicionarInicio(){
        let nome = document.getElementById("nome").value; 
        this.lista.unshift(nome);//unshift usado para adicionar na primeira posisção
        this.exibirLista(this.lista);
       
    }

    adicionarPosicao(){
    let nome = document.getElementById("nome").value;
    let position = document.getElementById("inputPosicao").value;
    
    
    for(var i=this.lista.length; i>=position; i--)
    {
        this.lista[i] = this.lista[i-1];
    }

    if(position==undefined||position=="")
    {
        this.lista[0] = nome;
    }
    else{
    this.lista[position] = nome;
    }
    this.exibirLista(this.lista); 

    console.log(this.lista);   
    }


    adicionarFinal()
    {
        let nome = document.getElementById("nome").value; 
        this.lista.push(nome);//Push usado para adicionar no final da lista/vetor
        this.exibirLista(this.lista);
        console.log(this.lista);
    }
    exibirLista( listaParaExibir )
    {
        this.limpar();
        var divMae = document.createElement("table");
        divMae.id = "divMae";
        var tabelaTR = document.createElement("tr");
        var tabelaposition = document.createElement("th");
        var tabelanome = document.createElement("th");
        
        tabelaposition.innerText = "Aluno";
        tabelanome.innerText = "Posição";
        tabelaTR.appendChild(tabelaposition);
        tabelaTR.appendChild(tabelanome);
        divMae.appendChild(tabelaTR);
        document.body.appendChild(divMae);

        for(var i=0; i<listaParaExibir.length; i++)
        {
            var tabelaTRTD = document.createElement("tr");
            var divFilha = document.createElement("td");
            var divFilha1 = document.createElement("td");
            divFilha.innerText = listaParaExibir[i];
            divFilha1.innerText = i;
            tabelaTRTD.appendChild(divFilha);
            tabelaTRTD.appendChild(divFilha1);
            divMae.appendChild(tabelaTRTD);
    
        }
    }

    


    limpar()
    {
        var abc = document.getElementById("divMae");
        if (abc!=null) {
            abc.remove();
        }
    }
    
    remover()
    {
        let nome = document.getElementById("nome").value; 
        for (var i=0; i<this.lista.length; i++)
        {
            if (nome==this.lista[i])
            {
                
                alert("Fez a busca no vetor e encontrou: "+ nome);
            }
        }
    }


    teste()
    {
        //acrescentando elementos
        var numbers = [0,1,2];
        //console.log(numbers);

        //acrescentar o numero 10 na lista
        numbers[numbers.length] = 3;
        //console.log(numbers);

        //acrescentar elementos no final com PUSH();
        numbers.push(4);
        //console.log(numbers);
        //numbers.push(12,13);
        //console.log(numbers);
        
        //adicionando na primeira posição
        for (var i=numbers.length; i>=0; i--)
        {
            numbers[i] = numbers[i-1];
            //console.log(numbers);
        }

        numbers[0] = -1;
        //console.log(numbers);

        //adicionando o -2 no inicio do vetor
        numbers.unshift(-2,-3)
        //console.log(numbers);
        
        //Remove a ULTIMA posição do vetor
        numbers.pop();
        //console.log(numbers);

        //Remove a primeira posição do vetor
        numbers.shift();
        console.log(numbers);

        numbers.splice(1,2);
        console.log(numbers);
    }
}

let lista = new ListadAlunos();

