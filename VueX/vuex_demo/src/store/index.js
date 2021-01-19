import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state, num) {
      state.count += num
    },
    sub(state, num) {
      state.count -= num
    }
  },
  actions: {
    asyncAdd(context, num) {
      setTimeout(function () {
        context.commit('add', num)
      }, 1000);
    },
    asyncSub(context, num) {
      setTimeout(function () {
        context.commit('sub', num)
      }, 1000)
    }
  },
  getters: {
    showNum(state) {
      return '我是通过getter加工处理后的数据' + state.count
    }
  },
  modules: {
  }
})
