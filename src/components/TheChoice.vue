<script setup>

</script>

<template>
  <div class="choice-wrapper">
    <div class="left">
      <img src="../assets/img/choice.png" alt=""/>
    </div>
    <div class="right">
      <h2 class="title">Who we really are & why choose us</h2>
      <p class="text">We have over 4000+ unbiased reviews and our customers trust our plant process and delivery service
        every time</p>
      <ul class="benefits-list">
        <li class="benefit-item">
          <span class="material-symbols-outlined">library_add_check</span>
          We always deliver on time.
        </li>
        <li class="benefit-item">
          <span class="material-symbols-outlined">library_add_check</span>
          We give you guides to protect and care for your plants.
        </li>
        <li class="benefit-item">
          <span class="material-symbols-outlined">library_add_check</span>
          We always come over for a check-up after sale.
        </li>
        <li class="benefit-item">
          <span class="material-symbols-outlined">library_add_check</span>
          100% money back guaranteed.
        </li>
      </ul>
      <button class="shop-btn">
        Shop Now
        <span class="material-symbols-outlined">expand_circle_right</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.choice-wrapper {
  display: flex;
  gap: 50px;
  justify-content: center;
  margin-bottom: 100px;
}

.left, .right {
  width: 25%;
}

.left img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #036701;
  gap: 30px;
}

.right h2 {
  font-size: 48px;
}

.right p {
  font-size: 18px;
}

.benefits-list{
  list-style: none;
}
.benefit-item{
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 10px;
}

.shop-btn{
  display: flex;
  gap: 10px;
  align-items: center;
  background-color: transparent;
  font-size: 20px;
  font-weight: bold;
  color: #036701;
  align-self: start;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 10px 20px;
  transition: all .3s;
}

.shop-btn:hover{
  border: 2px solid #036701;
  background-color: rgba(3, 103, 1, 0.2);
}
</style>