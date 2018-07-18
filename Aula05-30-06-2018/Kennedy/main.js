function confeririJogo()
{
    setTimeout( ()=> 
    {
        ///////////////////--DECLARAÇÃO DAS VARIAVEIS DO JOGO--////////////////////////////
        var cel1 = document.getElementById("cel1").value;
        var cel2 = document.getElementById("cel2").value;   
        var cel3 = document.getElementById("cel3").value;
        var cel4 = document.getElementById("cel4").value;
        var cel5 = document.getElementById("cel5").value;
        var cel6 = document.getElementById("cel6").value;
        var cel7 = document.getElementById("cel7").value;
        var cel8 = document.getElementById("cel8").value;
        var cel9 = document.getElementById("cel9").value;

///////////////////--PRIMEIRA LINHA--////////////////////////////        

                /*Compara a Primeira linha e calula*/
                if(cel1 !="" && cel1 == cel2 && cel2 == cel3)
                {
                    if(cel3 == "x" || cel3 == "X")
                    {
                        window.alert(cel3 + " é o VENCEDOR" );
                        limparCampos();
                    }
                    else if (cel3 == "o" || cel3 == "O")
                    {
                        window.alert(player2 + " é o VENCEDOR" );
                        limparCampos();
                    }
                    
                }

            ///////////////////--SEGUNDA LINHA--////////////////////////////

                /*Compara a segunda linha e calula*/
                else if(cel4 !="" && cel4 == cel5 && cel5 == cel6)
                {
                    confereGanhador(cel4);
                        limparCampos();
                    }
                    else if (cel6 == "o" || cel6 == "O")
                    {
                        window.alert(player2 + " é o VENCEDOR" );
                        limparCampos();
                    }
                }
            
            ///////////////////--TERCEIRA LINHA--////////////////////////////

                /*Compara a segunda linha e calula o venceddor*/
                else if(cel7 !="" && cel7 == cel8 && cel8 == cel9)
                {
                    if(cel9 == "x" || cel9 == "X")
                    {
                        window.alert(player1 + " é o VENCEDOR" );
                        limparCampos();
                    }
                    else if (cel9 == "o" || cel9 == "O")
                    {
                        window.alert(player2 + " é o VENCEDOR" );
                        limparCampos();
                    }
                }

            ///////////////////--PRIMEIRA COLUNA--////////////////////////////        

                /*Compara a Primeira COLUNA e calula*/
                else if(cel1 !="" && cel1 == cel4 && cel4 == cel7)
                {
                    if(cel7 == "x" || cel7 == "X")
                    {
                        window.alert(player1 + " é o VENCEDOR" );
                        limparCampos();
                    }
                    else if (cel7 == "o" || cel7 == "O")
                    {
                        window.alert(player2 + " é o VENCEDOR" );
                        limparCampos();
                    }
                }

            ///////////////////--SEGUNDA COLUNA--////////////////////////////

                /*Compara a segunda COLUNA e calula*/
                else if(cel2 !="" && cel2 == cel5 && cel5 == cel8)
                {
                    if(cel8 == "x" || cel8 == "X")
                    {
                        window.alert(player1 + " é o VENCEDOR" );
                        limparCampos();
                    }
                    else if (cel8 == "o" || cel8 == "O")
                    {
                        window.alert(player2 + " é o VENCEDOR" );
                        limparCampos();
                    }
                }
               
            ///////////////////--TERCEIRA COLUNA--////////////////////////////

                /*Compara a terceira COLUNA e calula*/
                else if(cel3 !="" && cel3 == cel6 && cel6 == cel9)
                {
                    if(cel9 == "x" || cel9 == "X")
                    {
                        window.alert(player1 + " é o VENCEDOR" );
                        limparCampos();
                    }
                    else if (cel9 == "o" || cel9 == "O")
                    {
                        window.alert(player2 + " é o VENCEDOR" );
                        limparCampos();
                    }
                }

            ///////////////////---DIAGONAIS---////////////////////////////
            
                /*1º DIAGONAL*/
                else if(cel1 !="" && cel1 == cel5 && cel5 == cel9)
                {
                    if(cel9 == "x" || cel9 == "X")
                    {
                        window.alert(player1 + " é o VENCEDOR" );
                        limparCampos();
                    }
                    else if (cel9 == "o" || cel9 == "O")
                    {
                        window.alert(player2 + " é o VENCEDOR" );
                        limparCampos();
                    }
                }

                /*2º DIAGONAL*/
                else if(cel3 !="" && cel3 == cel5 && cel5 == cel7)
                {
                    if(cel7 == "x" || cel7 == "X")
                    {
                        window.alert(player1 + " é o VENCEDOR" );
                        limparCampos();
                    }
                    else if (cel7 == "o" || cel7 == "O")
                    {
                        window.alert(player2 + " é o VENCEDOR" );
                        limparCampos();
                    }
                }

            ///////////////////---Empate---////////////////////////////
                else if (cel1 !="" &&
                         cel2 !="" &&
                         cel3 !="" &&
                         cel4 !="" &&
                         cel5 !="" &&
                         cel6 !="" &&
                         cel7 !="" &&
                         cel8 !="" &&
                         cel9 !="" )
                         {
                            window.alert("FIM DO JOGO : Deu Velha");
                            limparCampos();
                        }


    }, 50);//Fim do Set

}//Fim da Function

function limparCampos()
{
    document.getElementById("cel1").value = "";
    document.getElementById("cel2").value = "";  
    document.getElementById("cel3").value = "";
    document.getElementById("cel4").value = "";
    document.getElementById("cel5").value = "";
    document.getElementById("cel6").value = "";
    document.getElementById("cel7").value = "";
    document.getElementById("cel8").value = "";
    document.getElementById("cel9").value = "";
}

function confereGanhador(ganhador)
{
    
}