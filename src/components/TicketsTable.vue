<script>
import TicketDetail from './TicketDetail.vue';

export default {

  name: "TicketsTable",

  components: {
    TicketDetail
  },

  data() {
    return {
      rows: [
        {
          id: '23122',
          object: 'Riavvio sistema',
          lastActivity: '2d 4h 15m',
          priority: 'normal',
          status: 'completo'
        },
        {
          id: '98513',
          object: 'Aggiornamento bloccato',
          lastActivity: '8h 25m 16s',
          priority: 'high',
          status: 'in corso'
        },
        {
          id: '75855',
          object: 'Alert errore',
          lastActivity: '5h 5m 25s',
          priority: 'medium',
          status: 'preso in carico'
        },
        {
          id: '87255',
          object: 'Installazione bloccata',
          lastActivity: '4h 9m 15s',
          priority: 'low',
          status: 'da assegnare'
        },
      ]
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
