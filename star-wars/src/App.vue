<!--<template>-->
<!--<div id="app">-->
<!--<nav>-->
<!--<div class="nav-wrapper blue darken-1">-->
<!--<a href="#" class="brand-logo center">Produtos Front</a>-->
<!--</div>-->
<!--</nav>-->
<!--<div class="container">-->
<!--<form>-->
<!--<v-form>-->
<!--<v-container>-->
<!--<v-layout>-->
<!--<v-flex xs12 md4>-->
<!--<input-text @input="getName" label="Nome"/>-->
<!--</v-flex>-->
<!--</v-layout>-->
<!--<v-layout>-->
<!--<v-flex xs12 md4>-->
<!--<input-text @input="getQuantity" label="Quantidade"/>-->
<!--</v-flex>-->
<!--</v-layout>-->
<!--</v-container>-->
<!--</v-form>-->
<!--<label>Quantidade</label>-->
<!--<input type="number" placeholder="QTD">-->
<!--<label>Valor</label>-->
<!--<input type="text" placeholder="Valor">-->
<!--<button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>-->
<!--</form>-->
<!--<table>-->
<!--<thead>-->
<!--<tr>-->
<!--<th>NOME</th>-->
<!--<th>QTD</th>-->
<!--<th>VALOR</th>-->
<!--<th>OPÇÕES</th>-->
<!--</tr>-->
<!--</thead>-->
<!--<tbody>-->
<!--<tr v-for="produto in produtos" :key="produto.id">-->
<!--<td>{{ produto.name}}</td>-->
<!--<td>{{ produto.climate}}</td>-->
<!--<td>50.00</td>-->
<!--<td>-->
<!--<button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>-->
<!--<button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>-->
<!--</td>-->
<!--</tr>-->
<!--</tbody>-->
<!--</table>-->
<!--</div>-->
<!--</div>-->
<!--</template>-->
<template>
  <div>
    <v-container>
      <div data-app>
        <app-toolbar :title="'Filmes do Star Wars'"/>
      </div>
    </v-container>
    <v-container>
      <div data-app>
        <v-layout>
          <app-card/>
          <app-card/>
        </v-layout>
      </div>
    </v-container>
    <!--<v-form v-model="valid">-->
      <!--<v-container>-->
        <!--<v-layout>-->
          <!--<v-flex xs12 md4>-->
            <!--<input-text @input="getName" label="Nome"/>-->
          <!--</v-flex>-->
          <!--<v-flex xs12 md4>-->
            <!--<input-text @input="getQuantity" label="Quantidade"/>-->
          <!--</v-flex>-->
          <!--<v-flex xs12 md4>-->
            <!--<input-text @input="getValue" label="Valor"/>-->
          <!--</v-flex>-->
        <!--</v-layout>-->
        <!--<v-card-actions>-->
          <!--<v-spacer></v-spacer>-->
          <!--<v-btn color="green darken-1" @click="save">Save</v-btn>-->
        <!--</v-card-actions>-->
        <!--<div data-app>-->
          <!--<app-table :desserts="produtos"/>-->
        <!--</div>-->
      <!--</v-container>-->
    <!--</v-form>-->
  </div>
</template>
<script>
import InputText from '@/components/AppInput/InputText'
import AppTable from '@/components/AppTable/AppTable'
import AppToolbar from './components/AppToolbar/AppToolbar'
import Http from 'axios'
import AppCard from './components/AppCard/AppCard'

const baseUrl = 'https://swapi.co/api/'
export default {
  components: {AppCard, AppToolbar, InputText, AppTable},
  data () {
    return {
      produtos: [],
      product: {
        name: '',
        value: '',
        quantidade: ''
      }
    }
  },
  methods: {
    save () {

    },
    getName (name) {
      this.product.name = name
    },
    getQuantity (quantity) {
      this.product.quantidade = quantity
    },
    getValue (value) {
      this.product.value = value
    }
  },
  created () {
    Http.get(`${baseUrl}`)
    Http.get(`${baseUrl}films/`).then(response => {
      console.log(response)
      this.produtos = response.data.results
    })
  }
}
</script>
<style>
</style>
