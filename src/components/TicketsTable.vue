<script>
import NewTicket from './NewTicket.vue';
import TicketDetail from './TicketDetail.vue';

export default {

  name: "TicketsTable",

  components: {
    TicketDetail,
    NewTicket
  },

  data() {
    return {
      //Vuex "inietta" lo store in tutti i componenti figlio dal componente root 
      //tramite il sistema di plugin di Vue e sarà disponibile su di essi come file this.$store
      rows: this.$store.state.rows
    }
  },

  methods: {
  
    } 
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
            <TicketDetail v-for="row in rows"
            :id="row.id"
            :object="row.object"
            :lastActivity="row.lastActivity"
            :priority="row.priority"
            :status="row.status"
            :key="row.id" />
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
