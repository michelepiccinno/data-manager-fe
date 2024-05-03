<script>
import TicketDetail from './TicketDetail.vue';

export default {

  name: "TicketsTable",  

  components: {
    TicketDetail
  },

  data() {
    return {
      books: [
        {
          id: '232',
          titolo: 'il libro della giungla',
          dimensione: '200 pagine',
        },
        {
          id: '173',
          titolo: 'libro cuore',
          dimensione: '350 pagine',
        },
      ]
    }
  },

  methods: {

  }

}
</script>

<template>

  <TicketDetail 
    v-for="book in books" 
    :title="book.titolo" 
    :dimension="book.dimensione" 
    :key="book.id"/>


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

            <tr>
              <th scope="row">56780</th>
              <td>Riavvio sistema</td>
              <td>2d 4h 15m</td>
              <td>Normale</td>
              <td><span class="bg-warning">In lavorazione</span></td>
            </tr>

            <tr>
              <th scope="row">85462</th>
              <td>Rallentamento</td>
              <td>8h 25m 16s</td>
              <td>Bassa</td>
              <td><span class="bg-info-subtle">Da assegnare</span></td>
            </tr>

             <tr>
              <th>
                <router-link :to="{ name: 'ticket-detail' }" class="router-link"> 37862</router-link>
              </th>
              <td>
                <router-link :to="{ name: 'ticket-detail' }" class="router-link">Alert errore</router-link>
              </td>
              <td>
                <router-link :to="{ name: 'ticket-detail' }" class="router-link">8d 14h 3m</router-link>
              </td>
              <td>
                <router-link :to="{ name: 'ticket-detail' }" class="router-link">Urgente</router-link>
              </td>
              <td>
                <router-link :to="{ name: 'ticket-detail' }" class="router-link"> <span
                    class="bg-success">Risolto</span></router-link>
              </td>
            </tr> 

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
