class TelaLogin 
{
    validar()
    {
        //Mensagens de erro
        var errorMessages = "";

        //ler o nome do usuario
        var nome = document.getElementById("nome").value;

        //ler a senha do usuario
        var senha = document.getElementById("senha").value;

        /////////////////////////--Validar o nome

        if(nome=="")//Se o campo nome não estiver preenchido retorna erro
            {
                errorMessages +="Preencha o campo com seu NOME \n";
            }
        
        /////////////////////////--validar senha
        if(senha=="")//Se o campo da senha não estiver preenchido retorna erro
            {
                errorMessages +="Informe uma senha\n";
            }

        if(senha!="123")//Se a senha for diferente de 123 , a senha está incorreta
            {
                errorMessages +="senha incorreta\n";
            }

        /////////////////////////--validar todos os campos
        if (errorMessages!="")//Se algum campo estiver preenchido o alerta exibe o campo que falta ser preenchido
            {
                    window.alert(errorMessages);
            }
    }
}
//Instanciação do objeto
var login = new TelaLogin;
