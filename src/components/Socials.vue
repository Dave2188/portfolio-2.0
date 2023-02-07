<template>
    <div class="socials absolute bottom-0 left-3 flex flex-col gap-3">
        <a href="https://linkedin.com/in/davidfox967" target="_blank">
            <v-icon name="ri-linkedin-box-line" scale="2" color="rgb(203 213 225)" hover="true" animation="wrench"
                speed="slow" />
        </a>
        <a href="https://twitter.com/dave2188" target="_blank">
            <v-icon name="ri-twitter-line" scale="2" color="rgb(203 213 225)" hover="true" animation="wrench"
                speed="slow" />
        </a>
        <a href="https://github.com/Dave2188" target="_blank">
            <v-icon name="ri-github-line" scale="2" color="rgb(203 213 225)" hover="true" animation="wrench"
                speed="slow" />
        </a>
        <div class="line rotate-90 text-slate-300"></div>
    </div>
    <div class="email-container absolute bottom-0 right-0 flex flex-col gap-3">
        <span class="rotate-90 tracking-wider mb-10 relative bottom-4 text-lg text-slate-300"><a
                href="mailto:davidfox967@yahoo.com" target="_blank">davidfox967@yahoo.com</a></span>
        <div class="email-line rotate-90 text-slate-300"></div>
    </div>
</template>

<script>
import { RiLinkedinBoxLine, RiTwitterLine, RiGithubLine } from "oh-vue-icons/icons";
export default {
    components: { RiLinkedinBoxLine, RiTwitterLine, RiGithubLine },
};
</script>

<style lang="css" scoped>
.line {
    position: relative;
    border-bottom: 2px solid;
    left: -3.8rem;
    width: 10rem;
    margin: 6rem 0;
}

.email-line {
    position: relative;
    border-bottom: 2px solid;
    right: -4.9rem;
    bottom: -1rem;
    width: 6rem;
    padding-top: 2rem;
    margin: 4rem 0;
}

.email-container {
    right: -4.8rem;
}

@media (max-width: 480px) {

    .socials,
    .email-container {
        visibility: hidden;
    }
}
</style>
