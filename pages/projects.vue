<script setup lang="ts">
import json from "../assets/projects.json";

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
    <div class="w-2/5 mx-auto div">
      <h1 class="text-5xl text-center Chomsky">My projects</h1>
      <div class="project" v-for="project in projects">
        <NuxtLink :to="`${project.url}`">
          <h1 class="text-4xl Chomsky">{{ project.name }}</h1>
          <p class="text-xl">{{ project.description }}</p>
          <p class="text-xl">Language: {{ project.language }}</p>
          <p class="text-xl">Version: {{ project.version }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project {
  border: 2px solid white;
  border-radius: 10px;
  padding: 30px;
  margin: 20px;
  transition: 0.8s ease;
}

.project:hover {
  color: black;
  background-color: white;
  transform: scale(1.1);
}


@media screen and (max-width: 800px) {
  .div {
  width: 90%;
  margin: 0 auto;
}

  .project {
    max-width: 400px;
    width: 100%;
    margin: 20px auto;
  }
}
</style>