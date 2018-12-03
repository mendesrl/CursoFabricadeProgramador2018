class ControllerConta
{
    constructor()
    {
        this.usuario = new Usuario();
        
    }


    entrar()
    {
        
        this.usuario.pessoa.nome = document.getElementById("nome").value;
        this.usuario.senha= document.getElementById("senha").value;
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
        if(this.usuario.pessoa.nome==""){alert("O campo Nome não está preenchido, Por favor verifique..."); return false;}    
        else if(this.usuario.senha==""){alert("O campo Senha não está preenchido, Por favor verifique..."); return false;}
        else{return true;}
    }

    enviarEmail()
    {
        this.usuario.pessoa.email = document.getElementById("email").value;
        if(this.validarEmail() == true)
        {
            alert("Sua Mensagem foi enviada com sucesso para o email: "+this.usuario.pessoa.email);
            window.location="login.html";
        }
    }

    validarEmail()
    {
        if(this.usuario.pessoa.email==""){alert("Preencha um email por favor"); return false;}    
        else{return true;}
    }
}
let controller = new ControllerConta();