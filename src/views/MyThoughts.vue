<template>
  <div class="min-h-screen flex flex-col w-3/4 mx-auto">
    <h1 class="header w-full text-center">My thoughts along the way</h1>
    <div class="thought-container w-full text-center">
      <ul>
        <li v-for="(thought, index) in thoughts" :key="index">
          <h3>{{ thought.topic }}</h3>
          <p class="text-slate-300">{{ thought.thought }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Thoughts from "../assets/thoughts.js";
import { ref } from "vue";
export default {
  setup() {
    const thoughts = ref(Thoughts);

    return { thoughts };
  },
};
</script>

<style lang="css" scoped>
.header {
  font-size: 3rem;
  margin: 3rem 0;
  color: rgb(43, 196, 230);
}

.thought-container {
  height: 75vh;
  padding: 0 1rem;
  overflow: scroll;
}

h3 {
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
  color: rgb(0, 121, 148);
  font-family: "shadows into light";
  text-decoration: underline;
}

p {
  font-size: medium;
  margin: 2rem 0;
}
</style>
