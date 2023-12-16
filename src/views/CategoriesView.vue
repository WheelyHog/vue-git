<script setup>
import {productsStore} from "@/stores/products";

const store = productsStore()
const categoriesList = store.categories
</script>

<template>
  <div class="wrapper">
    <div class="top">
      <div class="left">
        <h2 class="title">View All Categories</h2>
        <p class="text">Looking for the perfect plant for your (living)room? We’ve got you covered. You can easily buy
          the most beautiful plants in our online shop. Within a few steps you can order your favorites and receive them
          delivered fresh from the nursery to your home.</p>
      </div>
      <div class="right">
        <img src="../assets/img/plant.png" alt="">
      </div>
    </div>
    <div class="categories-list">
      <div class="category-container" v-for="category in categoriesList" :key="category.id">
        <div class="category-img">
          <img :src="category.image" alt=""/>
        </div>
        <div class="category-desc">
          <h3>{{ category.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 50px auto;
  padding: 10px;
}
.top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  color: #036701;
}
.title{
  font-size: 48px;
  margin-bottom: 20px;
}

.text{
  font-size: 18px;
  line-height: 26px;
}

.right img{
  width: 200px;
  height: 200px;
  object-fit: cover;
}
.categories-list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
}

.category-container {
  margin-top: 30px;
  padding: 10px;
  border: 1px solid rgba(3, 103, 1, 0.2);
  max-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  border-radius: 3px;
  transition: all .3s;
  color: #289d25;
}

.category-container:hover {
  background-color: rgba(3, 103, 1, 0.2);
  color: #036701;
  border: 1px solid #036701;
  cursor: pointer;
}

.category-img {
  width: 100%;
}

.category-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 3px;
}
</style>