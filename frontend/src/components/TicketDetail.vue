<script>
import { stringifyQuery } from 'vue-router';
import { mapGetters, mapActions } from 'vuex';

export default {

  name: "TicketDetail",

  data() {
    return {
      formData: {
        //this.xxx si riferisce alle props
        id: this.id,
        description: this.description,
        priority: this.priority,
        status: this.status,
      }
    }
  },

  methods: {
    editTicket() {
      //recupero i dati del form
      //e li invio alla action storeData
      this.$store.dispatch('storeData', this.formData);
      this.highlightRow(this.formData.id)
    },

    //illumina la row quando salviamo la lavorazione del relativo ticket
    highlightRow(id) {
      // Seleziono la row dello specifico id ticket ricevuto
      var tdToHighlight = document.getElementById('tr-' + id);
      // Aggiungo la classe 'highlighted' al td selezionato per evidenziare la riga salvata (1 secondo)
      tdToHighlight.classList.remove('returnnormal');
      tdToHighlight.classList.add('highlighted');
      // Rimuovo la classe 'highlighted' dopo un secondo
      setTimeout(() => {
        tdToHighlight.classList.add('returnnormal');
        tdToHighlight.classList.remove('highlighted');
      }, 1000);
    }
    
  },

  props: {
    id: Number,
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
  <tr data-bs-toggle="offcanvas" :data-bs-target="'#staticBackdrop-' + id" class="cursor-pointer" :id="'tr-' + id">
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
            <form @submit.prevent="editTicket">
              <div class="form-floating mb-2">
                <span>Descrizione lavorazione</span>
                <textarea v-model="formData.description" class="form-control" placeholder="Leave a comment here"
                  id="floatingTextarea"></textarea>
              </div>
              <span>Priorità</span>
              <select v-model="formData.priority" class="form-select mt-0 mb-2" aria-label="Default select example">
                <option selected>{{ priority }}</option>
                <template v-for="element in this.$store.state.priorityList">
                  <option v-if="element !== priority" :value="element">
                    {{ element }}
                  </option>
                </template>
              </select>
              <span>Stato</span>
              <select v-model="formData.status" class="form-select mt-0" aria-label="Default select example">
                <option selected>{{ status }}</option>
                <template v-for="element in this.$store.state.statusList">
                  <option v-if="element !== status" :value="element">
                    {{ element }}
                  </option>
                </template>
              </select>
              <button type="submit" class="btn btn-primary mt-2" data-bs-dismiss="offcanvas">Salva</button>
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

.highlighted {
  opacity: 0;
  transition: opacity .6s;
}

.returnnormal {
  opacity: 1;
  transition: opacity .6s;
}
</style>