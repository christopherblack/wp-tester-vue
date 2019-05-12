<template lang="pug">
  .request
    h2(style="margin-top: 0") Request
    Code(v-loading="loading" :code-string="payloadFormatted")
</template>

<script>
import Code from './Code';
export default {
  name: 'Request',
  components: { Code },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: () => {}
    },
    error: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
    }
  },
  computed: {
    payloadFormatted() {
      return JSON.stringify(this.data.data, null, 2)
    }
  }
};
</script>

<style scoped lang="scss">
  .request {
    margin-bottom: 40px;
    h2 {
      margin: 0;
    }
  }
</style>
