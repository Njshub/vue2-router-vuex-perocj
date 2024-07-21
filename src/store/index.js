import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 100
  },
  getters: {
    len(state) {
      return state.count.length
    }
  },
  mutations: {
    changCount(state, num) {
      state.count += num
      console.log('mutation, count 被改了')
    }
  },
  actions: {
    deleyChangCount(store, num) {
      setTimeout(() => {
        store.commit('changeCount', num)
      },3000)
    }
  },
  modules: {
  }
})
