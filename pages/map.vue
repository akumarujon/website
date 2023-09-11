<script setup lang="ts">
useHead({
    title: 'akumarujon - Sitemap',
    htmlAttrs: {
        lang: 'en',
    },
})
</script>

<template>
    <div class="grey text-white height">
        <Header></Header>
        <div class="w-1/2 mx-auto text-center">
            <h1 class="text-3xl">Map of my website.</h1>
            <NuxtLink to="/" class="links">Home</NuxtLink>
            <NuxtLink to="/map" class="links">Map</NuxtLink>
            <NuxtLink to="/projects" class="links">Projects</NuxtLink>
            <NuxtLink to="/about" class="links">About</NuxtLink>
            <NuxtLink to="/blog" class="links">Blog</NuxtLink>
            <NuxtLink to="/source" class="links">Source</NuxtLink>
        </div>
    </div>
</template>

<style>

.links {
    font-size: 40px;
    font-family: "Chomsky";
    margin: 20px;
    display: block;
}
</style>