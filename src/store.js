import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
import SimpleCrypto from "simple-crypto-js";

Vue.use(Vuex)
const secret = window.navigator.userAgent || 'someSuperSecretKeyWTFDoIEvenNeedIt'
const simpleCrypto = new SimpleCrypto(secret)

export default new Vuex.Store({
  state: {
    host: Cookies.get('host') || '',
    authType: Cookies.get('authType') || 'cookie',
    username: Cookies.get('username') || '',
    password: Cookies.get('password') || '',
    token: Cookies.get('token') || '',
    apiBasePath: '/wp-json/wp/v2/'
  },
  mutations: {
    SET_HOST: (state, host) => {
      state.host = host
    },
    SET_AUTH_TYPE: (state, authType) => {
      state.authType = authType
    },
    SET_USERNAME: (state, username) => {
      state.username = username
    },
    SET_PASSWORD: (state, password) => {
      state.password = password
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
  },
  actions: {
    setHost({ commit }, host) {
      let regExp = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b/)
      if (regExp.test(host)) {
        const hostFormatted = host.match(regExp)[0]
        Cookies.set('host', hostFormatted)
        commit('SET_HOST', hostFormatted)
      }
      
    },
    setAuthType({ commit }, authType) {
      Cookies.set('authType', authType)
      commit('SET_AUTH_TYPE', authType)
    },
    setUsername({ commit }, username) {
      Cookies.set('username', username)
      commit('SET_USERNAME', username)
    },
    setPassword({ commit }, password) {
      const passEncrypted = simpleCrypto.encrypt(password)
      Cookies.set('password', passEncrypted)
      commit('SET_PASSWORD', passEncrypted)
    },
    setToken({commit}, token) {
      Cookies.set('token', token)
      commit('SET_TOKEN', token)
    }
  },
  getters: {
    getPassword: state => simpleCrypto.decrypt(state.password)
  }
})
