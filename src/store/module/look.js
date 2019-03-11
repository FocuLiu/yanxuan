import {RECEIVE_MANUAL} from '../mutation-types'
import {reqManuals} from '../../api'

const state = {
  manuals: []
}
const mutations = {
  [RECEIVE_MANUAL] (state, {manuals}) {
    state.manuals = manuals
  }
}
const getters = {}

const actions = {
  async getManual ({commit}) {
    const result = await reqManuals()
    if (result.code === 0){
      commit(RECEIVE_MANUAL, result.data)
    }
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
}


