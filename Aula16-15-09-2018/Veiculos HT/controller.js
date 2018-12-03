class CadastrodeVeiculos
{
    constructor()
    {
        this.veiculo1 = new Veiculo();
        this.veiculo2 = new Veiculo();
        this.veiculo3 = new Veiculo();
    }

    salvar()
    {
        if(this.veiculo1.nome == undefined &&
            this.veiculo1.cor == undefined &&
            this.veiculo1.qtdPortas == undefined &&
            this.veiculo1.km == undefined &&
            (this.veiculo1.fabricante == ""||this.veiculo1.fabricante == undefined) &&
            this.veiculo1.ano == undefined &&
            this.veiculo1.preco == undefined &&
            this.veiculo1.linkfoto == undefined)
            {
                this.veiculo1.nome = document.getElementById("nome").value;
                this.veiculo1.cor = document.getElementById("cor").value;
                this.veiculo1.qtdPortas = document.getElementById("qtdPortas").value;
                this.veiculo1.km = document.getElementById("km").value;
                this.veiculo1.fabricante = document.getElementById("fabricante").value;
                this.veiculo1.ano = document.getElementById("ano").value;
                this.veiculo1.preco = document.getElementById("preco").value;
                this.veiculo1.linkfoto = document.getElementById("linkfoto").value;
                this.exibirv1();
                this.remove();
            }
        
        else if (this.veiculo2.nome == undefined &&
                this.veiculo2.cor == undefined &&
                this.veiculo2.qtdPortas == undefined &&
                this.veiculo2.km == undefined &&
                (this.veiculo2.fabricante == ""||this.veiculo2.fabricante == undefined) &&
                this.veiculo2.ano == undefined &&
                this.veiculo2.preco == undefined)
            {
                this.veiculo2.nome = document.getElementById("nome").value;
                this.veiculo2.cor = document.getElementById("cor").value;
                this.veiculo2.qtdPortas = document.getElementById("qtdPortas").value;
                this.veiculo2.km = document.getElementById("km").value;
                this.veiculo2.fabricante = document.getElementById("fabricante").value;
                this.veiculo2.ano = document.getElementById("ano").value;
                this.veiculo2.preco = document.getElementById("preco").value;
                this.exibirv2();
                this.remove();
            }
            
        else if (this.veiculo3.nome == undefined &&
                this.veiculo3.cor == undefined &&
                this.veiculo3.qtdPortas == undefined &&
                this.veiculo3.km == undefined &&
                (this.veiculo3.fabricante == ""||this.veiculo3.fabricante == undefined) &&
                this.veiculo3.ano == undefined &&
                this.veiculo3.preco == undefined)
            {
                this.veiculo3.nome = document.getElementById("nome").value;
                this.veiculo3.cor = document.getElementById("cor").value
                this.veiculo3.qtdPortas = document.getElementById("qtdPortas").value
                this.veiculo3.km = document.getElementById("km").value
                this.veiculo3.fabricante = document.getElementById("fabricante").value
                this.veiculo3.ano = document.getElementById("ano").value
                this.veiculo3.preco = document.getElementById("preco").value
                this.exibirv3();
                this.remove();
                
                
            }
        else
        {
            alert("Você já armazenou todos os veículos possiveis");
        }
    }

    exibirv1()
    {
        
        let divMae = document.createElement("div");
        divMae.id = "div1";

        let img = document.createElement("img");
        img.src = this.veiculo1.linkfoto;
        img.id = "imglinkfoto"
        
        let spanFabric = document.createElement("span");
        spanFabric.innerText = this.veiculo1.fabricante;
        spanFabric.id = "spanFabric";

        let h3Nome = document.createElement("h3")
        h3Nome.innerText = this.veiculo1.nome;
        
        let spanAno = document.createElement("span");
        spanAno.innerText ="Ano "+this.veiculo1.ano;

        let spanKM = document.createElement("span");
        spanKM.innerText = this.veiculo1.km+" KM";

        let spanCor = document.createElement("span");
        spanCor.innerText ="Cor: "+this.veiculo1.cor;

        let spanqtdPortas = document.createElement("span");
        spanqtdPortas.innerText =this.veiculo1.qtdPortas+" Portass";

        let h2Preco = document.createElement("h2")
        h2Preco.innerText ="R$: "+this.veiculo1.preco;

        divMae.appendChild(img);
        divMae.appendChild(spanFabric);
        divMae.appendChild(h3Nome);
        divMae.appendChild(spanAno);
        divMae.appendChild(spanKM);
        divMae.appendChild(spanCor);
        divMae.appendChild(spanqtdPortas);
        divMae.appendChild(h2Preco);
        document.body.appendChild(divMae);
    }

    exibirv2()
    {
        
        let divMae = document.createElement("div");
        divMae.id = "div2";
       
        let img = document.createElement("img");
        img.src = this.veiculo2.linkfoto;
        img.id = "imglinkfoto"
        
        let spanFabric = document.createElement("span");
        spanFabric.innerText = this.veiculo2.fabricante;
        spanFabric.id = "spanFabric";

        let h3Nome = document.createElement("h3")
        h3Nome.innerText = this.veiculo2.nome;
        
        let spanAno = document.createElement("span");
        spanAno.innerText ="Ano "+this.veiculo2.ano;

        let spanKM = document.createElement("span");
        spanKM.innerText = this.veiculo2.km+" KM";

        let spanCor = document.createElement("span");
        spanCor.innerText ="Cor: "+this.veiculo2.cor;

        let spanqtdPortas = document.createElement("span");
        spanqtdPortas.innerText =this.veiculo2.qtdPortas+" Portass";

        let h2Preco = document.createElement("h2")
        h2Preco.innerText ="R$: "+this.veiculo2.preco;

        divMae.appendChild(img);
        divMae.appendChild(spanFabric);
        divMae.appendChild(h3Nome);
        divMae.appendChild(spanAno);
        divMae.appendChild(spanKM);
        divMae.appendChild(spanCor);
        divMae.appendChild(spanqtdPortas);
        divMae.appendChild(h2Preco);
        document.body.appendChild(divMae);
    }

    exibirv3()
    {
        
        let divMae = document.createElement("div");
        divMae.id = "div3";
        let img = document.createElement("img");
        img.src = this.veiculo3.linkfoto;
        img.id = "imglinkfoto"
        
        let spanFabric = document.createElement("span");
        spanFabric.innerText = this.veiculo3.fabricante;
        spanFabric.id = "spanFabric";

        let h3Nome = document.createElement("h3")
        h3Nome.innerText = this.veiculo3.nome;
        
        let spanAno = document.createElement("span");
        spanAno.innerText ="Ano "+this.veiculo3.ano;

        let spanKM = document.createElement("span");
        spanKM.innerText = this.veiculo3.km+" KM";

        let spanCor = document.createElement("span");
        spanCor.innerText ="Cor: "+this.veiculo3.cor;

        let spanqtdPortas = document.createElement("span");
        spanqtdPortas.innerText =this.veiculo3.qtdPortas+" Portass";

        let h2Preco = document.createElement("h2")
        h2Preco.innerText ="R$: "+this.veiculo3.preco;

        divMae.appendChild(img);
        divMae.appendChild(spanFabric);
        divMae.appendChild(h3Nome);
        divMae.appendChild(spanAno);
        divMae.appendChild(spanKM);
        divMae.appendChild(spanCor);
        divMae.appendChild(spanqtdPortas);
        divMae.appendChild(h2Preco);
        document.body.appendChild(divMae);
    }

    remove()
    {
    
        document.getElementById("nome").value = "";
        document.getElementById("cor").value = "";
        document.getElementById("qtdPortas").value = "";
        document.getElementById("km").value = "";
        document.getElementById("fabricante").value = "";
        document.getElementById("ano").value = "";
        document.getElementById("preco").value = "";
        
    }
   
    

}
let controller = new CadastrodeVeiculos;