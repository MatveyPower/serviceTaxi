import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Cars from '../views/Cars-page.vue'
import Drivers from '../views/Drivers-page.vue'
import Coasts from '../views/Coast-page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    meta: { title: 'Такси' }
  },
  {
    path: '/cars',
    name: 'Cars',
    component: Cars,
    meta: { title: 'Машины' }
  },
  {
    path: '/drivers',
    name: 'Drivers',
    component: Drivers,
    meta: { title: 'Водители' }
  },
  {
    path: '/coasts',
    name: 'Coasts',
    component: Coasts,
    meta: { title: 'Тарифы' }
  },


  // {
  //   path: '/case',
  //   name: 'Case',
  //   component: () => import( '../views/CasePage.vue')
  // },
  // {
  //   path: '/accounts',
  //   name: 'accounts',
  //   component: () => import( '../views/AccountsPage.vue')
  // }
]

const router = new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})


export default router
