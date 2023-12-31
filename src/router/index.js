import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import CategoriesView from "@/views/CategoriesView.vue";
import ProductsView from "@/views/ProductsView.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/categories',
      name: 'CategoriesView',
      component: CategoriesView
    },
    {
      path: '/products',
      name: 'ProductsView',
      component: ProductsView
    },
    // {
    //   path: '*',
    //   name: 'HomeView',
    //   component: HomeView
    // },
  ]
})

export default router
