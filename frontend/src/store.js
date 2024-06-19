import { createStore } from "vuex";
import database from "./database";

export default createStore({

  //state globale
  state: {
    ticketData: null,
    rows: database.tickets,
    lastActivity: database.lastActivity,
    priorityList: database.priorityList,
    statusList: database.statusList,
  },

  //separo la logica di business dallo stato
  actions: {
    storeData({ commit }, payload) {
      commit('saveTicketData', payload);
    }
  },

  mutations: {
    saveTicketData(state, payload) {

      //assegno data ultima modifica
      payload.lastActivity = new Date();

      //aggiungo/modifico l'oggetto 
      if (!payload.id) {
        payload.id = Math.floor(Math.random() * 90000) + 10000;
        state.rows.unshift(payload);
      } else {
        const index = state.rows.findIndex(obj => obj.id === payload.id)
        state.rows[index] = { ...state.rows[index], ...payload }
      }
    }
  },
})