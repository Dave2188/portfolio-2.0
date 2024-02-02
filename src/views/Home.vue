<script>
import Hero from "../components/Hero.vue";

export default {
  components: { Hero },
};
</script>

<template>
  <div id="main" class="flex justify-center items-center">
    <Hero />
  </div>
</template>

<style scoped>
#main {
  height: 100vh;
  width: 100vw;
}

/* @media (min-width: 2000px) {
  #main {
    transform: scale(1.2);
  }
} */
</style>
