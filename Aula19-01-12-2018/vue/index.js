var app = new Vue({el:"#app", data:{mensagem:"Hello World"}});
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