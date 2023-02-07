<script>
import Hero from "../components/Hero.vue";

export default {
  components: { Hero },
};
</script>

<template>
  <div id="main">
    <Hero />
  </div>
</template>

<style scoped>
@media (min-width: 2000px) {
  #main {
    transform: scale(1.2);
  }
}
</style>
