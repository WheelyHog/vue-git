<script setup>
import { menu } from '@/data/menu'

const menuList = menu
let activeId = 0

const setActiveId = (id) => {
  activeId = id
}
</script>

<template>
  <div class="wrapper">
    <div class="footer">
      <div class="left">
        <div class="column">
          <h2 class="column-title">Menu</h2>
          <ul class="column-list">
            <router-link
              :to="item.path"
              v-for="item in menuList"
              :key="item.id"
              @click="setActiveId(item.id)"
            >
              <li class="column-item">
                {{ item.title }}
              </li>
            </router-link>
            <router-link to="/cart">
              <li class="column-item">Cart</li>
            </router-link>
          </ul>
        </div>
        <div class="column">
          <h2 class="column-title">Our Address</h2>
          <ul class="column-list">
            <li class="column-item-text">1234 - Colombia</li>
            <li class="column-item-text">Bogota - 43210</li>
            <li class="column-item-text">123-456-789</li>
          </ul>
        </div>
        <div class="column">
          <h2 class="column-title">Contact Us</h2>
          <ul class="column-list">
            <li class="column-item">+999 888 777</li>
            <li>
              <div class="social-icons">
                <i class="lab la-facebook"></i>
                <i class="lab la-twitter"></i>
                <i class="lab la-instagram"></i>
                <i class="lab la-whatsapp"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <router-link to="/">
          <div class="logo">
            <img src="../assets/img/logo.png" alt="" class="img-logo" />
            <div class="logo-text">
              <span>Garden</span><br />
              <span>Vue</span>
            </div>
          </div>
        </router-link>
        <span class="subscribe">Subscribe to our newsletter to stay update</span>
        <div class="input-container">
          <input type="text" placeholder="Enter your email" />
          <button>
            Subscribe
            <span class="material-symbols-outlined">keyboard_double_arrow_right</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: #036701;
  padding: 10px;
}

.footer {
  margin: 50px auto;
  display: flex;
  justify-content: space-around;
  color: white;
  text-shadow: black 1px 1px 2px;
}

.left {
  display: flex;
  gap: 50px;
}

.column-list {
  list-style: none;
  margin-top: 20px;
}

.column-item {
  margin-bottom: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  transition: all 0.3s;
}

.column-item-text {
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  transition: all 0.3s;
}

.column-item:hover {
  color: yellow;
}

.social-icons {
  display: flex;
  font-size: 24px;
  gap: 10px;
}

.social-icons i:hover {
  color: yellow;
  cursor: pointer;
}

.right {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.logo {
  display: flex;
  gap: 20px;
  align-items: center;
}

.img-logo {
  width: 90px;
  height: 90px;
  background-color: #fff;
  border-radius: 50%;
  border: 5px solid #ffffff;
}

.logo-text span {
  font-size: 30px;
  font-weight: bold;
  color: #0bd306;
  line-height: 30px;
}

.input-container {
  background-color: #fff;
  padding: 10px;
  display: flex;
  position: relative;
  border-radius: 16px;
}

.input-container input {
  padding: 10px 200px 10px 20px;
  font-size: 18px;
  outline: none;
  border: 2px solid #036701;
  border-radius: 8px;
  width: 100%;
}

.subscribe {
  font-size: 22px;
}

.input-container button {
  position: absolute;
  right: 10px;
  top: 10px;
  border-radius: 0 8px 8px 0;
  border: none;
  background-color: #289d25;
  color: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s;
}

.input-container button:hover {
  background-color: #036701;
}
</style>
