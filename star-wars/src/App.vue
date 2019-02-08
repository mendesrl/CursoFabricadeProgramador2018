<template>
<<<<<<< HEAD
  <div id="app">
    <nav>
      <div class="nav-wrapper black">
        <a href="#" class="brand-logo center">Star Wars</a>
      </div>
    </nav>


    <div class="container">
      <div class="card-panel hoverable" v-for="filme in filmes.results" :key="filme.name">
        <div>
          <img src="https://lumiere-a.akamaihd.net/v1/images/solo-a-star-wars-story-theatrical-poster-2_f4af9297.jpeg?region=0%2C397%2C1298%2C646&width=600" width="500px" height="300px">
        </div>
        <div>
          <div>
            <h1>{{ filme.title }}</h1>
            <span>{{filme.episode_id}}</span>
          </div>
        </div>
        <div><!--
              <router-link to="/Outro">Outro</router-link>
              <router-link to="/Teste">Teste</router-link>
              <router-view></router-view>
              
              <teste v-if="movie == 'Filmes do Star Wars'" :title="'Filmes do Star Wars'" />-->
              <span>{{ filme.opening_crawl }}</span>
        </div>
        <div>
          <span>Ano de Lançamento:</span>
          <span>{{ filme.release_date}}</span>
        </div>
        <div>
          <!--<<outro v-if="movie == 'Filmes do Brawler Wars'" :title="'Filmes do Brawler Wars'" />-->
          <span>Direção:</span>
          <span>{{ filme.director }}</span>
        </div>
        <div>
          {{(filme.characters).forEach(then(resposta.data))}})
        </div>
      <div v-for="pessoa in pessoas.results" :key="pessoa.name">
        <span>{{pessoa.name}}</span>

      </div>
        
      </div> 
    </div>
=======
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
>>>>>>> e8496780e63cdd2b4ea9ebfa6da5d6c5b0d2268d
  </div>

</template>
<<<<<<< HEAD

<script>
import Filme from './services/filmes'
import Pessoas from './services/pessoas'
/*import Teste from './components/Teste'
import Outro from './components/Outro'*/
export default {
  components: {/*Teste, Outro*/},

  data()
  {
    
=======
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
>>>>>>> e8496780e63cdd2b4ea9ebfa6da5d6c5b0d2268d
    return {
      filmes: [],
      pessoas: [],
      id:{

      } 
    }
    
  },
<<<<<<< HEAD

  mounted(){
    Filme.listar('films').then(resposta =>{
      this.filmes = resposta.data;
    }),
    Pessoas.listar('people').then(resposta =>{
      this.pessoas = resposta.data;
      console.log(resposta.data)
=======
  created () {
    Http.get(`${baseUrl}`)
    Http.get(`${baseUrl}films/`).then(response => {
      console.log(response)
      this.produtos = response.data.results
>>>>>>> e8496780e63cdd2b4ea9ebfa6da5d6c5b0d2268d
    })
  }
  
}
</script>

<style>
h1{
  font-size: 2.1rem;
}
</style>
