class AdicionaNaLista
{
    constructor()
    {
        this.quantidade = 0;
        this.id = 0;
    }

    habilitar()
    {
        document.getElementById("esconde").hidden = false;
    }

    adicionar()
    {   
        this.habilitar();
        let nome = document.getElementById("inputConvidado").value;
        let lista = document.getElementById("lista");
        //lista.innerText = lista.innerText +"\n"+ nome;
        
        //--------------------------
        let divItem = document.createElement("div");
        divItem.classList.add("item-lista");
        divItem.id = "conv-"+this.id;

        
        //--------------------------
        let spanItem = document.createElement("span");
        spanItem.innerText = nome;
        
        
        //--------------------------
        let imgItem = document.createElement("img");
        imgItem.src="img/delete.svg";
        imgItem.setAttribute("onclick", "lista.excluir('" +divItem.id+"')");

        //--------------------------
        divItem.appendChild(spanItem);
        divItem.appendChild(imgItem);

        lista.appendChild(divItem);

        //--------------------------
        this.quantidade = this.quantidade +1;
        this.id=this.id+1;

        document.getElementById("labelQtd");
        labelQtd.innerText = this.quantidade;

    }

    excluir(id)
    {
        let conv = document.getElementById(id);
        let lis = document.getElementById("lista");
        lis.removeChild(conv)
    }

}

var lista = new AdicionaNaLista();