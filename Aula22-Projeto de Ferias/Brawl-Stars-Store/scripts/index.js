// Neste arquivo voce deve criar uma instancia de Vue capaz de controlar todo o projeto ' new Vue() ' ;)

var app = new Vue({
    el:"#app",
    data: {
        titulo: 'Encontre itens incriveis para deixar seu brawler mais forte!',
        saldomoeda: 100,
        saldogema: 15,
        brawlers : [
            {
                id: 1,
                trofeus: 39,
                progressoTrofeus: "42%",
                imagem: "assets/img/shelly.png",
                poder: 4,
                pontosPoder: 80,
                totalPontosPoder: 80
            },
            {
                id: 2,
                trofeus: 69,
                progressoTrofeus: "55%",
                imagem: "assets/img/nita.png",
                poder: 3,
                pontosPoder: 46,
                totalPontosPoder: 50
            },
            {
                id: 3,
                trofeus: 90,
                progressoTrofeus: "65%",
                imagem: "assets/img/colt.png",
                poder: 4,
                pontosPoder: 10,
                totalPontosPoder: 80
            },
            {
                id: 4,
                trofeus: 62,
                progressoTrofeus: "20%",
                imagem: "assets/img/bull.png",
                poder: 1,
                pontosPoder: 14,
                totalPontosPoder: 20
            },
            {
                id: 5,
                trofeus: 95,
                progressoTrofeus: "8%",
                imagem: "assets/img/barley.png",
                poder: 3,
                pontosPoder: 25,
                totalPontosPoder: 50
            },
            {
                id: 6,
                trofeus: 73,
                progressoTrofeus: "11%",
                imagem: "assets/img/el-primo.png",
                poder: 1,
                pontosPoder: 19,
                totalPontosPoder: 20
            }
        ],

        ofertasDiarias : [
            {
                id: 1,
                brawlerId: 4,
                pontosPoder: 7,
                imagem:"assets/img/bull.png",
                nome:"PONTOS DE PODER",
                valor: 18,
                moeda:'moeda'
            }
            ,{
                id: 2,
                brawlerId: 5,
                pontosPoder: 12,
                imagem:"assets/img/barley.png",
                nome:"PONTOS DE PODER",
                valor: 24,
                moeda:'moeda'
            }
            ,{
                id: 3,
                brawlerId: 2,
                pontosPoder: 5,
                imagem:"assets/img/nita.png",
                nome:"PONTOS DE PODER",
                valor: 12,
                moeda:'moeda'
            },
            {
                id: 3,
                brawlerId: 3,
                pontosPoder: 10,
                imagem:"assets/img/colt.png",
                nome:"PONTOS DE PODER",
                valor: 10,
                moeda:'moeda'
            }
            ,{
                id: 5,
                brawlerId: 6,
                pontosPoder: 8,
                imagem:"assets/img/el-primo.png",
                nome:"PONTOS DE PODER",
                valor: 0,
                moeda:'moeda'
            }
            ,{
                id: 6,
                brawlerId: 1,
                pontosPoder: 50,
                imagem:"assets/img/shelly.png",
                nome:"PONTOS DE PODER",
                valor: 1,
                moeda:'gema'
            }
        ]
    },
    methods: {
        retornamoeda (index) 
        {
            if ( this.ofertasDiarias[index].moeda === 'moeda' && this.ofertasDiarias[index].id !== 5 )
            {
                return "assets/img/moeda.png"
            }

            else if ( this.ofertasDiarias[index].moeda === 'gema')
            { 
                return "assets/img/gema.png"
            }

        },

        retornavalor (index)
        {
            if ( this.ofertasDiarias[index].valor === 0 )
            {
                return "GRATIS"
            }
                return this.ofertasDiarias[index].valor
        },

        tamanho (index) 
        {
            if ( this.brawlers[index].id === 1 )
            {
                return "8%"
            }

            else if ( this.brawlers[index].id === 2)
            { 
                return "13%"
            }

            else if ( this.brawlers[index].id === 3)
            { 
                return "16%"
            }

            else if ( this.brawlers[index].id === 4)
            { 
                return "7%"
            }

            else if ( this.brawlers[index].id === 5)
            { 
                return "5%"
            }

            else if ( this.brawlers[index].id === 6)
            { 
                return "3%"
            }

        },

        comprar(index)
        {
            
                
                if (this.ofertasDiarias[index].moeda === 'moeda'&& 
                this.ofertasDiarias[index].id !== 5 &&
                this.saldomoeda > 0)
                {
                    var auxiliar = this.saldomoeda;
                    if (this.saldomoeda >= this.ofertasDiarias[index].valor )
                    {
                        this.saldomoeda = auxiliar - (this.ofertasDiarias[index].valor);


                    }
                    else
                    alert("acabou suas moedas")
                }

                else if (this.ofertasDiarias[index].moeda === 'moeda' && this.ofertasDiarias[index].id === 5)
                {
                    alert("isso é gratis")
                }
                else if (this.ofertasDiarias[index].moeda === 'gema' && this.saldogema >0)
                {
                    var auxiliar = this.saldogema;
                    if (this.saldogema >= this.ofertasDiarias[index].valor )
                    {
                        this.saldogema = auxiliar - (this.ofertasDiarias[index].valor);
                        console.log(this.saldogema);
                    }
                    else
                    alert("acabou suas gemas");
                }
            
            
            
        


        }
    } 
}

)