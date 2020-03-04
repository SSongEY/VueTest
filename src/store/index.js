import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    userInfo: {

    },
    alert: {
      open: false,
      timeout: undefined,
      msg: '',
      err: false,
      info: true,
      confirm: false,
      persistent: false,
      callBack: () => {}
    }
  },

  mutations: {
    alert(state, payload) {
      state.alert = payload;
      state.open = !state.open;
    },
  },

  actions: {
  },

  getters: {
  },

  modules: {
  }
});
