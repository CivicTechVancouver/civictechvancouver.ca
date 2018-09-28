import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      windowSize: null,
    },
    mutations: {
      SET_WINDOW_SIZE: (state, payload) => {
        state.windowSize = payload.windowSize
      },
    },
    actions: {
      setWindowSize: ({ commit }, windowSize) => {
        commit('SET_WINDOW_SIZE', { windowSize })
      },
    },
    getters: {
      getWindowSize: (state) => {
        return state.windowSize
      },
    },
  })
}

export default createStore
