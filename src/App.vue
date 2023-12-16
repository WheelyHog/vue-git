<script setup>
import {RouterView} from 'vue-router'
import "./assets/global.css"
import {onMounted} from "vue";
import {productsStore} from "@/stores/products";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

const store = productsStore()

onMounted(() => {

  store.fetchAllProducts()
  store.fetchAllCategories()
  store.fetchCategoriesToShow()
})

</script>

<template>
  <div class="container">
    <header>
      <TheHeader/>
    </header>
    <main>
      <RouterView/>
    </main>
    <footer>
      <TheFooter/>
    </footer>
  </div>

</template>

<style scoped>

</style>
