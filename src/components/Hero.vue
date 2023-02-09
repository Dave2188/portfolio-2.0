<template>
  <div class="page-container flex justify-center items-center">
    <div class="hero min-h-full w-full flex justify-center items-center relative">
      <div class="container flex flex-wrap w-2/3 text-slate-300 tracking-wide top-1">
        <article class="h-max">
          <p class="accent">Hi, my name is</p>
          <h1>David Fox</h1>
          <p>
            I`m a <span class="accent animate-pulse">Full-Stack Web Developer</span> who
            is dedicated to creating responsive, interactive, and engaging web
            experiences.
          </p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.container {
  line-height: 2.5rem;
}

p {
  font-size: 2rem;
}

.page-container {
  margin-bottom: 10%;
}

h1 {
  position: relative;
  line-height: 1.1;
  margin: 4rem 0;
  left: -10px;
}

@media (max-width: 900px) {
  h1 {
    font-size: 4rem;
  }

  article p {
    font-size: 1.5rem;
  }
}

@media (max-width: 670px) {
  h1 {
    font-size: 3.5rem;
    margin: 2rem 0;
  }

  .page-container {
    margin-bottom: 35%;
  }
}
</style>
