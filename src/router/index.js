import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from "@/components/Todo";
import Done from "@/components/Done";
import Edit from "@/components/Edit";
import Settings from "@/components/Settings";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Todo
  },
  {
    path: '/done',
    name: 'Done',
    component: Done
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/edit:id',
      name: 'Edit',
      component: Edit
    }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
