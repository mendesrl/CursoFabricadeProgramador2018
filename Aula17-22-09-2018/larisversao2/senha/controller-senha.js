class ControllerSenha
{
    constructor()
    {
        this.conta = new CadastrodeUsuario;
        
    }

    enviarEmail()
    {
        
        this.conta.pessoa.email = document.getElementById("email").value;
        if(this.validar() == true)
        {
            window.location="senhaEnviada.html";
            this.imprimir();
            this.habilitar();
            this.removeDiv1();
        }
    }

    validar()
    {
        if(this.conta.pessoa.email=="" ||this.conta.pessoa.email.search("@")==-1){alert("O campo email não está preenchido, Por favor verifique..."); return false;}    
        else if(this.conta.pessoa.email.search("@")==-1){alert("O email não é valido, Por favor verifique..."); return false;}
        else{return true;}
    }
}
let controller = new ControllerSenha();