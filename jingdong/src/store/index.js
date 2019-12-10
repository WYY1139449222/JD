import Vue from 'vue'
import Vuex from 'vuex'

import state from './state/state'
import *as actions from './actions/actions'
import *as mutations from './mutations/mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  mutations,
  actions,
  state,
  modules: {
  }
})
