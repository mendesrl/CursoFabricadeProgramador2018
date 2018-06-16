class TelaRegister{

    validar()
    {
        //Mensagens de erro
        var errorMessages = "";

        //ler o nome do usuario
        var nome = document.getElementById("nome").value;

        //ler o username do usuario
        var nomeusuario = document.getElementById("nomeusuario").value;

        //ler a senha do usuario
        var senha = document.getElementById("senha").value;

        /////////////////////////--Validar o nome

        if(nome=="")//Se o campo nome não estiver preenchido retorna erro
            {
                errorMessages +="Preencha o campo com seu NOME \n";
            }
        

        /////////////////////////--Validar o nome do usuario

        if(nomeusuario=="")//Se o campo nome não estiver preenchido retorna erro
            {
                errorMessages +="Preencha o campo com um Nome de Usuario \n";
            }
        
        /////////////////////////--validar senha
        if(senha=="")//Se o campo da senha não estiver preenchido retorna erro
            {
                errorMessages +="Informe uma SENHA\n";
            }

        /////////////////////////--validar todos os campos
        if (errorMessages!="")//Se algum campo estiver preenchido o alerta exibe o campo que falta ser preenchido
            {
                    window.alert(errorMessages);
            }

    }
}
var save = new TelaRegister;