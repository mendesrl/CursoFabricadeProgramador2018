<template>
  <div >
    <div v-for="filme in filmes" :key="filme.id">
      <div class="div1">
        <img-thumbnail
            :src="'https://img.youtube.com/vi/'+filme.id+'/mqdefault.jpg'"
            :width="520"
            :height="345"
          />
      </div>
      <div class="div2">
        <button @click="vermaisdetalhes(filme)">Mais Detalhes</button>
        <div v-if="maisDetalhes == filme.id">
          <iframe-video 
            :src="'https://www.youtube.com/embed/'+filme.id+'?rel=0&arp;autoplay=1'"
            :width="520"
            :height="345"
            :frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            :allowfullscreen="1"
          />
        </div>
      </div>
    </div>
    
</div>
</template>
<script>


import IframeVideo from '@/components/IframeVideo'
import ImgThumbnail from '@/components/ImgThumbnail'

export default {
  components: {IframeVideo,ImgThumbnail},
  data () {
    return {
      filmes: [
        {
          id: '4-LNlsaekIE'
        },
        {
          id: 'hkDIRGor1kM'
        }
      ],
      maisDetalhes : false
    }
  },

  methods: {
     vermaisdetalhes(filme)
    {
      this.maisDetalhes = filme.id;
    }
     
  },
  created () {
    
  }
}
</script>

<style>
 
</style>