import state from "./state"
import * as mutations from "./mutations"
import * as getters from "./getters"
import * as actions from "./actions"

const authModule = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}

export default authModule
