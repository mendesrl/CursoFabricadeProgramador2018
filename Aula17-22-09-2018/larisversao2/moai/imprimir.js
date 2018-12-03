class Imprimir{

    imprimir()
    {
        var conteudo = document.getElementById('lista').innerHTML,
        tela_impressao = window.open('about:blank');

        tela_impressao.document.write(conteudo); /*abrir uma nova tela*/
        tela_impressao.window.print();/*Printa*/
        tela_impressao.window.close();/*Volta pra tela*/
    }
   

}

let controller = new Imprimir();