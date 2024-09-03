import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ShowroomView from '../views/ShowroomView.vue'
import SingleView from '../views/SingleView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/showroom',
    name: 'showroom',
    component: ShowroomView
  },
  {
    path: '/single',
    name: 'single',
    component: SingleView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router
