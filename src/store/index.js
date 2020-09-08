import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    buycarCount: 10
  },
  mutations: {
    changebuycarCount (state, num) {
      state.buycarCount = num
    }
  },
  actions: {
    asyncChangebuycarCount (content, num) {
      setTimeout(() => {
        content.commit('changebuycarCount', num)
      }, 1000)
    }
  },
  modules: {
  }
})
