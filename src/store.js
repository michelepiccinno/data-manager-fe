import { createStore } from "vuex";
import database from "./database";

export default createStore({

  //state globale
  state: {
    ticketData: null,
    rows: database.tickets,
  },

  //separo la logica di business dallo stato
  actions: {
    storeData({ commit }, payload) {
      commit('setTicketData', payload);
      /*console.log(payload); */
    }
  },

  mutations: {
    setTicketData(state, payload) {
      /*console.log(payload.id); */
      /*console.log(state.rows);  */

      //cerco l'indice dell'oggetto da modificare
      const index = state.rows.findIndex(obj => obj.id === payload.id)

      //replace solo sui campi oggetto di modifica
      state.rows[index] = { ...state.rows[index], ...payload }
    }
  },

})