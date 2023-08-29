<script setup lang="ts">
</script>

<template>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="og:description" content="Konichiwa, I'm akumarujon, Enthusiast Developer from Uzbekistan. This is my personal website. You can find more information about me here.">
        <meta name="og:title" content="akumarujon UwU">
        <meta name="og:site_name" content="akumarujon - UwU.">
        <meta name="og:url" content="https://akumarujon.uz">
        <meta name="og:image" content="https://i.imgur.com/03SF1t7.jpg">
    </Head>
    <div class="bg-neutral-950 text-white  w-100  p-10 Fette-Haenel">
        <div class="container flex justify-between items-center">
        <NuxtLink to="/">
            <h1 class="text-4xl mx-5">akumarujon's</h1>
        </NuxtLink>
            <ul class="mx-5">
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