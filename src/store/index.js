import Vuex from 'vuex'
import { firebaseMutations, firebaseAction } from 'vuexfire'

const createStore = () => {
  return new Vuex.Store({
    state: {
      windowSize: null,
      meetupEvents: [],
      users: [],
    },
    mutations: {
      SET_WINDOW_SIZE: (state, payload) => {
        state.windowSize = payload.windowSize
      },
      SET_MEETUP_EVENTS: (state, payload) => {
        state.meetupEvents = payload.meetupEvents
      },
      ...firebaseMutations
    },
    actions: {
      setMeetupEvents: async ({ commit }, meetupEvents) => {
        commit('SET_MEETUP_EVENTS', { meetupEvents })
      },
      setWindowSize: ({ commit }, windowSize) => {
        commit('SET_WINDOW_SIZE', { windowSize })
      },
      setUsersRef: firebaseAction(({ bindFirebaseRef }, ref) => {
        bindFirebaseRef('users', ref)
      })
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
