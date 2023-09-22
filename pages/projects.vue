<script setup lang="ts">
import json from "../projects.json";

useHead({
  title: 'akumarujon - Projects',
  htmlAttrs: {
    lang: 'en',
  },
})

const projects = ref(json);
</script>

<template>
    <div class="grey text-white height">
        <Header></Header>
        <div class="w-3/5 mx-auto">
        <h1 class="text-5xl text-center Chomsky">My projects</h1>
        <div class="project" v-for="project in projects">
          <NuxtLink :to="`${project.url}`">
            <h1 class="text-3xl">{{ project.name }}</h1>
            <p class="text-xl">{{ project.description }}</p>
            <p class="text-xl">Language: {{ project.language }}</p>
            <p class="text-xl">Version: {{ project.version }}</p>
          </NuxtLink>
          </div>
        </div>
    </div>
</template>

<style scoped>
.project{
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
  border: 2px solid white;
}
</style>