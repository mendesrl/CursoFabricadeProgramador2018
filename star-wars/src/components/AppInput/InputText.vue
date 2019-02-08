<template>
  <v-text-field
    :label="label"
    @input="emitInputValue"
  />
</template>

<script>
import input from '@/components/input'
export default {
  mixins: [input],
  name: 'InputText'
}
</script>

<style scoped>
</style>
