import Vue from 'vue'
import Vuex from 'vuex'
import category from './module/category'
import look from './module/look'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    category,
    look
  }
})
