<template>
  <div id="main" class="flex justify-center items-center flex-col min-h-screen w-screen">
    <div class="title-nav">
      <ul class="text-center flex text-stone-300">
        <li
          class="accent tracking-wide text-lg"
          @click="titleSelect"
          v-for="(card, index) in cards"
          :tag="index"
        >
          {{ card.title }}
        </li>
      </ul>
    </div>
    <div class="project-container flex justify-center items-center min-h-screen w-10/12">
      <button id="prev" @click="prevCard">Prev</button>
      <div class="spinner-container md:w-3/4 w-11/12">
        <div class="card flex justify-center items-center h-full">
          <Transition>
            <Project v-if="change === true" :card="cards[index]"></Project>
          </Transition>
        </div>
      </div>
      <button id="next" @click="nextCard">Next</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Project from "../components/Project.vue";
import projectData from "../assets/projects.js";

export default {
  components: { Project },
  setup() {
    const cards = ref(projectData);

    let index = ref(0);
    let change = ref(true);

    const nextCard = () => {
      change.value = !change.value;
      index.value === cards.value.length - 1 ? (index.value = 0) : index.value++;
      let unchange = setTimeout(() => {
        change.value = !change.value;
      }, 1000);
    };

    const prevCard = () => {
      change.value = !change.value;
      index.value === 0 ? (index.value = cards.value.length - 1) : index.value--;
      let unchange = setTimeout(() => {
        change.value = !change.value;
      }, 1000);
    };

    const titleSelect = (e) => {
      index.value = e.target.attributes.tag.value;
    };

    return { cards, index, nextCard, prevCard, change, titleSelect };
  },
};
</script>

<style lang="css" scoped>
.spinner-container {
  height: 70vh;
}

.title-nav {
  position: relative;
  top: 4rem;
}

li {
  margin: 0 1.5rem;
}

li:hover {
  color: rgb(203 213 225);
  cursor: pointer;
  text-decoration: underline;
}

button {
  font-family: "shadows into light";
  background-color: rgb(0, 121, 148);
  color: rgb(203 213 225);
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
}

button:hover {
  background-color: rgb(1, 154, 189);
}

@media (max-width: 900px) {
  .spinner-container {
    margin: 2rem;
  }
}

@media (max-width: 700px) {
  .spinner-container {
    position: relative;
    top: -60px;
  }

  .title-nav {
    display: none;
  }

  button {
    position: absolute;
    top: 10px;
    transform: scale(70%);
  }

  #next {
    right: 30%;
  }

  #prev {
    left: 30%;
  }
}

.v-enter-active {
  transition: 0.5s ease-in;
  transform: rotate(350deg);
}

.v-leave-active {
  transition: all 0.6s ease-out;
  transform: rotate(+350deg);
}

.v-enter-from {
  opacity: 0;
  transition: all 0.5s ease-in;
  transform: translateX(-140%);
}

.v-leave-to {
  opacity: 0;
  transition: all 0.6s ease-in;
  transform: translateX(150%);
}

@media (min-width: 2000px) {
  #main {
    transform: scale(1.1);
  }

  .title-nav {
    top: 7rem;
  }
}
</style>
