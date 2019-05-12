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
      Cookies.set('host', host)
      commit('SET_HOST', host)
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
