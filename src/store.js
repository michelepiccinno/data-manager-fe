import { createStore } from "vuex";

export default createStore({

// state globale
  state: {
    ticketData: null
  },

//separo la logica di business dallo stato

  actions: {
    storeData({ commit }, data) {
      commit('setTicketData', data);
      console.log(data);
    }
  },

  mutations: {
    setTicketData(state, payload) {
      state.ticketData = payload;
      console.log(payload);
    }
  },

})