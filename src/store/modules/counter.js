import * as types from "../types.js";

const state = {
  counter: 0
};

const getters = {
  [types.DOUBLE_COUNTER]: state => {
    return state.counter * 2;
  },

  [types.STRING_COUNTER]: state => {
    return state.counter + " :)";
  }
};

const mutations = {
  [types.MUTATE_INCREMENT_COUNTER]: (state, payload) => {
    state.counter += payload;
  },

  [types.MUTATE_DECREMENT_COUNTER]: (state, payload) => {
    state.counter -= payload;
  }
};

const actions = {
  [types.INCREMENT_COUNTER]: ({ commit }, payload) => {
    commit(types.MUTATE_INCREMENT_COUNTER, payload);
  },

  [types.DECREMENT_COUNTER]: (context, payload) => {
    context.commit(types.MUTATE_DECREMENT_COUNTER, payload);
  },

  [types.INCREMENT_COUNTER_ASYNC]: ({ commit }, payload) => {
    setTimeout(() => {
      commit(types.MUTATE_INCREMENT_COUNTER, payload.value);
    }, payload.duration);
  },

  [types.DECREMENT_COUNTER_ASYNC]: ({ commit }, payload) => {
    setTimeout(() => {
      commit(types.MUTATE_DECREMENT_COUNTER, payload.value);
    }, payload.duration);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
