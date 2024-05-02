<template>
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

            <tr onclick="window.location.href = 'http://www.google.it';" style="cursor: pointer">
              <th scope="row">56780</th>
              <td>Riavvio sistema</td>
              <td>2d 4h 15m</td>
              <td>Normale</td>
              <td><span class="bg-danger">In lavorazione</span></td>
            </tr>

            <tr onclick="window.location.href = 'http://www.google.it';" style="cursor: pointer">
              <th scope="row">85462</th>
              <td>Rallentamento</td>
              <td>8h 25m 16s</td>
              <td>Bassa</td>
              <td><span class="bg-info-subtle">Da assegnare</span></td>
            </tr>

            <tr onclick="window.location.href = 'http://www.google.it';" style="cursor: pointer">
              <th scope="row">37862</th>
              <td>Alert errore</td>
              <td>8d 14h 3m</td>
              <td>Urgente</td>
              <td><span class="bg-success">Risolto</span></td>
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
