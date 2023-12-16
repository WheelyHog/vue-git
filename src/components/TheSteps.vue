<script setup>
const data = [
  {
    id: 1,
    image: "https://3.imimg.com/data3/JC/AF/MY-10529811/sunflower-plant-500x500.jpg",
    title: "Choose Plant",
    text: "We have several varieties plants you can choose from.",
  },
  {
    id: 2,
    image: "https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-do-plants-need/english/wall-2018-whatdoplantsneedmp4.transform/content-tile-large/image.png",
    title: "Place an order",
    text: "Once your order is set, we move to the next step which is the shipping."
  },
  {
    id: 3,
    image: "https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/parts-of-a-plant/english/wall-2018-partsofaplantmp4.transform/content-tile-large/image.png",
    title: "Get plants delivered",
    text: "Our delivery process is easy, you receive the plant direct to your door."
  },

]

</script>

<template>
  <div class="steps-wrapper">
    <h2 class="steps-main-title">Steps to start your plants off right :</h2>
    <div class="steps-container">
      <div class="steps-item" v-for="item in data" :key="item.id">
        <img :src="item.image" alt="">
        <h2 class="steps-number">{{ item.id }}</h2>
        <div class="steps-description">
          <h2 class="steps-title">{{ item.title }}</h2>
          <p class="steps-text">{{ item.text }}</p>
        </div>
        <div class="steps-background"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.steps-wrapper {
  width: 100%;
  background: url("../assets/img/leafs.png");
  background-size: cover;
  text-align: center;
  padding: 50px;
  margin-bottom: 100px;
}

.steps-main-title{
  margin-bottom: 50px;
  color: white;
  font-size: 48px;
  text-shadow: black 1px 1px 2px;
}


.steps-container {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 50px;
}

.steps-item {
  width: 100%;
  height: 50vh;
  position: relative;
  border: 1px solid #036701;
  border-radius: 5px;
  max-width: 350px;
  overflow: hidden;
  cursor: pointer;
}

.steps-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.steps-number {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #fff;
  padding: 10px 20px;
  border: 2px solid #036701;
  border-radius: 8px;
  z-index: 10;
}

.steps-title,
.steps-text {
  height: 60px;
  text-shadow: black 1px 1px 2px;
}

.steps-description {
  position: absolute;
  bottom: -60px;
  left: 20px;
  color: white;
  font-weight: bold;
  transition: all .5s;
  z-index: 10;
}

.steps-item:hover .steps-description {
  bottom: 180px;
}
.steps-background{
  height: 0;
  transition: all .3s;
}
.steps-item:hover .steps-background {
  background-color: rgba(3, 103, 1, .7);
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  z-index: 2;
}

</style>