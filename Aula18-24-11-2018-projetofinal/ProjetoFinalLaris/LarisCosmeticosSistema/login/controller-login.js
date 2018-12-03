class ControllerConta
{
    constructor()
    {
        this.conta = new CadastrodeUsuario;
        
    }

    entrar()
    {
        
        this.conta.pessoa.nome = document.getElementById("nome").value;
        this.conta.senha = document.getElementById("senha").value;
        if(this.validar() == true)
        {
            window.location="./menuInicial/menu.html";
            this.imprimir();
            this.habilitar();
            this.removeDiv1();
        }
    }

    validar()
    {
        if(this.conta.pessoa.nome==""){alert("O campo Nome não está preenchido, Por favor verifique..."); return false;}    
        else if(this.conta.senha==""){alert("O campo Senha não está preenchido, Por favor verifique..."); return false;}
        else{return true;}
    }

    enviarEmail()
    {
        this.conta.pessoa.email = document.getElementById("email").value;
        if(this.validarEmail() == true)
        {
            alert("Sua Mensagem foi enviada com sucesso para o email: "+this.conta.pessoa.email);
            window.location="login.html";
        }
    }

    validarEmail()
    {
        if(this.conta.pessoa.email==""){alert("Preencha um email por favor"); return false;}    
        else{return true;}
    }
}
let controller = new ControllerConta();