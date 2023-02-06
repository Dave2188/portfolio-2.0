<script setup>
import "../src/styles.css";
import { getCurrentInstance } from "vue";

const { appContext } = getCurrentInstance();
appContext.app.use(mockRouter);
</script>
<template>
  <div class="wrapped">
    <slot />
  </div>
</template>
<style>
@import "../src/index.css";
</style>
