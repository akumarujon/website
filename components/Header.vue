<script setup lang="ts">
useHead({
  meta: [
        { name: 'og:description', content: "Konichiwa, I'm akumarujon, Enthusiast Developer from Uzbekistan. This is my personal website. You can find more information about me here." },
        { name: "og:site_name", content: "akumarujon UwU"},
        { name: "og:url", content: "https://akumarujon.uz"},
        { name: "og:image", content: "https://akumarujon.uz/og.png"},
        { name: "viewport", content: "width=device-width, initial-scale=1.0"},
        { name: "twitter:image", content: "https://akumarujon.uz/og.png"},
        { name: "twitter:card", content: "summary_large_image"},
    ],
})
</script>

<template>
    <div class="grey text-white  w-100  p-10 Chomsky">
        <div class="container flex justify-between items-center">
        <NuxtLink to="/">
            <h1 class="text-5xl mx-5">akumarujon's</h1>
        </NuxtLink>
            <ul class="mx-5 text-3xl">
            <li>
                <NuxtLink to="/" class="link">Home</NuxtLink>
                <NuxtLink to="/projects" class="link">Projects</NuxtLink>
                <NuxtLink to="/about" class="link">About</NuxtLink>
                <NuxtLink to="/blog" class="link">Blog</NuxtLink>
            </li>
        </ul>
    </div>
    </div>
</template>

<style scoped>
.link {
   margin: 20px;
   font-size: 20px;
}

* {
    color: white;
}

.bg-dark {
    background-color: black;
}
</style>
