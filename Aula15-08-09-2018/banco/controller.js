class ControllerConta
{
    constructor()
    {
        this.conta = new CadastrodeConta;
        this.lista=[];
    }

    salvar()
    {
        this.remove();
        this.conta.pessoa.nome = document.getElementById("nome").value;
        this.conta.pessoa.rg = document.getElementById("rg").value;
        this.conta.pessoa.cpf = document.getElementById("cpf").value;
        this.conta.pessoa.endereco = document.getElementById("endereco").value;
        if(this.validar() == true)
        {
            this.imprimir();
            this.habilitar();
            this.removeDiv1();
        }
    }

    validar()
    {
        if(this.conta.pessoa.nome==""){alert("O campo Nome não está preenchido, Por favor verifique..."); return false;}    
        else if(this.conta.pessoa.rg==""){alert("O campo RG não está preenchido, Por favor verifique..."); return false;}
        else if(this.conta.pessoa.cpf==""){alert("O campo CPF não está preenchido, Por favor verifique..."); return false;}
        else if(this.conta.pessoa.endereco==""){alert("O campo Endereço não está preenchido, Por favor verifique..."); return false;}
        else{return true;}
    }

    imprimir()
    {
        let divMae = document.createElement("div");
        divMae.id = "box1";
        divMae.innerText = this.conta.pessoa.nome+ " sua conta foi criada com sucesso!\n"+
        "RG:"+this.conta.pessoa.rg+ "\n"+
        "CPF:"+this.conta.pessoa.cpf+ "\n"+
        "Endereço:"+this.conta.pessoa.endereco+ "\n";
        document.getElementById("contaCriada").appendChild(divMae);
    }

    remove()
    {
        let removeID = document.getElementById("box1");
        if (removeID != null) {
            removeID.remove();
        }
        
    }

    habilitar()
    {
        document.getElementById("esconde").hidden = false;
    }

    removeDiv1()
    {
        let removeDiv = document.getElementById("div1");
            if (removeDiv != null) 
                removeDiv.remove();
    }


    depositar()
    {
        let valor = parseInt(document.getElementById("valor").value);
        
        if(valor<0)
        {
            alert("Esse valor não pode ser DEPOSITADO");
        }
        else
        {
           this.conta.depositar(valor);
            this.imprimirDeposito();
        }

    }

    imprimirDeposito()
    {
        let valor = parseInt(document.getElementById("valor").value);
        let divDeposito = document.createElement("div");
        divDeposito.id = "box1";
        divDeposito.innerText = "Você depositou o valor de: R$ "+valor+"\n Seu SALDO ATUAL é: "+this.conta.saldo;
        document.body.appendChild(divDeposito);
    }

    sacar()
    {
        let valor = parseInt(document.getElementById("valor").value);
        if(this.conta.sacar(valor)== false)
        {
            alert("Você não tem SALDO DISPONIVEL para saque");
        }
        else
        {
            this.conta.sacar(valor);
            this.imprimirSaque();
           
        }
    }

    imprimirSaque()
    {
        let valor = parseInt(document.getElementById("valor").value);
        let divSaque = document.createElement("div");
        divSaque.id = "box1";
        divSaque.innerText = "Você Sacou o valor de: R$ "+valor+"\n Seu SALDO ATUAL é: "+this.conta.saldo;
        document.body.appendChild(divSaque);
    }
}
let controller = new ControllerConta();