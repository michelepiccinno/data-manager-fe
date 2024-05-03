import { createRouter, createWebHistory } from 'vue-router'
import TicketsTable from '@/components/TicketsTable.vue'
import TicketDetail from '@/components/TicketDetail.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ticketstable',
      component: TicketsTable
    },
    {
      path: '/ticketdetail',
      name: 'ticket-detail',
      component: TicketDetail
    },
  ]
})

export default router
 