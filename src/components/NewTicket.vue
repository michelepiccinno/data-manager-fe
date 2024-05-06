<script>
import { stringifyQuery } from 'vue-router';

export default {

  name: "NewTicket",

  data() {
    return {
      priorityList: [
        'high',
        'medium',
        'normal',
        'low'
      ],
      statusList: [
        'completo',
        'preso in carico',
        'in lavorazione',
        'da assegnare',
      ]
    }
  },

  emits: ['formSubmitted'],

  methods: {
    // EMIT -Passa dati aggiunti/modificati al genitore chiamando la funzione 'xxxxx'
    addNewTicket() {
      const id = idFormSaved.id;
      const description = this.$refs.descriptionField.value;
      const priority = this.$refs.priorityField.value;
      const status = this.$refs.statusField.value;
      // trasmette le modifiche al componente genitore
      this.$emit('formSubmitted', { id, description, priority, status });

      this.highlightRow(id);
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
    },
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

  <!-- FORM DATA -->
  <div class="container pt-5">
    <div class="row">
      <div class="col">
        <form @submit.prevent="addNewTicket()">
          <div class="form-floatingmb-2">
            <span class="d-block">Oggetto</span>
            <input ref="objectField" class="form-control" type="text">
          </div>
          <div class="form-floating mb-2">
            <span>Descrizione problema</span>
            <textarea ref="descriptionField" class="form-control" placeholder="Leave a comment here"
              id="floatingTextarea"></textarea>
          </div>
          <span>Priorità</span>
          <select ref="priorityField" class="form-select mt-0 mb-2" aria-label="Default select example">
            <option selected>{{ priority }}</option>
            <template v-for="element in priorityList">
              <option selected :value="element">
                {{ element }}
              </option>
            </template>
          </select>
          <span>Stato</span>
          <select ref="statusField" class="form-select mt-0" aria-label="Default select example">
            <option selected>{{ status }}</option>
            <template v-for="element in statusList">
              <option selected :value="element">
                {{ element }}
              </option>
            </template>
          </select>
          <button type="submit" class="btn btn-primary mt-2" data-bs-dismiss="offcanvas">Salva</button>
        </form>
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