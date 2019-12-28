export default {
  state: {
    filename: ''
  },
  getters: {
    filename(state) {
      return state.filename
    }
  },
  mutations: {
    'SET_FILENAME' (state, filename) {
      state.filename = filename
    }
  },
  actions: {
    setFilename ({commit}, filename) {
      return commit('SET_FILENAME', filename)
    }
  }
}
