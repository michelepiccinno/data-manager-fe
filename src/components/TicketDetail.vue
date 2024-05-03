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
    key: String,
  }

}
</script>

<template>

<tr>
    <th scope="row">{{ id }}</th>
    <td>{{ object }}</td>
    <td>{{ lastActivity }}</td>
    <td>{{ priority }}</td>
    <td>{{ status }}</td>
  </tr>

</template>
