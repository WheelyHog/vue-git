<script setup>
import {productsStore} from "@/stores/products";

const store = productsStore()
const selected = store.products.filter(item => item.discount_price).slice(1, 9)

</script>

<template>
  <div class="wrapper">
    <div class="top">
      <h2 class="top-title">Check out our products</h2>
      <p class="top-title">Here are some selected plants from our showroom, all are in excellent shape and has a long
        life span. Buy and enjoy best quality.</p>
    </div>
    <div class="bottom">
      <div class="products-container">
        <div class="product-item" v-for="item in selected" :key="item.id">
          <div class="product-img">
            <img :src="item.image" alt="">
          </div>
          <div class="product-description">
            <h4 class="product-title">{{ item.title }}</h4>
            <div class="price-box">
              <h2 class="discount">$ {{ item.discount_price }}</h2>
              <h3 class="price">$ {{ item.price }}</h3>
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
  margin-bottom: 100px;
}

.top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 30px;
  color: #036701;
  font-weight: bold;
  max-width: 700px;
  margin: 0 auto;
}

.top h2 {
  font-size: 48px;
}

.top p {
  font-size: 18px;
  margin-bottom: 50px;
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