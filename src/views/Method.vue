<template lang="pug">
  el-row( :gutter="40" )
    el-col(:span="10")
      h1(style="margin-top: 0") Parameters
        el-button.submit( type="primary" @click="sendData" :loading="isLoading" )
          i.el-icon-lightning
          span Send
      el-form( :model="form" label-width="130px" :rules="validation" :disabled="isLoading || requestMethod !== 'post'" )
        el-form-item( v-for="(field, key) in model" :label="field.label" :prop="key" :key="key" )
          el-input( 
            v-if="field.type === 'string' || field.type === 'array' || field.type === 'password'" 
            v-model="form[key]" :placeholder="field.hint" 
            :show-password="field.type === 'password'"
            @input="modified[key] = true"
          )
          el-input( 
            v-else-if="field.type === 'stringMultiline'" 
            v-model="form[key]" 
            :placeholder="field.hint" 
            type="textarea" 
            :rows="2"
            @input="modified[key] = true"
          )
          el-select( 
            v-else-if="field.type === 'select'" 
            v-model="form[key]" 
            :placeholder="field.hint"
            @change="modified[key] = true"
          )
            el-option( v-for="(value, index) in field.options" :label="value" :key="index" :value="value" )
          el-input-number( 
            v-else-if="field.type === 'number'" 
            controls-position="right" 
            :min="0" 
            v-model="form[key]" 
            :placeholder="field.hint"
            @change="modified[key] = true"
          )
          el-switch( 
            v-else-if="field.type === 'switch'" 
            v-model="form[key]" 
            :placeholder="field.hint"
            :active-value="field.options && field.options.active || true"
            :inactive-value="field.options && field.options.inactive || false"
            :active-text="field.options && field.options.active || null"
            :inactive-text="field.options && field.options.inactive || null"
            @change="modified[key] = true"
          )
          el-date-picker(
            v-else-if="field.type === 'datetime'"
            v-model="form[key]"
            type="datetime"
            :placeholder="field.hint"
            @change="modified[key] = true"
          )
          ObjectConstructor(
            v-else-if="field.type === 'object'"
            :type="$route.params.type"
            :field="key"
            @change="modified[key] = true"
          )
    el-col( :span="14")
      el-row
        el-col( :span="24" )
          Request(:data="{ data: requestData }" :url="requestUrl")
      el-row
        el-col( :span="24" )
          Response(:data="response" :loading="isLoading" :error="error")
</template>

<script>
import Request from '../components/Request'
import Response from '../components/Response'
import Models from '../models'
import axios from 'axios'
import ObjectConstructor from '../components/ObjectConstructor';  
export default {
  name: 'Method',
  components: { ObjectConstructor, Request, Response },
  data() {
    return {
      form: {},
      modified: {},
      id: 0,
      model: Models(this.$route.params.type),
      requestUrl: `${this.$store.state.host}${this.$store.state.apiBasePath}${this.$route.params.type}/${this.id || ''}`,
      response: {},
      error: false,
      validation: {
        host: {
          validator: (rule, value, callback) => {
            if (new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/).test(value)) {
              callback()
            } else {
              callback(new Error('Please enter URL, starting with http:// or https://'));
            }
          },
          trigger: 'blur'
        }
      },
      isLoading: false
    }
  },
  computed: {
    requestData() {
      if (this.requestMethod !== 'post') return  {}
      const tmpObj = {}
      Object.keys(this.modified).forEach(key => {
        if (this.modified[key]) {
          tmpObj[key] = this.model[key].type === 'array' ? this.form[key].split(',').map(value => +value) : this.form[key]
        }
      })
      return tmpObj
    },
    requestMethod() {
      switch (this.$route.params.reqType) {
        case 'create':
        case 'update':
          return 'post'
        case 'list':
        case 'listSingle':
          return 'get'
        case 'delete':
          return 'delete'
      }
      return 'get'
    }
  },
  created() {
    Object.keys(this.model).forEach((key) => {
      this.$set(this.form, key, '')
      this.$set(this.modified, key, false)
    })
  },
  methods: {
    sendData() {
      this.isLoading = true
      this.error = false
      axios({
        method: this.requestMethod,
        url: this.requestUrl,
        data: this.requestData,
        headers: {
          'Authorization': this.$store.state.authType === 'jwt' ? `Bearer ${this.$store.state.token}` : null
        },
        timeout: 5000
        // TODO: Add Timeout error callback
      })
        .then(response => {
          this.isLoading = false
          this.response = response
        })
        .catch((error) => {
          this.isLoading = false
          this.error = true
          this.response = error.response
        })
    }
  }
};
</script>

<style scoped>
  .el-radio {
    display: block;
    margin: 10px 0;
  }
  .submit {
    margin-left: 15px;
    float: right;
  }
</style>
