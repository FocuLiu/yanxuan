import {RECEIVE_CATEGORYS} from '../mutation-types'
import {reqCateList} from '../../api'
const state = {
  categorys: []
}
const mutations = {
  [RECEIVE_CATEGORYS](state , {categorys}){
    state.categorys = categorys
  }
}
const getters = {

}
const actions = {
  //异步请求数据
  async getCategory({commit}){
    console.log('11111111111111111111111111111111111111111111')
    const result = await reqCateList()
    if (result.code === 0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  }
}
export default{
  state,
  mutations,
  getters,
  actions
}
