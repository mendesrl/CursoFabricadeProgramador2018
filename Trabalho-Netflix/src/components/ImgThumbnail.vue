<template>
        <img
            :src="idItem"
            :width="tam" 
            :height="tam" 
        />
</template>
<script type="text/javascript">
export default {
  name: 'ImgThumbnail',
  data: () => ({}),
  props: {
      idItem: {
      type: String,
      default: () => ('')
    },
    tam: {
      type: String,
      default: () => ('')
    }
  },
  computed: {} 
}
</script>

