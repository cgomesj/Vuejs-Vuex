import Vue from "vue";
import Vuex from "vuex";

import counter from "./modules/counter.js";

import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { counter },

  state: { value: 99 },

  getters,

  mutations,

  actions
});
