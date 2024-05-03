<script>
import { stringifyQuery } from 'vue-router';

export default {

  name: "TicketDetail",

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

  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ object }}</td>
    <td>{{ lastActivity }}</td>
    <td class="box-priority">
      <div :class="'td-priority bg-color-' + priority">
        {{ priority }}
      </div>
    </td>
    <td>{{ status }}</td>
  </tr>

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