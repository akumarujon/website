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
        <h1 class="mb-5 map-header text-center">Map for my website.</h1>
        <div class="w-1/4 mx-auto Chomsky justify-center flex flex-wrap lg:flex-nowrap text-center div">
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
    font-size: 30px !important;
    width: 450px;
}

.link {
    border: 2px solid white;
    border-radius: 10px;
    padding: 15px;
    margin: 20px;
    transition: 0.8s ease;
}

.link:hover {
    color: black;
    background-color: white;
    transform: scale(1.1);
}


@media screen and (max-width: 800px) {
    .div {
        width: 90%;
        margin: 0 auto;
    }

    .map-header {
        text-align: center !important;
    }

    .link {
        max-width: 400px;
        width: 100%;
        margin: 20px auto;
    }
}
</style>