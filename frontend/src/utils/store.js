import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true,
    loadCounter: 0,
    timeOut: undefined,
    username: '',
    userId: '',
  },
  mutations: {
    incrementLoadCounter (state) {
      state.loadCounter += 1
    },
    decrementLoadCounter (state) {
      if (state.loadCounter === 0) {
        state.loadCounter = 0
      } else {
        state.loadCounter -= 1
      }
    },
    load (state) {
      if (state.loading === false) {
        state.loading = true
        setTimeout(_ => {
          state.loading = false
          state.loadCounter = 0
        }, 3000)
      }
      this.commit('incrementLoadCounter')
    },
    finishLoading (state) {
      this.commit('decrementLoadCounter')
      if (state.loadCounter === 0) {
        setTimeout(_ => {
          state.loading = false
          if (state.timeOut) {
            clearTimeout(state.timeOut)
            state.timeOut = undefined
          }
        }, 400)
      }
    },
    setUsername (state, username) {
      state.username = username
    },
    setUserId (state, userId) {
      state.userId = userId
    },
    
  },
  getters: {
    isLoading: state => {
      return state.loading
    },
    userId: state => {
      return state.userId
    },
    username: state => {
      return state.username
    },
  }
})
