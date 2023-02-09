<template>
  <div class="main min-h-screen flex flex-col w-3/4 mx-auto items-center">
    <h1
      class="header w-full text-center shadow-2xl shadow-black saturate-200 rounded-2xl"
    >
      My thoughts along the way
    </h1>
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
  font-size: 3.5rem;
  margin: 3rem 0 2rem 0;
  color: rgb(0, 121, 148);
  border: 1px solid rgb(0, 121, 148);
}

.thought-container {
  padding-top: 1rem;
  height: 75vh;
  padding: 0 1rem;
  overflow: scroll;
  z-index: 2;
}

.thought-container,
.header {
  width: 85vw;
}

h3 {
  font-size: 1.9rem;
  margin-bottom: 1.5rem;
  color: rgb(0, 121, 148);
  font-family: "shadows into light";
  text-decoration: underline;
}

p {
  font-size: large;
  line-height: 1.8rem;
  letter-spacing: 1.3px;
  margin: 1.5rem 0 4rem 0;
}

@media (max-width: 500px) {
  .thought-container,
  .header {
    width: 95vw;
  }

  .header {
    font-size: 1.8rem;
    margin: 2rem 0;
    padding: 0.5rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  p {
    font-size: medium;
    text-align: left;
  }
}
</style>
