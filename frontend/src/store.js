import { createStore } from "vuex";
import database from "./database";

export default createStore({

  //state globale
  state: {
    ticketData: null,
    rows: database.tickets,
    priorityList: database.priorityList,
    statusList: database.statusList,
  },

  //separo la logica di business dallo stato
  actions: {
    storeData({ commit }, payload) {
      commit('saveTicketData', payload);
      /*console.log(payload); */
    }
  },

  mutations: {
    saveTicketData(state, payload) {
      /*console.log(payload.id); */
      /*console.log(state.rows);  */

      //aggiungo/modifico l'oggetto 
      if (payload.id === null || payload.id === undefined) {
        payload.id = '99999';
        payload.lastActivity = '2d 3h 5m';
        state.rows.unshift(payload);
      } else {
        const index = state.rows.findIndex(obj => obj.id === payload.id)
        state.rows[index] = { ...state.rows[index], ...payload }
      }

      console.log('payload_id: ' + payload.id);
      console.log(state.rows);
    }
  },
})