import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/Home.vue'
import Lien from '@/Lien.vue'
import Tags from '@/Tags.vue'
import Vues from '@/Vues.vue'

const routes = [
  { path: '/home', component: Home },
  { path: '/lien', component: Lien },
  { path: '/tags', component: Tags },
  { path: '/vues', component: Vues },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
