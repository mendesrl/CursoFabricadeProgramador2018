/* Desenvolver o compoenent chamado oferta, que representa cada item das Ofertas Diarias
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

Vue.component('ofertas',{
    props:[
    'imagem',
    'pontospodertri',
    'nome',
    'pontospoderimg',
    'pontospoder',
    'retornamoeda',
    'retornavalor',
    'comprar'
    ],
    template: 
    `<div class="oferta">
        <div class="boxAzul" v-on:click="$emit('comprar')">
            <img :src="imagem" class="imgOferta">
            <img :src="pontospodertri" class="pontospodertri">
            <span class="nome">{{nome}}</span>
            <img :src="pontospoderimg" class="pontospoderimg">
            <span class="pontospoder2">{{pontospoder}}</span>
            <img :src="retornamoeda" class="retornamoeda">
            <span class="retornamoedatexto">{{retornavalor}}</span>
        </div>
    </div>`

});