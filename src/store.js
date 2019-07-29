import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { counter: 0 },

  getters: {
    doubleCounter: state => {
      return state.counter * 2;
    },

    stringCounter: state => {
      return state.counter + " :)";
    }
  },

  mutations: {
    increment: (state, payload) => {
      state.counter += payload;
    },

    decrement: (state, payload) => {
      state.counter -= payload;
    }
  },

  actions: {
    increment: ({ commit }, payload) => {
      commit("increment", payload);
    },

    decrement: (context, payload) => {
      context.commit("decrement", payload);
    },

    asyncIncrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit("increment", payload.value);
      }, payload.duration);
    },

    asyncDecrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit("decrement", payload.value);
      }, payload.duration);
    }
  }
});
