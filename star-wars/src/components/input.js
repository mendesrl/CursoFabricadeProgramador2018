export default {
  props: {
    label: String
  },
  methods: {
    emitInputValue ($event) {
      this.$emit('input', $event)
    }
  }
}
