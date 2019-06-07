<template lang="pug">
  .objectConstructor
    el-row(v-for="(item, index) in fields" :key="index")
      el-button(v-if="editing.index !== index || editing.field !=='key'" type="text" @click="editing.index = index, editing.field = 'key'") {{ item.key }}:
      el-input(v-else-if="editing.index === index && editing.field ==='key'" type="text") {{ item.key }}:
      el-button(v-if="editing.index !== index || editing.field !=='value'" type="text" @click="editing.index = index, editing.field = 'value'") {{ item.value }}
      el-input(v-else-if="editing.index === index && editing.field ==='value'" type="text") {{ item.key }}:
    el-button(icon="el-icon-plus" size="small") Add
</template>

<script>
export default {
  name: 'ObjectConstructor',
  props: {
    type: {
      type: String,
      default: ''
    },
    field: {
      type: String,
      default: ''
    },
    model: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      fields: [{
        key: 'test',
        value: '123'
      }],
      editing: {index: -1, field: ''}
    }
  }
}
</script>

<style scoped>

</style>
