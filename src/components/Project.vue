<template>
    <div class="project-card w-full md:w-8/12 text-slate-300 flex flex-col justify-center overflow-hidden">
        <h2 class="text-center text-2xl mb-3">{{ card.title }}</h2>
        <div class="img-container rounded-lg self-center mb-5">
            <img class="rounded-2xl" :src="card.img" alt="" />
        </div>
        <p class="mb-4 text-sm">{{ card.description }}</p>
        <div class="flex justify-evenly mt-5 text-slate-300">
            <a class="accent text-xl hover:underline" :href="card.links[0]">live Site</a><a
                class="accent text-xl hover:underline" :href="card.links[1]">Code</a>
        </div>
    </div>
</template>

<script>
export default {
    props: ["card"],

    setup() {
        return {};
    },
};
</script>

<style lang="css" scoped>

</style>
