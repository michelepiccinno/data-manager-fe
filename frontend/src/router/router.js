import { createRouter, createWebHistory } from 'vue-router'
import TicketsTable from '@/components/TicketsTable.vue'
import TicketDetail from '@/components/TicketDetail.vue'
import NewTicket from '@/components/NewTicket.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'ticketstable',
      component: TicketsTable
    },
     {
      path: '/newticket',
      name: 'newticket',
      component: NewTicket
    } 

  ]
})

export default router
 