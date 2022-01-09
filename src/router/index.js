import Vue from 'vue'
import About from '../views/About.vue'
import VueRouter from 'vue-router'
import Notes from '../views/Notes.vue'
import Themes from '../views/Themes.vue';
import Help from '../views/Help.vue';

Vue.use(VueRouter)

export const routes = [
  {
    path: '/help',
    name: 'Help',
    component: Help,
    props: true,
  },
  {
    path: '/',
    name: 'Notes',
    component: Notes,
    props: true,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About,
    props: true,
  },
  {
    path: '/themes',
    name: 'Themes',
    component: Themes,
    props: true,
  },
]

const router = new VueRouter({
  routes
})

export default router
