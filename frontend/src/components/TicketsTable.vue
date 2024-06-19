<script>
import { computed } from 'vue';
import NewTicket from './NewTicket.vue';
import TicketDetail from './TicketDetail.vue';

export default {

  name: "TicketsTable",

  components: {
    TicketDetail,
    NewTicket
  },

  computed: {

    //funzione che e calcola (in base alla data di apertura/modifica) l'ultima attività sui ticket
    calcLastActivity() {

      return this.$store.state.rows.map(row => {

        //leggo la data di ogni singolo ticket
        let dataInizio = new Date(row.lastActivity);
        //leggo la data attuale
        let dataAttuale = new Date();
    
        // Calcolo la differenza in millisecondi tra dataAttuale e dataInizio
        let differenza = dataAttuale.getTime() - dataInizio.getTime();

        // Calcolo le unità di tempo
        let secondi = Math.floor(differenza / 1000);
        let minuti = Math.floor(secondi / 60);
        let ore = Math.floor(minuti / 60);
        let giorni = Math.floor(ore / 24);
        let settimane = Math.floor(giorni / 7);

        // Calcolo i resti per ottenere secondi, minuti, ore e giorni
        secondi %= 60;
        minuti %= 60;
        ore %= 24;
        giorni %= 7;

        // Formatto l'output
        let tempoTrascorso = "";
        if (settimane >= 1) {
          tempoTrascorso = `${settimane}w ${giorni}d ${ore}h`;
        } else if (giorni >= 1) {
          tempoTrascorso = `${giorni}d ${ore}h ${minuti}m`;
        } else {
          tempoTrascorso = `${ore}h ${minuti}m ${secondi}s`;
        }

        //aggiorno ogni ticket con tempotrascorso
        return { ...row, lastActivity: tempoTrascorso };
      })
    }
  },
}
</script>

<template>

  <div class="container pt-5">
    <div class="row">
      <div class="col">

        <table class="table table-striped table-hover border">
          <thead>
            <tr>
              <th scope="col">Ticket ID</th>
              <th scope="col">Oggetto</th>
              <th scope="col">Ultima attività</th>
              <th scope="col">Priorità</th>
              <th scope="col">Stato</th>
            </tr>
          </thead>

          <tbody>
            <!-- handleFormSubmitted è sempre in ascolto sul componente (in attesa di un emit)-->
            <TicketDetail v-for="row in calcLastActivity" :id="row.id" :object="row.object"
              :lastActivity="row.lastActivity" :priority="row.priority" :status="row.status" :key="row.id" />
          </tbody>

        </table>
      </div>
    </div>
  </div>

</template>

<style scoped>
.table> :not(caption)>*>* {
  padding: 0.2rem 0.5rem;
}

.table tbody {
  border-width: 2px;
}
</style>
