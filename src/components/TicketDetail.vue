<script>
import { stringifyQuery } from 'vue-router';

export default {

  name: "TicketDetail",

  data() {
    return {
      priorityList: [
        'low',
        'normal',
        'medium',
        'high'
      ],
      statusList: [
        'da assegnare',
        'preso in carico',
        'in lavorazione',
        'completo'
      ]
    }
  },

  emits: ['formSubmitted'],

  methods: {
    // EMIT -Passa dati aggiunti/modificati al genitore chiamando la funzione 'xxxxx'
    ticketProcessing() {
      const description = this.$refs.descriptionField.value;
      const priority = this.$refs.priorityField.value;
      const status = this.$refs.statusField.value;

      this.$emit('formSubmitted', { description, priority, status });
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
  <!-- TABELLA TICKETS -->
  <!-- Ogni ciclo stampa un data data-bs-target con id diverso associato a staticBackdrop. 
    Quando data-bs-toggle viene attivato apre l'offcanvas con id corrispondente -->
  <tr data-bs-toggle="offcanvas"
    :data-bs-target="'#staticBackdrop-' + id" class="cursor-pointer">
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

  <!-- OFFCANVAS TICKET DETAIL -->
  <!-- Ogni ciclo stampa id diverso associato a staticBackdrop.  -->
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


      <!-- ACCORDION -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="btn btn-secondary collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Lavora Ticket
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse mt-2" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <!-- ACCORDION FORM DATA -->
            <form @submit.prevent="ticketProcessing">
              <div class="form-floating mb-2">
                <span>Descrizione lavorazione</span>
                <textarea ref="descriptionField" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
              </div>
              <span>Priorità</span>
              <select ref="priorityField" class="form-select mt-0 mb-2" aria-label="Default select example">
                <option selected>{{ priority }}</option>
                <template v-for="element in priorityList">
                  <option v-if="element !== priority" :value="element">
                    {{ element }}
                  </option>
                </template>
              </select>
              <span>Stato</span>
              <select ref="statusField" class="form-select mt-0" aria-label="Default select example">
                <option selected>{{ status }}</option>
                <template v-for="element in statusList">
                  <option v-if="element !== status" :value="element">
                    {{ element }}
                  </option>
                </template>
              </select>
              <button type="submit" class="btn btn-primary mt-2">Salva</button>
            </form>
          </div>
        </div>
      </div>



    </div>
  </div>
</template>


<style scoped>
.cursor-pointer {
  cursor: pointer;
}

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