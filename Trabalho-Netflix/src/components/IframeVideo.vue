<template>
  <iframe
    :src="idItem"
    :width="tam"
    :height="tam"
    :frameborder="frame"
    :allow="allow"
    :allowfullscreen="allowfullscreen"
  />
</template>
<script type="text/javascript">
export default {
  name: 'IframeVideo',
  data: () => ({}),
  props: {
    idItem: {
      type: String,
      default: () => ('')
    },
    tam: {
      type: String,
      default: () => ('')
    },
    frame: {
      type: String,
      default: () => ('')
    },
    allow: {
      type: String,
      default: () => ('')
    },
    allowfullscreen: {
      type: Number,
      default: () => ('')
    },
  },
  computed: {}
}
</script>
