class ControllerCadastro
{
    constructor()
    {
        this.conta = new CadastrodeUsuario();
    }

    salvar()
    {
        
        this.conta.pessoa.nome = document.getElementById("nome").value;
        this.conta.pessoa.cpf = document.getElementById("cpf").value;
        this.conta.pessoa.endereco = document.getElementById("endereco").value;
        this.conta.pessoa.email = document.getElementById("email").value;
        //this.conta.pessoa.sexo = document.getElementById("sexo").value;
       //this.conta.pessoa.telefone = document.getElementById("telefone").value;
        this.conta.pessoa.nascimento = document.getElementById("data").value;
       
        this.conta.senha = document.getElementById("senha").value;
        this.conta.cargo = document.getElementById("cargo").value;
        
        if(this.validar() == true)
        {
            this.exibirv();
        }
    }

    validar()
    {
        if(this.conta.pessoa.nome==""){alert("O campo Nome não está preenchido, Por favor verifique..."); return false;}
        else if(this.conta.pessoa.cpf==""){alert("O CPF não está preenchido, Por favor verifique..."); return false;}
        else if(this.conta.pessoa.endereco==""){alert("O campo Endereço não está preenchido, Por favor verifique..."); return false;}    
        else if(this.conta.pessoa.email==""){alert("O campo Email não está preenchido, Por favor verifique..."); return false;}
        else if(this.conta.pessoa.sexo==""){alert("O Sexo não foi selecionado, Por favor verifique..."); return false;}
        else if(this.conta.pessoa.telefone==""){alert("Adicione um telefone ao seu cadastro, Por favor verifique..."); return false;}
        else if(this.conta.nascimento==""){alert("O campo Senha não está preenchido, Por favor verifique..."); return false;}
        else if(this.conta.senha==""){alert("O campo Senha não está preenchido, Por favor verifique..."); return false;}
        else if(this.conta.cargo==""){alert("Selecione um cargo para o novo usuario"); return false;}
        
        else{return true;}
    }

    exibirv()
    {
       
        
            let divFilha = document.createElement("div");
            divFilha.id = "divFilha";
            
            let spanCargo = document.createElement("span");
            spanCargo.innerText = this.conta.cargo;

            let h3Nome = document.createElement("h3")
            h3Nome.innerText =  this.conta.pessoa.nome;
            
            let spanData = document.createElement("span");
            spanData.innerText ="Aniversario "+ this.conta.pessoa.nascimento;

            let spanCPF = document.createElement("span");
            spanCPF.innerText = this.conta.pessoa.cpf+" CPF";

        
            divFilha.appendChild(spanCargo);
            divFilha.appendChild(h3Nome);
            divFilha.appendChild(spanData);
            divFilha.appendChild(spanCPF);
            document.body.appendChild(divFilha);
    }

    
    
}
let controller = new ControllerCadastro();



   



    
   
    