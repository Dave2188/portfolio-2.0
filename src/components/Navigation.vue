<template>
  <div class="nav-bar bg-slate-800 flex flex-grow justify-between items-center h-20 shadow-2xl">
    <RouterLink to="/">
      <Logo />
    </RouterLink>
    <div class="hrz-menu text-2xl text-slate-300">
      <ul class="flex flex-row flex-wrap items-center">
        <li class="mx-7 p-2 rounded-lg">
          <router-link to="/about">About</router-link>
        </li>

        <li class="mx-7 p-2 rounded-lg">
          <router-link to="/projects">Projects</router-link>
        </li>

        <li class="mx-7 p-2 rounded-lg">
          <router-link to="/contact">Contact</router-link>
        </li>

        <li class="mx-7 p-2 rounded-lg">
          <router-link to="/thoughts">Thoughts</router-link>
        </li>

        <li @click="downloadResume" class="mx-7 p-2 rounded-lg">Resume</li>
      </ul>
    </div>
    <Hamburger @expand="handleMenu" class="ham-menu md:hidden" />
  </div>
  <div :v-if="expanded" id="menu"
    class="text-2xl w-3/4 bg-slate-800 absolute right-0 z-10 flex justify-end text-slate-300 rounded-bl-2xl"
    @click="handleMenu">
    <ul class="menu-ul flex flex-col items-center w-full">
      <li class="menu-li">
        <router-link to="/about">About</router-link>
      </li>
      <li class="menu-li">
        <router-link to="/projects">Projects</router-link>
      </li>
      <li class="menu-li">
        <router-link to="/contact">Contact</router-link>
      </li>
      <li class="menu-li">
        <router-link to="/thoughts">Thoughts</router-link>
      </li>
      <li class="menu-li" @click="downloadResume">Resume</li>
    </ul>
  </div>
</template>

<script>
import Hamburger from "./Hamburger.vue";
import Logo from "./Logo.vue";
import { ref, watch } from "vue";
import { RouterLink } from "vue-router";

export default {
  setup() {
    let expanded = ref(false);

    const handleMenu = e => {
      if (!expanded.value) {
        expanded.value = true;
      } else {
        const btn = document.getElementById("ham-btn").classList;
        btn.remove("active");
        expanded.value = false;
      }
    };
    watch(expanded, () => {
      if (expanded.value === true) {
        document.getElementById("menu").classList.add("expanded");
      } else {
        document.getElementById("menu").classList.remove("expanded");
      }
    });

    const downloadResume = () => {
      let result = confirm("Would you like to download Resume?");
      if (result) {
        window.location.href = "/David Resume 2_5_24.docx";
      }
    };

    return { handleMenu, expanded, downloadResume };
  },
  components: { Hamburger, Logo },
};
</script>

<style scoped>
.nav-bar {
  width: 100vw;
}

.hrz-menu {
  font-family: "shadows into light";
  letter-spacing: 2px;
}

@media (max-width: 770px) {
  .hrz-menu {
    display: none;
  }
}

@media (max-width: 850px) {
  .hrz-menu ul li {
    margin: 0 1rem;
  }
}

/* @media (max-width: 480px) {
  .expanded {
    
  }
} */

.menu-li {
  border-radius: 1rem;
  font-family: "shadows into light";
  left: 100%;
  opacity: 0;
  height: 0;
  position: relative;
  transition: all 0.8s;
}

li:hover {
  background-color: rgb(0, 121, 148);
  box-shadow: 0.5rem 0.5rem black;
  cursor: pointer;
  text-shadow: 3px 3px black;
  transition: all 1s;
}

.expanded .menu-li {
  align-self: center;
  height: 4rem;
  left: 0;
  margin-bottom: 2rem;
  opacity: 1;
  padding: 1rem;
  text-align: center;
  transition: all 0.8s;
  width: 80%;
}
</style>
