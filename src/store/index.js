import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      windowSize: null,
      meetupEvents: [],
    },
    mutations: {
      SET_WINDOW_SIZE: (state, payload) => {
        state.windowSize = payload.windowSize
      },
      SET_MEETUP_EVENTS: (state, payload) => {
        state.meetupEvents = payload.meetupEvents
      },
    },
    actions: {
      setMeetupEvents: async ({ commit }, meetupEvents) => {
        commit('SET_MEETUP_EVENTS', { meetupEvents })
      },
      setWindowSize: ({ commit }, windowSize) => {
        commit('SET_WINDOW_SIZE', { windowSize })
      },
    },
    getters: {
      getMeetupEvents: (state) => {
        return state.meetupEvents
      },
      getWindowSize: (state) => {
        return state.windowSize
      },
    },
  })
}

export default createStore
