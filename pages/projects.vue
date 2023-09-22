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
        <div class="w-2/5 mx-auto">
        <div class="project" v-for="project in projects">
          <NuxtLink :to="`${project.url}`">
            <h1 class="text-2xl">{{ project.name }}</h1>
            <p>{{ project.description }}</p>
            <p>Language: {{ project.language }}</p>
            <p>Version: {{ project.version }}</p>
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