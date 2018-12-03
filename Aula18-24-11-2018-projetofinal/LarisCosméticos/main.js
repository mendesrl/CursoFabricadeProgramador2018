class Validation
{
    validar()
    {
        /*-------------Validar campo nome--------------*/
            //1- Ler o valor do campo nome
            var nomeUsuario = document.getElementById("nomeUsuario").value;

            //2- Se no campo nome não colocarem nenhum valor entra na condição
            if(nomeUsuario=="")
            {
                document.getElementById("errorNome").innerText = "Preencha o campo com seu NOME";
            }

        /*-------------Validar campo email--------------*/
            //1- Ler o valor do campo email
            var emailUsuario = document.getElementById("emailUsuario").value;
            
            //2- Se no campo nome não colocarem nenhum valor entra na condição
            if(emailUsuario=="")
            {
                document.getElementById("errorEmail").innerText = "Preencha o campo com um EMAIL";
            }
        
        /*-------------Validar o campo sexo--------------*/
            //1- Ler o valor do campo marcado
            var sexo = document.querySelector("[type=radio]:checked");

            //2- Se no campo nome não colocarem nenhum valor entra na condição
            if(sexo==null)
            {
                document.getElementById("errorSexo").innerText = "Selecione uma opção de SEXO";
            }
        
        /*-------------Validar os cursos de interesse--------------*/
            //1- Ler pelo menos um valor selecionado
            var cursos = document.querySelector("[type=checkbox]:checked");

            //2- Se no campo nome não colocarem nenhum valor entra na condição
            if(cursos==null)
            {
                document.getElementById("errorCursos").innerText = "Selecione pelo menos um curso";
            }

        /*-------------Validar o seletor de estados--------------*/
            //1- Ler qual o estado foi selecionado
            var estados = document.getElementById("ESTADOS").value;

            //2- Se no campo nome não colocarem nenhum valor entra na condição
            if(estados=="")
            {
                document.getElementById("errorEstados").innerText = "Selecione seu ESTADO";
            }

        /*-------------Validar o campo de foto--------------*/
            //1- Ler se existe uma foto carregada
            var foto = document.getElementById("foto").files[0];

            //2- Se no campo nome não colocarem nenhum valor entra na condição
            if(foto==undefined)
            {
                document.getElementById("errorFoto").innerText = "Carregue uma FOTO";
            }
            else if (foto.type !="image/png")
            {
                document.getElementById("errorFoto").innerText = "extensão de arquivo não permitido";
            }
           

        /*-------------Validar a data de nascimento--------------*/
            //1- Ler se existe uma foto carregada
            var dataNascimento = document.getElementById("DATA").value;

            //2- Se no campo nome não colocarem nenhum valor entra na condição
            if(dataNascimento=="")
            {
                document.getElementById("errorData").innerText = "Informe sua DATA de nascimento";
            }


    }
}

var validaForm = new Validation();