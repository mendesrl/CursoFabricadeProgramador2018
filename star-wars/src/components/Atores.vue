<template>
    <atores>
      <ul>
        <li>{{ title }}</li>
      </ul>
    </atores>
</template>

<script type="text/javascript">
export default {
  props: {
    title: {
      type: String
    }
  },
  data()
  {
    
    return {
      actors: []
      
    }
    
  },

  mounted(){
    Filme.listar('films').then(resposta =>{
      this.filmes = resposta.data;
      console.log(resposta.data);
    })
  }
  
}
</script>
