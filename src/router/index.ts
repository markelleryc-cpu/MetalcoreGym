import AboutView from '@/views/AboutView.vue'
import Equipmentview from '@/views/Equipmentview.vue'
import HomeView from '@/views/HomeView.vue'
import MerchView from '@/views/MerchView.vue'
import { createRouter, createWebHistory } from 'vue-router'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
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
  }
  ],
})

export default router
