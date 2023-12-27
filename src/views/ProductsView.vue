<script setup>
import {productsStore} from "@/stores/products";

const store = productsStore()
const products = store.products
console.log(products)
</script>


<template>
  <div class="wrapper">
    <div class="top">
      <div class="left">
        <h2 class="title">View All Products</h2>
        <p class="text">Looking for the perfect plant for your (living)room? We’ve got you covered. You can easily buy
          the most beautiful plants in our online shop. Within a few steps you can order your favorites and receive them
          delivered fresh from the nursery to your home.</p>
      </div>
      <div class="right">
        <img src="../assets/img/plant-1.png" alt="">
      </div>
    </div>
    <div class="bottom">
      <div class="products-container">
        <div class="product-item" v-for="item in products" :key="item.id">
          <div class="product-img">
            <img :src="item.image" alt="">
          </div>
          <div class="product-description">
            <h4 class="product-title">{{ item.title }}</h4>
            <div class="price-box">
              <h2 class="discount">$ {{ item.discount_price ? item.discount_price : item.price }}</h2>
              <h3 class="price">{{item.discount_price ? "$" : ""}} {{ item.discount_price ? item.price : ""}}</h3>
            </div>
            <button class="add">
              Add to Cart
              <span class="material-symbols-outlined">add_shopping_cart</span>
            </button>
          </div>
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
  margin-bottom: 50px;
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
  width: 400px;
  height: 100%;
  object-fit: cover;
}
.products-container {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.product-item {
  max-width: 350px;
  border: 1px solid #289d25;
  border-radius: 8px;
  padding: 20px;
  cursor: pointer;
}

.product-item:hover {
  background-color: #f3f3f3;
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
  border: 1px solid #036701;
}

.product-item:hover .product-title {
  color: #036701;
}

.product-img {
  width: 100%;
}

.product-img img {
  border-radius: 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-description {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;
}

.product-title {
  height: 40px;
  color: #289d25;
}

.price-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.discount {
  color: #036701;
}

.price {
  color: grey;
  text-decoration: line-through;
}

.add {
  background-color: #289d25;
  border: 1px solid #036701;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  text-shadow: black 1px 1px 2px;
  transition: all .3s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.add:hover {
  background-color: #036701;
  color: yellow;
}
</style>