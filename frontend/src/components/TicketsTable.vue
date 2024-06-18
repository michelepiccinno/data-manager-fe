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
    formattedRows() {
      //funzione che formatta e calcola (in base alla data di apertura/modifica) l'ultima attività sui ticket (la funzione viene utilizzata esclusivamente per la vista e non tocca il DB)
      return this.$store.state.rows.map(row => {
        let newValue = row.lastActivity.replace(/[^0-9]/g, '');
        return { ...row, lastActivity: newValue };
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
            <TicketDetail v-for="row in formattedRows" :id="row.id" :object="row.object"
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
