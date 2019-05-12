<template lang="pug">
  el-row( :gutter="40" )
    el-col(:span="10")
      el-form( :model="form" label-width="120px" :rules="validation" :disabled="isLoading" )
        h1(style="margin-top: 0") Parameters
        el-form-item( label="Site domain" prop="host" )
          el-input( v-model="form.host" placeholder="Enter website URL with protocol (http/https)" @input="(value) => { updateStore(value, 'host') }" )
        el-form-item( label="Auth type" )
          el-radio-group.radio( v-model="form.authType" @change="(value) => { updateStore(value, 'authType') }")
            el-radio( label="cookie" ) Cookie 
              el-tooltip( placement="right" )
                div( slot="content" )
                  | Built-in native WP API auth type. 
                  br
                  | Works only if user is logged-in to WP Admin panel in the same browser, where requests're made from
                i.el-icon-question
            el-radio( label="jwt" ) Javascript Web Tokens 
              el-tooltip( placement="right" )
                div( slot="content" )
                  | Requires a 
                  a( href="https://ru.wordpress.org/plugins/jwt-authentication-for-wp-rest-api/" target="_blank" style="color: white" ) WP plugin 
                  | installed to work.
                i.el-icon-question
            el-radio( label="http" disabled ) Basic HTTP 
              el-tooltip( placement="right" )
                div( slot="content" )
                  | Requires a 
                  a( href="https://github.com/WP-API/Basic-Auth" target="_blank" style="color: white" ) WP plugin 
                  | installed to work.
                i.el-icon-question
            el-radio( label="oauth" disabled ) OAuth 
              el-tooltip( placement="right" )
                div( slot="content" )
                  | Requires a 
                  a( href="https://wordpress.org/plugins/rest-api-oauth1/" target="_blank" style="color: white" ) WP plugin 
                  | installed to work.
                i.el-icon-question
        el-form-item
          el-button( type="primary" @click="sendData" :loading="isLoading" )
            i.el-icon-lightning
            span Send
    el-col( :span="14")
      el-row
        el-col( :span="24" )
          Request(:payload="requestData")
      el-row
        el-col( :span="24" )
          Request(:payload="response.data" :loading="isLoading" label="Response")
</template>

<script>
import Request from '../components/Request'
import { Posts } from '../models'
import axios from 'axios'  
export default {
  name: 'Method',
  components: { Request },
  data() {
    return {
      form: {
        host: this.$store.state.host || '',
        authType: this.$store.state.authType || 'cookie',
        username: this.$store.state.username || '',
        password: this.$store.state.password || ''
      },
      model: Posts,
      response: {},
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
      return this.form
    }
  },
  methods: {
    sendData() {
      // TODO: Add request
    }
  }
};
</script>

<style scoped>

</style>
