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
          priority: 'normale',
          status: 'completo'
        },
        {
          id: '98513',
          object: 'Aggiornamento bloccato',
          lastActivity: '8h 25m 16s',
          priority: 'urgente',
          status: 'in corso'
        },
        {
          id: '75855',
          object: 'Alert errore',
          lastActivity: '5h 5m 25s',
          priority: 'media',
          status: 'preso in carico'
        },
        {
          id: '87255',
          object: 'Installazione bloccata',
          lastActivity: '4h 9m 15s',
          priority: 'bassa',
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

  <!--   <TicketDetail 
    v-for="book in books" 
    :title="book.titolo" 
    :dimension="book.dimensione" 
    :key="book.id" /> -->


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

.router-link {
  text-decoration: none;
  color: black;
  width: 100%;
  display: block
}

td {
  border: 1px solid white;
}

span {
  width: 100%;
  display: block;
  text-align: center;
  padding: .2rem;
}
</style>
