<template>
  <div>
    <nav>
      <div @click="hamClick" id="ham-btn" class="hamburger-menu">
        <div class="ham-bar bar-top"></div>
        <div class="ham-bar bar-mid"></div>
        <div class="ham-bar bar-bottom"></div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  setup(props, context) {
    const hamClick = (e) => {
      const btn = document.getElementById("ham-btn").classList;
      if (!btn.contains("active")) {
        btn.add("active");
      } else {
        btn.remove("active");
      }
      context.emit("expand");
    };
    return { hamClick };
  },
};
</script>

<style css scoped>
nav {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

@media (max-width: 750px) {
  nav {
    transform: scale(-0.8);
  }
}

.hamburger-menu {
  height: 50px;
  width: 50px;
  position: relative;
  cursor: pointer;
  padding: 1rem;
}

.ham-bar {
  width: 70%;
  height: 4px;
  background-color: rgb(203 213 225);
  border-radius: 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.6s, opacity 0.8s, top 0.6s;
}

.bar-top {
  top: 25%;
}

.hamburger-menu.active .bar-top {
  transform: translate(-50%, -50%) rotate(-315deg);
  top: 50%;
}

.hamburger-menu.active .bar-mid {
  opacity: 0;
}

.bar-bottom {
  top: 75%;
}

.hamburger-menu.active .bar-bottom {
  transform: translate(-50%, -50%) rotate(-225deg);
  top: 50%;
}
</style>
