class LogindeUsuario
{
    constructor()
    {
        this.pessoa = new Pessoa();
    }

    salvar()
    {
        this.pessoa.nome = document.getElementById("nome").value;
        this.pessoa.senha = document.getElementById("senha").value;
        
       
        if(this.validarCampos() == true)
        {
            this.imprimir();
            this.removerTeste();
        }
    }

    validarCampos()
    {
        
        if(this.pessoa.nome==""){alert("O campo Nome não está preenchido, Por favor verifique..."); return false;}    
        else if(this.pessoa.senha==""){alert("O campo Senha não está preenchido, Por favor verifique..."); return false;}
        else{return true;}
    }

    imprimir()
    {
        alert("Teste");
        document.location = 'http://www.oficinadanet.com.br';
       
    }

    removerTeste()
    {
       let abc = document.getElementsByTagName("img");
       if (abc != null) 
            abc.remove();
       
    }
}

let controller = new LogindeUsuario();
