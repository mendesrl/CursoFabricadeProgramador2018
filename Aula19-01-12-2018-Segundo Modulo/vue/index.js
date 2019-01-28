var app = new Vue({
    el:'#app', 
    data:{
        mensagem:'Hello World'
    }
});

var app2 = new Vue({
    el:'#app-2',
    data:{
        mensagem: 'Você carregou esta pagina em ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el:'#app-3',
    data:{
        seen: true
    }
})

var app4 = new Vue({
    el:'#app-4',
    data:{
        todos:[
            { text: 'Aprender JS'},
            { text: 'Aprender vue'},
            { text: 'Criar algo incrivel'}
        ]
    }
})

var app5 = new Vue({
    el:'#app-5',
    data:{
        message: 'oieee'
    },
    methods:{
        reverseMensagem : function (){
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el:'#app-6',
    data:{
        mensagem: 'Ola Vue!'
    }
});



Vue.component('todo-item',{
    props: ['todo'],
    template: '<li>{{todo.text}}<p>{{todo.subtext}}</p></li>'
})

var app7 = new Vue({
    el:'#app-7',
    data: {
        groceryList: [
            {id: 0, text : 'Vegetais', subtext: 'apenas um teste'},
            {id: 1, text : 'Queijo'},
            {id: 2, text : 'Qualquer outra Coisa'}
        ]
    }
})

var calculadora = new Vue({el:"#calc", data:{numEsquerda:5, numDireita:10}});
var aluno = new Vue({el:"#aluno", data:{nome:"Larissa"}});
var pessoa = new Vue({el:"#pessoa", data:{nome:"Larissa Mendes Ribeiro",
cpf:"041.273.711-61",
rg:"4.032.894-40",
dataNasc: 14+"/"+07+"/"+1996,
tel:"(82)3999-9999",
cel:"(82)9999-9999",
email:"lalala@gmail.com",
mae:"Analice",
pai:"Carlos",
endereco:{rua:"Avenida Doutor Neves",num:915,cep:"79086-200",cidade:"CampoGrande",uf:"MS"},
saude:{peso:70, altura:1.71}}});