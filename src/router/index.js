import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import CardView from '../views/CardView.vue'
import ArrangeView from '../views/ArrangeView.vue'
const routes = [
  {
    path: '/', name: 'home', component: HomeView
  },
  {
    path: '/login', name: 'login',component: LoginView
  },
  {
    path: '/registration', name: 'registration',component:RegistrationView
  },
  {
    path: '/logout', name: 'logout',component: LoginView
  },
  {
    path: '/card', name: 'card',component: CardView
  },
  {
    path: '/arrange', name: 'arrange',component: ArrangeView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
