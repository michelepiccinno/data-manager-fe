<script>

export default {

  name: "NewTicket",

  data() {
    return {
      formData: {
        //this.xxx si riferisce alle props
        object: this.object,
        description: this.description,
        priority: this.priority,
        status: this.status,
      }
    }
  },



  methods: {
    saveTicket() {
      //recupero i dati del form
      //e li invio alla action storeData
      this.$store.dispatch('storeData', this.formData);

      this.$router.push('/')

    }
  },

}
</script>


<template>

  <!-- FORM DATA -->
  <div class="container pt-5">
    <div class="row">
      <div class="col">
        <form @submit.prevent="saveTicket()" action="/">
          <div class="form-floatingmb-2">
            <span class="d-block">Oggetto</span>
            <input v-model="formData.object" ref="objectField" class="form-control" type="text">
          </div>
          <div class="form-floating mb-2">
            <span>Descrizione problema</span>
            <textarea v-model="formData.description" ref="descriptionField" class="form-control"
              placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          </div>
          <span>Priorità</span>
          <select v-model="formData.priority" ref="priorityField" class="form-select mt-0 mb-2"
            aria-label="Default select example">
            <template v-for="element in this.$store.state.priorityList">
              <option selected :value="element">
                {{ element }}
              </option>
            </template>
          </select>
          <span>Stato</span>
          <select v-model="formData.status" ref="statusField" class="form-select mt-0"
            aria-label="Default select example">
            <template v-for="element in this.$store.state.statusList">
              <option selected :value="element">
                {{ element }}
              </option>
            </template>
          </select>

          <!-- Button trigger modal -->
          <button type="submit" class="btn btn-primary mt-2" data-bs-toggle="modal"
            data-bs-target="#staticBackdrop">Salva</button>

          <!-- Modal -->
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">Dati Salvati !</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-footer">
                  <button data-bs-dismiss="modal" class="btn btn-info">Close</button>
                </div>
              </div>
            </div>
          </div>
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