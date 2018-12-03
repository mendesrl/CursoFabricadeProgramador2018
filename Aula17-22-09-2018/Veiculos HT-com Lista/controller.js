class CadastrodeVeiculos
{
    constructor()
    {
        this.veiculo = new Veiculo();
        this.veiculosLista = [];
    }

    salvar()
    {
        this.veiculo.nome = document.getElementById("nome").value;
                this.veiculo.cor = document.getElementById("cor").value;
                this.veiculo.qtdPortas = document.getElementById("qtdPortas").value;
                this.veiculo.km = document.getElementById("km").value;
                this.veiculo.fabricante = document.getElementById("fabricante").value;
                this.veiculo.ano = document.getElementById("ano").value;
                this.veiculo.preco = document.getElementById("preco").value;
                this.veiculo.linkfoto = document.getElementById("linkfoto").value;
                
                this.veiculosLista.push(this.veiculo);
                this.veiculo = new Veiculo();
               
                
                this.exibirv();
                this.remove();
        
    }

    exibirv()
    {
        this.removeDiv();
        for (var i=0; i<this.veiculosLista.length; i++)
        {
        
            let divFilha = document.createElement("div");
            divFilha.id = "divFilha";

            let img = document.createElement("img");
            img.src = this.veiculosLista[i].linkfoto;
            img.id = "imglinkfoto"
            
            let spanFabric = document.createElement("span");
            spanFabric.innerText = this.veiculosLista[i].fabricante;
            spanFabric.id = "spanFabric";

            let h3Nome = document.createElement("h3")
            h3Nome.innerText = this.veiculosLista[i].nome;
            
            let spanAno = document.createElement("span");
            spanAno.innerText ="Ano "+this.veiculosLista[i].ano;

            let spanKM = document.createElement("span");
            spanKM.innerText = this.veiculosLista[i].km+" KM";

            let spanCor = document.createElement("span");
            spanCor.innerText ="Cor: "+this.veiculosLista[i].cor;

            let spanqtdPortas = document.createElement("span");
            spanqtdPortas.innerText =this.veiculosLista[i].qtdPortas+" Portass";

            let h2Preco = document.createElement("h2")
            h2Preco.innerText ="R$: "+this.veiculosLista[i].preco;

            divFilha.appendChild(img);
            divFilha.appendChild(spanFabric);
            divFilha.appendChild(h3Nome);
            divFilha.appendChild(spanAno);
            divFilha.appendChild(spanKM);
            divFilha.appendChild(spanCor);
            divFilha.appendChild(spanqtdPortas);
            divFilha.appendChild(h2Preco);
            document.getElementById("divMae").appendChild(divFilha);
        }
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

    removeDiv()
    {
        document.getElementById("divMae").innerHTML = "";
    }
   
    

}
let controller = new CadastrodeVeiculos;