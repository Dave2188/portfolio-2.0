<template>
  <div class="contact-container">
    <!-- <div class="flip-container animate-bounce tap:animate-none">
      <div class="bis-card flipper text-slate-300">
        <div class="front">
          <h1 class="logo">Df</h1>
        </div>
        <div class="back">
          <h2>David Fox</h2>
          <h2 class="accent animate-pulse">Web Developer</h2>
          <a href="mailto:davidfox967@yahoo.com" target="_blank">
            <p><span class="accent">Email: </span>Davidfox967@yahoo.com</p>
          </a>
          <a href="https://github.com/Dave2188" target="_blank">
            <p>
              <span class="accent">GitHub:</span>
              https://github.com/Dave2188
            </p>
          </a>
          <a href="https://linkedin.com/in/davidfox967" target="_blank">
            <p>
              <span class="accent">Linkedin:</span>
              www.linkedin.com/in/davidfox967
            </p>
          </a>
          <a href="https://twitter.com/dave2188" target="_blank">
            <p>
              <span class="accent">Twitter:</span>
              https://twitter.com/dave2188
            </p>
          </a>
        </div>
      </div>
    </div> -->
    <div class="alt-contact">
      <div class="alt-card text-slate-300 text-center">
        <h2>David Fox</h2>
        <h2 class="accent animate-pulse">Web Developer</h2>
        <a href="mailto:davidfox967@yahoo.com" target="_blank">
          <p><span class="accent">Email: </span>Davidfox967@yahoo.com</p>
        </a>
        <a href="https://github.com/Dave2188" target="_blank">
          <p>
            <span class="accent">GitHub:</span>
            https://github.com/Dave2188
          </p>
        </a>
        <a href="https://linkedin.com/in/davidfox967" target="_blank">
          <p>
            <span class="accent">Linkedin:</span>
            www.linkedin.com/in/davidfox967
          </p>
        </a>
        <a href="https://twitter.com/dave2188" target="_blank">
          <p>
            <span class="accent">Twitter:</span>
            https://twitter.com/dave2188
          </p>
        </a>
        <a href="https://twitter.com/dave2188" target="_blank">
          <p>
            <span class="accent">Calendly:</span>
            https://calendly.com/davidfox967
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
p:hover {
  transform: scale(1.2);
  text-shadow: 0px 0px 5px rgb(43, 196, 230);
  transition: 0.5s "text-shadow", scale(1);
}

p {
  font-family: "shadows into light";
  font-size: 2rem;
  margin: 1.5rem auto;
  padding: 0;
  letter-spacing: 0.1rem;
  text-align: center;
  max-width: content;
}

h2 {
  font-size: 3rem;
  margin: 1rem 5rem;
  display: inline-block;
}

.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.alt-contact {
  margin-bottom: 10%;
  width: 80vw;
}

@media (max-width: 480px) {
  .alt-contact {
    margin-bottom: 40%;
    width: 100vw;
  }

  h2 {
    font-size: 2rem;
    margin: 0rem 3rem;
  }

  p {
    font-size: 1.4rem;
    margin: 2rem 0;
  }
}

/* .logo {
  position: relative;
  font-size: 4rem;
  font-family: "shadows into light";
  border: 2px solid rgb(203 213 225);
  border-radius: 100%;
  padding: 1rem 2.5rem;
  width: fit-content;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
} */
/* 
.bis-card {
  background-color: rgb(19, 18, 18);
  border-radius: 20px;
  transition: 1s;
  transform-style: preserve-3d;
  position: relative;
  width: 550px;
  height: 300px;
  top: 25%;
  font-family: "shadows into light";
  font-size: 1.5rem;
} */

/* .flip-container {
  perspective: 600px;
  height: fit-content;
  margin-bottom: 10%;
}

.flip-container:hover .flipper {
  transform: rotateY(180deg);
}

.front,
.back {
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

}

.front {
  z-index: 1;
}

.back {
  transform: rotateY(180deg);
}

@media (max-width: 800px) {

  .biz-card,
  .flip-container {
    transform: scale(0.6);
  }

  .logo {
    margin: 0;
  }
}

@media (max-width: 480px) {
  .flip-container {
    margin-bottom: 50vh;
  }

  .flip-container .flipper {
    transform: rotateY(180deg);
  }


  .flipper,
  .flip-container {
    animation: none;
    position: static;
  }

 */

/* 
}

@media (min-width: 2000px) {

  .bis-card,
  .flip-container {
    transform: scale(1.2);
  }
} */
</style>
