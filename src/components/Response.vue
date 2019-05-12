<template lang="pug">
  .response
    h2 Response
    .status( v-if="data.status && !loading" )
      el-tag( :type="error ? 'danger' : 'success'") {{ data.status }} 
      pre.statusText {{ data.statusText }}
    Code(v-loading="loading" :code-string="payloadFormatted" :class="{error: error}")
</template>

<script>
import Code from './Code';
export default {
  name: 'Response',
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
      type: Object,
      default: () => {}
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
  .response {
    h2 {
      margin: 0;
    }
    .error {
      border-color: indianred;
    }
    .statusText {
      display: inline;
      margin-left: 10px;
      font-size: 1.2em;
    }
  }
</style>
