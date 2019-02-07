// Neste arquivo voce deve criar uma instancia de Vue capaz de controlar todo o projeto ' new Vue() ' ;)

var app = new Vue({
    el:"#app",
    data: {
        titulo: 'Encontre itens incriveis para deixar seu brawler mais forte!',
        saldomoeda: 100,
        saldogema: 15,
        x: 0,
        brawlers,
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

        tamanhodois (index) 
        {
            if ( this.brawlers[index].id === 1 )
            {
               var x =0;
               x= ((70*this.brawlers[index].pontosPoder)/(this.brawlers[index].totalPontosPoder));
                return x
            }

            else if ( this.brawlers[index].id === 2)
            { 
                var x =0;
                x= ((70*this.brawlers[index].pontosPoder)/(this.brawlers[index].totalPontosPoder));
                 return x
            }

            else if ( this.brawlers[index].id === 3)
            { 
                var x =0;
                x= ((70*this.brawlers[index].pontosPoder)/(this.brawlers[index].totalPontosPoder));
                 return x
            }

            else if ( this.brawlers[index].id === 4)
            { 
                var x =0;
                x= ((70*this.brawlers[index].pontosPoder)/(this.brawlers[index].totalPontosPoder));
                 return x
            }

            else if ( this.brawlers[index].id === 5)
            { 
                var x =0;
                x= ((70*this.brawlers[index].pontosPoder)/(this.brawlers[index].totalPontosPoder));
                 return x
            }

            else if ( this.brawlers[index].id === 6)
            { 
                var x =0;
                x= ((70*this.brawlers[index].pontosPoder)/(this.brawlers[index].totalPontosPoder));
                 return x
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

                        var arr = this.brawlers;
                        for(var i=0; i<arr.length; i++)
                        {
                            if(arr[i].imagem === this.ofertasDiarias[index].imagem)
                            {
                                var auxi = arr[i].pontosPoder;
                                arr[i].pontosPoder = auxi + this.ofertasDiarias[index].pontosPoder;
                                this.x = parseInt((70*arr[i].pontosPoder)/arr[i].totalPontosPoder);
                                
                                
                                if(arr[i].pontosPoder > arr[i].totalPontosPoder)
                                {
                                    var teste = arr[i].totalPontosPoder;
                                    arr[i].pontosPoder = teste;
                                    this.x = parseInt((70));                                   
                                }
                                
                                
                            }

                           
                        }


                    }
                    else
                    alert("acabou suas moedas")
                }

                else if (this.ofertasDiarias[index].moeda === 'moeda' && this.ofertasDiarias[index].id === 5)
                {
                    var arr = this.brawlers;
                        for(var i=0; i<arr.length; i++)
                        {
                            if(arr[i].imagem === this.ofertasDiarias[index].imagem)
                            {
                                var auxi = arr[i].pontosPoder;
                                arr[i].pontosPoder = auxi + this.ofertasDiarias[index].pontosPoder;
                                this.x = parseInt((70*arr[i].pontosPoder)/arr[i].totalPontosPoder);
                                
                                
                                if(arr[i].pontosPoder > arr[i].totalPontosPoder)
                                {
                                    var teste = arr[i].totalPontosPoder;
                                    arr[i].pontosPoder = teste;
                                    this.x = parseInt((70));                                   
                                }
                                
                                
                            }
                        }
                }
                else if (this.ofertasDiarias[index].moeda === 'gema' && this.saldogema >0)
                {
                    var auxiliar = this.saldogema;
                    if (this.saldogema >= this.ofertasDiarias[index].valor )
                    {
                        this.saldogema = auxiliar - (this.ofertasDiarias[index].valor);
                        console.log(this.saldogema);

                        var arr = this.brawlers;
                        for(var i=0; i<arr.length; i++)
                        {
                            if(arr[i].imagem === this.ofertasDiarias[index].imagem)
                            {
                                var auxi = arr[i].pontosPoder;
                                arr[i].pontosPoder = auxi + this.ofertasDiarias[index].pontosPoder;
                                this.x = parseInt((70*arr[i].pontosPoder)/arr[i].totalPontosPoder);
                                
                                
                                if(arr[i].pontosPoder > arr[i].totalPontosPoder)
                                {
                                    var teste = arr[i].totalPontosPoder;
                                    arr[i].pontosPoder = teste;
                                    this.x = parseInt((70));                                   
                                }
                                
                                
                            }

                           
                        }
                    }
                    
                }
            
            
            
        


        }
    } 
}

)