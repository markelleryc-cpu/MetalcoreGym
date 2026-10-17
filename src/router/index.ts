import CoachView from '@/views/CoachView.vue'
import Equipmentview from '@/views/Equipmentview.vue'
import HomeView from '@/views/HomeView.vue'
import MembershipView from '@/views/MembershipView.vue'
import MerchView from '@/views/MerchView.vue'
import { createRouter, createWebHistory } from 'vue-router'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/merch',
    name: 'merch',
    component: MerchView,
  },
    {
    path: '/equipment',
    name: 'equipment',
    component: Equipmentview,
  },
  {
    path: '/membership',
    name: 'membership',
    component: MembershipView,
  },
    {
    path: '/coach',
    name: 'coach',
    component: CoachView,
  }
  ],
})

export default router
