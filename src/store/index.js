import Vue from 'vue'
import Vuex from 'vuex'
import messages from './modules/messages'
import accounts from "./modules/accounts";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    messages,
    accounts
  }
})
