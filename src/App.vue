<script>
import Home from "./views/Home.vue";
import Navigation from "./components/Navigation.vue";
import Socials from "./components/Socials.vue";
import { RouterView } from "vue-router";

export default {
  components: { Home, Navigation, Socials, RouterView },
  setup() {
    return {};
  },
};
</script>

<template>
  <div class="full-Paint">
    <main>
      <Navigation />
      <RouterView />
    </main>
    <aside class="float-left">
      <Socials id="socials" />
    </aside>
  </div>
</template>

<style>
#app {
  background-color: rgb(26, 38, 57);
  height: 100vh;
  width: 100vw;
}

.full-Paint {
  background-color: rgb(26, 38, 57);
  height: 100vh;
  width: 100vw;
}

.accent {
  color: rgb(43, 196, 230);
  font-family: "shadows into light";
}

h1,
h2 {
  font-size: 6rem;
  font-family: "aboreto";
  font-weight: 500;
}

p {
  font-size: 2rem;
  font-family: "josefin sans";
}

@media (max-width: 800px) {
  h1 {
    font-size: 5rem;
  }

  article p {
    font-size: 1.5rem;
  }
}

@media (max-width: 670px) {
  h1 {
    font-size: 3rem;
    margin: 2rem 0;
  }
}
</style>
