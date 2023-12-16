<script setup>

import CategoriesList from "@/components/CategoriesList.vue";
import TheChoice from "@/components/TheChoice.vue";
import TheSlider from "@/components/TheSlider.vue";
import TheSteps from "@/components/TheSteps.vue";
import TheSelected from "@/components/TheSelected.vue";
</script>

<template>
  <main>
    <TheSlider/>
    <CategoriesList/>
    <TheChoice/>
    <TheSteps/>
    <TheSelected/>
  </main>
</template>
