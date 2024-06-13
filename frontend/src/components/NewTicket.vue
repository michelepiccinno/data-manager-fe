<script>
import { isVNode } from 'vue';


export default {

  name: "NewTicket",

  data() {
    return {
      formData: {
        object: '',
        description: '',
        priority: '',
        status: ''
      },
      errors: {
        object: '',
        description: '',
        priority: '',
        status: ''
      },
    }
  },

  methods: {
    saveTicket() {
      if (this.validateForm()) {
        //recupero i dati del form
        //e li invio alla action storeData
        this.$store.dispatch('storeData', this.formData);
        this.$router.push('/')
      }
    },

    validateForm() {
      let isValid = true;
      let fields = ['object', 'description', 'priority', 'status'];
      fields.forEach(element => {
        ((!this.formData[element]) ? (this.errors[element] = ('Questo campo è obbligatorio')) && (isValid = false) : (this.errors[element] = ''));
      });
      return isValid;
    },
  },

  computed: {
    bindModal() {
      // (attiva la modale reattivamente se i campi del form sono non vuoti)
      // controllo se ogni campo di formData ha un valore true. Solo se tutti i campi sono valorizzati ho un return true
      return ['object', 'description', 'priority', 'status'].every(field => this.formData[field]);
    }
  },

}
</script>


<template>

  <!-- FORM DATA -->
  <div class="container pt-5">
    <div class="row">
      <div class="col">
        <form @submit.prevent="saveTicket()">
          <span class="d-flex justify-content-end">*campi obbligatori</span>
          <div class="form-floatingmb-2">
            <span class="d-block">*Oggetto</span>
            <input name="object" type="text" v-model="formData.object" ref="objectField" class="form-control"
              :class="{ 'is-invalid': errors.object }" />
            <div class="text-danger" v-if="errors.object">{{ errors.object }}</div>
          </div>

          <div class="form-floating mb-2">
            <span>*Descrizione problema</span>
            <textarea name="description" type="text" v-model="formData.description" ref="descriptionField"
              class="form-control" :class="{ 'is-invalid': errors.description }" placeholder="Leave a comment here"
              id="floatingTextarea"></textarea>
            <div class="text-danger" v-if="errors.description">{{ errors.description }}</div>
          </div>

          <div class="mb-2">
            <span>*Priorità</span>
            <select v-model="formData.priority" ref="priorityField" class="form-select mt-0 mb-2"
              :class="{ 'is-invalid': errors.priority }" aria-label="Default select example">
              <template v-for="element in this.$store.state.priorityList">
                <option selected :value="element">
                  {{ element }}
                </option>
              </template>
            </select>
            <div class="text-danger" v-if="errors.priority">{{ errors.priority }}</div>
          </div>

          <div class="mb-2">
            <span>*Stato</span>
            <select v-model="formData.status" ref="statusField" class="form-select mt-0"
              :class="{ 'is-invalid': errors.status }" aria-label="Default select example">
              <template v-for="element in this.$store.state.statusList">
                <option selected :value="element">
                  {{ element }}
                </option>
              </template>
            </select>
            <div class="text-danger" v-if="errors.status">{{ errors.status }}</div>
          </div>

          <!-- Button trigger modal -->

          <button type="submit" class="btn btn-primary mt-2" :data-bs-toggle="bindModal ? 'modal' : ''"
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