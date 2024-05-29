<script>

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



  methods: {
  
  },

}
</script>


<template>

  <!-- FORM DATA -->
  <div class="container pt-5">
    <div class="row">
      <div class="col">
        <form @submit.prevent="ticketProcessing()">
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
            <template v-for="element in priorityList">
              <option selected :value="element">
                {{ element }}
              </option>
            </template>
          </select>
          <span>Stato</span>
          <select ref="statusField" class="form-select mt-0" aria-label="Default select example">
            <template v-for="element in statusList">
              <option selected :value="element">
                {{ element }}
              </option>
            </template>
          </select>
          <button type="submit" class="btn btn-primary mt-2">Salva</button>
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