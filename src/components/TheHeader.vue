<script setup>
import {menu} from "@/data/menu";
const menuList = menu
let activeId = 0;

const setActiveId = (id)=>{
  activeId = id
}

</script>

<template>
  <div class="top">
    <router-link to="/">
      <div class="logo">
        <img src="../assets/img/logo.png" alt="" class="img-logo">
        <div class="logo-text">
          <span>Garden</span><br>
          <span>Vue</span>
        </div>
      </div>
    </router-link>
    <div class="menu-wrapper">
      <div class="navbar">

        <ul class="menu-list">
          <router-link :to="item.path" v-for="item in menuList" :key="item.id">
            <li :class="activeId === item.id ? 'menu-item-active' : 'menu-item'" @click="setActiveId(item.id)">{{item.title}}</li>
          </router-link>
          <router-link to="/cart">
            <li :class="activeId === 5 ? 'menu-item-active' : 'menu-item'" @click="setActiveId(5)">
              <span class="material-symbols-outlined light-theme">shopping_cart</span>
            </li>
          </router-link>
        </ul>
      </div>


      <div class="theme">
        <span class="material-symbols-outlined light-theme">light_mode</span>
        <span class="material-symbols-outlined light-theme">dark_mode</span>
      </div>
    </div>

  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap");

.top {
  height: 100px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  -webkit-box-shadow: 0 7px 24px -12px rgba(3, 103, 1, 1);
  -moz-box-shadow: 0 7px 24px -12px rgba(3, 103, 1, 1);
  box-shadow: 0 7px 24px -12px rgba(3, 103, 1, 1);
}

.logo {
  display: flex;
  gap: 20px;
  align-items: center;
  cursor: pointer;
}

.logo-text span {
  font-size: 30px;
  font-weight: bold;
  color: #036701;
  line-height: 30px;
}

.img-logo {
  width: 70px;
  height: 70px;
  padding: 5px;
  border: 2px solid #036701;
  border-radius: 50%;
}

.menu-wrapper {
  display: flex;
  align-items: center;
  gap: 50px;
}

.menu-list {
  display: flex;
  gap: 50px;
  list-style: none;
  font-weight: 600;
  font-size: 18px;
}
.menu-item{
  color: #036701;
}
.menu-item-active{
  color: #289d25;
}
.menu-item-active span{
  color: #289d25;
}
.light-theme {
  cursor: pointer;
  color: #036701;
}

</style>