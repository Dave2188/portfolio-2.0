<template>
  <div>
    <div class="container min-h-screen min-w-fit text-slate-300 flex justify-center items-center" id="main">
      <div class="about-container w-3/4 flex flex-row flex-wrap justify-center relative bottom-20">
        <div class="img-container mr-14 rounded-3xl w-78 overflow-hidden self-center">
          <img src="../assets/portfoliopic.jpeg" alt="profile picture" />
        </div>
        <article class="flex flex-col w-1/2">
          <p>
            I'm David and have a background in building things, starting with erector sets
            and eventually transitioning to carpentry and house construction. I now focus
            on using technology and design concepts to create intuitive and engaging user
            interfaces.
          </p>

          <p>
            This transition allowed me to apply my experience in building physical
            structures to creating digital ones. I take pride in my work, and the ability
            to continuously build and develop my skills in this field is a rewarding
            experience.
          </p>

          <p>
            Here are some of the technologies and tools I've acquired various levels of
            proficiencies in:
          </p>
          <ul class="flex flex-wrap">
            <li class="accent animate-pulse">HTML/CSS</li>
            <li class="accent animate-pulse">JavaScript</li>
            <li class="accent animate-pulse">Node.js</li>
            <li class="accent animate-pulse">React</li>
            <li class="accent animate-pulse">Vue.js</li>
            <li class="accent animate-pulse">Express</li>
            <li class="accent animate-pulse">Tailwind</li>
            <li class="accent animate-pulse">Vite</li>
            <li class="accent animate-pulse">Mongoose</li>
          </ul>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
p {
  margin: 1rem 0;
  font-size: 1.1rem;
}

li {
  margin: 1rem;
  font-size: 2rem;
}

.img-container {
  box-shadow: 5px 5px rgb(43, 196, 230);
}

@media (max-width: 1200px) {
  p {
    font-size: 1.1rem;
  }

  li {
    font-size: 1.5rem;
    margin: 0.7rem;
  }

  .img-container {
    width: 14rem;
  }
}

@media (max-width: 840px) {
  li {
    margin: 0.5rem;
  }

  .about-container {
    width: 95vw;
  }

  .container {
    width: 100vw;
    overflow: hidden;
  }

  .img-container {
    width: 12rem;
  }
}

@media (max-width: 650px) {
  p {
    font-size: 1rem;
    margin-bottom: 0.4rem;
  }

  article {
    width: 100vw;
    margin-bottom: 10%;
  }

  .img-container {
    margin: 1rem auto;
    width: 8rem;
  }
}

@media (min-width: 2000px) {
  /* #main {
    transform: scale(1.2);
  } */
}
</style>
