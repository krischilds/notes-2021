import Vue from 'vue'
import About from '../views/About.vue'
import VueRouter from 'vue-router'
import Notes from '../views/Notes.vue'
import ThemeChanger from '../views/ThemeChanger.vue'
import HelloWorld from '../components/HelloWorld.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Notes',
    component: Notes
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  },
  {
    path: '/themes',
    name: 'Themes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: ThemeChanger
  },  
  {
    path: '/hello',
    name: 'HelloWorld',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: HelloWorld
  },   
]

const router = new VueRouter({
  routes
})

export default router
