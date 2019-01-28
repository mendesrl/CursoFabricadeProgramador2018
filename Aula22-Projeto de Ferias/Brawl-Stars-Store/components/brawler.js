/* Desenvolver o compoenent chamado brawler, que representa cada item dos Meus Brawlers
*
    Utilize apenas
        Vue.compoenent( 'nomeDoComponente', {
            props: {},
            template: ``,
            methods: {}
        } )
    Implementando seu componente dentro do Vue.component nao se faz necessario importa-lo no index.js
    pois o mesmo eh uma instancia de Vue e tera acesso a tudo o que voce colocar em Vue.???
*/
Vue.component('brawler',{
    props:[
    'imagem',
    'trofeu',
    'trofeus',
    'poder',
    'pontospoderimg',
    'pontospoder',
    'totalpontospoder',
    'tamanho'
    ],
    template:
        `<div class="teste">
            <div class="barra">
                <div class="barraMarromp"></div>
                <div class="barraLaranja"
                                            :style="'width: '+ tamanho + ';'"></div>
                <img :src= "trofeu" class="trofeu">
                <span class="trofeu">{{trofeus}}</span>
            </div>
                
            <div class="imagemPoder">
                <img :src= "imagem" class="img">
                <div class="poder">
                    <span>PODER {{poder}}</span>
                </div>
            </div>

            <div class="barraRosa">
                <div class="barraMarromg"></div>
                <div class="barraRosap"></div>
                <img :src= "pontospoderimg" class="pontospoder1">
                <span class="textoPontos">{{pontospoder}}/{{totalpontospoder}}</span>
            </div>
            
        </div>`
    
});

