class ControllerCadastro
{
    constructor()
    {
        this.pessoa = new CadastrodePessoa;
    }

    salvar()
    {
        //Dados do Usuario
        this.pessoa.nome = document.getElementById("nomeCliente").value;
        this.pessoa.idade = document.getElementById("idadeCliente").value;
        this.pessoa.altura = document.getElementById("alturaCliente").value;
        this.pessoa.peso = document.getElementById("pesoCliente").value;
        this.pessoa.cordosOlhos = document.getElementById("corOlhos").value;
        //Validação
        this.validar();
    }

   

    validar()
    {
        if(this.pessoa.nome==""){alert("O campo Nome não está preenchido, Por favor verifique...");}    
        if(this.pessoa.idade==""){alert("O campo Idade não está preenchido, Por favor verifique...");}
        if(this.pessoa.altura==""){alert("O campo Altura não está preenchido, Por favor verifique...");}
        if(this.pessoa.peso==""){alert("O campo Peso não está preenchido, Por favor verifique...");}
        if(this.pessoa.cordosOlhos==""){alert("O campo Cor dos Olhos não está preenchido, Por favor verifique...");}
        
        else{
            //remover o botão Salvar
            this.removeBotaoSalvar();
            
            //habilitar os outros botões
            this.habilitaBotao();

            //Imprime a Tabela
            this.tabela();
        }
    }
    
    removeBotaoSalvar()
    {
        var abc = document.getElementById("salvar");
        abc.remove();
    }

    habilitaBotao()
    {
        document.getElementById("falar").hidden = false;
        document.getElementById("correr").hidden = false;
        document.getElementById("andar").hidden = false;
    }

    andar()
    {
        this.pessoa.andar();
    }

    correr()
    {
        this.pessoa.correr();
    }

    falar()
    {
        this.pessoa.falar();
    }

    tabela()
    {
        //Criação dos Elementos
        var tabela = document.createElement("table");
        var tabelaTRTH = document.createElement("tr");
        var tabelaTRTD = document.createElement("tr");
        var thNome = document.createElement("th");
        var thIdade = document.createElement("th");
        var thAltura = document.createElement("th");
        var thPeso = document.createElement("th");
        var thCorOlhos = document.createElement("th");
        var tdNome = document.createElement("td");
        var tdIdade = document.createElement("td");
        var tdAltura = document.createElement("td");
        var tdPeso = document.createElement("td");
        var tdCorOlhos = document.createElement("td");

        //Atribuição de conteudo nas colunas da tabela
        thNome.innerText = "Nome";
        thIdade.innerText = "Idade";
        thAltura.innerText = "Altura";
        thPeso.innerText = "Peso";
        thCorOlhos.innerText = "Cor dos Olhos";

        //Atribuição dos TH(colunas) nos TR
        tabelaTRTH.appendChild(thNome);
        tabelaTRTH.appendChild(thIdade);
        tabelaTRTH.appendChild(thAltura);
        tabelaTRTH.appendChild(thPeso);
        tabelaTRTH.appendChild(thCorOlhos);
        //---Adiciona na tabela (table)
        tabela.appendChild(tabelaTRTH);
    
        //Atribuição de conteudo nas colunas da tabela
        tdNome.innerText = this.pessoa.nome;
        tdIdade.innerText = this.pessoa.idade;
        tdAltura.innerText = this.pessoa.altura;
        tdPeso.innerText = this.pessoa.peso;
        tdCorOlhos.innerText = this.pessoa.cordosOlhos;

        //Atribuição dos TD(linhas) nos TR
        tabelaTRTD.appendChild(tdNome);
        tabelaTRTD.appendChild(tdIdade);
        tabelaTRTD.appendChild(tdAltura);
        tabelaTRTD.appendChild(tdPeso);
        tabelaTRTD.appendChild(tdCorOlhos);
        //---Adiciona na tabela (table)
        tabela.appendChild(tabelaTRTD);
        
        //adiciona a <table> no <body>
        document.body.appendChild(tabela);
    }


}

let controller = new ControllerCadastro();
   
   

