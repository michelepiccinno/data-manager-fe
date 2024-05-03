<script>
import { stringifyQuery } from 'vue-router';

export default {

  name: "TicketDetail",

  data() {
    return {

    }
  },

  methods: {
    openCanvasTicket(id, object, lastActivity, priority, status) {
      console.log(id, object, lastActivity, priority, status);
    }
  },

  props: {
    id: String,
    object: String,
    lastActivity: String,
    priority: String,
    status: String,
  }

}
</script>


<template>

  <tr @click="openCanvasTicket(id, object, lastActivity, priority, status)" data-bs-toggle="offcanvas"
    :data-bs-target="'#staticBackdrop-' + id">
    <th scope="row">
      {{ id }}</th>
    <td>{{ object }}</td>
    <td>{{ lastActivity }}</td>
    <td class="box-priority">
      <div :class="'td-priority bg-color-' + priority">
        {{ priority }}
      </div>
    </td>
    <td>{{ status }}</td>
  </tr>

  <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" :id="'staticBackdrop-' + id"
    aria-labelledby="staticBackdropLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="staticBackdropLabel">Dettaglio Ticket</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="ticket-detail-canvas">
        <li>Id: {{ id }}</li>
        <li>Oggetto: {{ object }}</li>
        <li>Ultima attività: {{ lastActivity }}</li>
        <li>Priorità: <span class="badge text-dark" :class="'bg-color-' + priority">{{ priority }}</span></li>
        <li>Stato: {{ status }}</li>
      </ul>
    </div>
  </div>
</template>


<style scoped>
.td-priority {
  width: 100%;
  padding: 2px;
  display: block;
  border-radius: 5px;
  text-align: center;
}

.bg-color-low {
  background-color: aquamarine;
}

.bg-color-normal {
  background-color: rgb(168, 250, 168);
}

.bg-color-medium {
  background-color: rgb(243, 236, 139);
}

.bg-color-high {
  background-color: rgb(255, 128, 119);
}
</style>