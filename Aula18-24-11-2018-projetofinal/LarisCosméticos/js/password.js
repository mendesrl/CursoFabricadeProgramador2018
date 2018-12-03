class ForgotPassword{
    validar()
    {
        
        //ler o email do usuario
        var emailusuario = document.getElementById("emailusuario").value;
        
        /////////////////////////--Validar o nome

        if(emailusuario=="")//Se o campo nome não estiver preenchido retorna erro
            {
                document.getElementById("total").innerText = "erro";
                
                
            }
        if(emailusuario=="larissa")
        {
            document.getElementById("total").innerText = emailusuario;
        }

        /////////////////////////--validar todos os campos
        if (errorMessages!="")//Se algum campo estiver preenchido o alerta exibe o campo que falta ser preenchido
            {
                    window.alert(errorMessages);
            }


    }
}

var sent = new ForgotPassword;
