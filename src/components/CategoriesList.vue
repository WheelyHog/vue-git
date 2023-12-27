<script setup>
import {productsStore} from "@/stores/products";

const store = productsStore()
const categoriesToShow = store.categoriesToShow

</script>

<template>
  <div class="categories-list-wrapper">
    <div class="top">
      <div class="left">
        <h2>Plants will make your life better</h2>
        <p>Create incredible plant design for your offices or apartments. Add freshness to your new ideas.</p>
        <router-link to="/categories" class="see-all">
          See All Categories
          <span class="material-symbols-outlined">expand_circle_right</span>
        </router-link>
      </div>
      <div class="right">
        <img src="../assets/img/mint.png" alt="">
      </div>
    </div>
    <div class="categories-list">
      <div class="category-container" v-for="category in categoriesToShow" :key="category.id">
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
.categories-list-wrapper {
  padding: 10px;
  margin: 100px 0;
}

.top {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

.left, .right {
  width: 25%;
}

.left {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #036701;
}

.left h2 {
  font-size: 48px;
}

.left p {
  font-size: 18px;
}

.left .see-all {
  padding: 20px;
  border: none;
  border-radius: 3px;
  background-color: #289d25;
  color: white;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.3px;
  align-self: flex-start;
  cursor: pointer;
  transition: all .3s;
  display: flex;
  align-items: center;
  gap: 10px;
}

.left .see-all:hover {
  background-color: #036701;
}

.right img {
  width: 100%;

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
.category-desc h3{
  text-align: center;
}
</style>