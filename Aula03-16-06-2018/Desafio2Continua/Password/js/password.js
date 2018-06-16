class ForgotPassword{
    validar()
    {
        //Mensagens de erro
        var errorMessages = "";

        //ler o email do usuario
        var emailusuario = document.getElementById("emailusuario").value;


        /////////////////////////--Validar o nome

        if(emailusuario=="")//Se o campo nome não estiver preenchido retorna erro
            {
                errorMessages +="Preencha o campo com seu EMAIL \n";
            }

        /////////////////////////--validar todos os campos
        if (errorMessages!="")//Se algum campo estiver preenchido o alerta exibe o campo que falta ser preenchido
            {
                    window.alert(errorMessages);
            }


    }
}

var sent = new ForgotPassword;