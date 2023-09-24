<script setup lang="ts">
useHead({
    title: 'akumarujon - Map',
    htmlAttrs: {
        lang: 'en',
    },
})
</script>

<template>
    <div class="grey text-white height">
        <Header></Header>
        <div class="w-4/6 mx-auto Chomsky justify-center text-center">
            <h1 class="mb-5">Map for my website.</h1>
            <NuxtLink to="/" class="link">Home</NuxtLink>
            <NuxtLink to="/projects" class="link">Projects</NuxtLink>
            <NuxtLink to="/about" class="link">About</NuxtLink>
            <NuxtLink to="/blog" class="link">Blog</NuxtLink>
            <NuxtLink to="/source" class="link">Source</NuxtLink>
            <NuxtLink to="/contact" class="link">Contact</NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.link {
    display: block;
    font-size: 45px !important;
}
</style>