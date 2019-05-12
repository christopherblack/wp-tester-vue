<template lang="pug">
  pre.code
    code.language-json( :key="keyHook" ref="code" ) {{ codeString }}
</template>

<script>
import Prism from 'prismjs';
export default {
  name: 'Code',
  props: {
    codeString: {
      type: String,
      default: () => {}
    }
  },
  data() {
    return {
      keyHook: 1
    }
  },
  watch: {
    codeString: {
      handler: function () {
        this.keyHook++;
        this.$nextTick(() => {
          Prism.highlightElement(this.$refs.code)
        })
      },
      deep: true
    }
  },
  mounted() {
    Prism.highlightElement(this.$refs.code)
  }
};
</script>

<style scoped>
  .code {
    min-height: 100px;
  }
</style>
