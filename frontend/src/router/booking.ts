import { createRouter, createWebHistory } from "vue-router";
import Booking from "@/views/Booking.vue"
import NotFound from '@/views/NotFound.vue'

const bookingRouter = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "booking",
      component: Booking,
      meta: { hideNavbar: true }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
      meta: { hideNavbar: true },
    },
  ]
})

export default bookingRouter
