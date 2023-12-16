<script setup>
import {ref} from "vue";

const currentSlide = ref(0)

const goNext = () => {
  if (currentSlide.value !== 4) {
    currentSlide.value++
  } else {
    currentSlide.value = 0
  }
}
const goPrev = () => {
  if (currentSlide.value !== 0) {
    currentSlide.value--
  } else {
    currentSlide.value = 4
  }
}

</script>

<template>
  <div class="slider-container">
    <div class="slide-wrapper" :style="{transform: 'translateX('+(-100*currentSlide)+'vw)'}">
      <img src="/slider/slide1.png" alt="" class="slider-item">
      <img src="/slider/slide2.png" alt="" class="slider-item">
      <img src="/slider/slide3.png" alt="" class="slider-item">
      <img src="/slider/slide4.png" alt="" class="slider-item">
      <img src="/slider/slide5.png" alt="" class="slider-item">
    </div>
    <div class="slider-navigation">
      <button class="nav-btn btn-prev" @click="goPrev">
        <span class="material-symbols-outlined">arrow_left_alt</span>
      </button>
      <button class="nav-btn btn-next" @click="goNext">
        <span class="material-symbols-outlined">arrow_right_alt</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.slider-container {
  position: relative;
  -webkit-box-shadow: 0px 7px 24px -12px rgba(3, 103, 1, 1);
  -moz-box-shadow: 0px 7px 24px -12px rgba(3, 103, 1, 1);
  box-shadow: 0px 7px 24px -12px rgba(3, 103, 1, 1);
  width: 100%;
  height: 80vh;
  overflow: hidden;
}

.slide-wrapper{
  display: flex;
  width: 500vw;
  height: 100%;
transition: all .5s ease-in-out;
}
.slider-navigation {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100px;
  display: flex;
  gap: 10px;
}

.slider-item{
  width: 100vw;
  height: 100%;
  object-fit: cover;
  background-color: rgba(3, 103, 1, 0.2);
}

.nav-btn {
  border: 1px solid #036701;
  background: transparent;
  color: #036701;
  padding: 10px;
  cursor: pointer;
  border-radius: 3px;
  transition: all .3s;
}

.nav-btn:hover {
  background-color: #036701;
  color: white;
}
</style>