import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
      firstName: 'John',
      LastName: 'Stone'
    }
  },
  getters: {
    fullName (state) {
      return state.firstName + ' ' + state.LastName
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

export default store