const state = {
  filename: '',
  menuVisible: true,
  settingVisible: -1, // -1不显示，0进度， 1主题，2字号
  defaultFontSize: 16,
  currentBook: null
}

const getters = {}
const mutations = {}
const actions = {}

/*根据state key值生成getters mutations actions*/
Object.keys(state).forEach((item, index) => {
  let up = item.toUpperCase()
  let firstUp = item.charAt(0).toUpperCase() + item.substring(1)

  getters[item] = (state) => state[item]

  mutations[`SET_${up}`] = (state, val) => state[item] = val

  actions[`set${firstUp}`] = ({commit}, val) => commit(`SET_${up}`, val)
})

export default {
  state,
  getters,
  mutations,
  actions
}
