<script setup lang="ts">
import  "../assets/css/texts.css"

useHead({
    meta: [
        { name: "description", content: "Konichiwa, I'm akumarujon, self-taught Developer from Uzbekistan. This is my personal website. You can find more information about me here." },
        { name: "og:description", content: "Konichiwa, I'm akumarujon, self-taught Developer from Uzbekistan. This is my personal website. You can find more information about me here." },
        { name: "og:site_name", content: "akumarujon UwU" },
        { name: "og:url", content: "https://akumarujon.uz" },
        { name: "og:image", content: "https://akumarujon.uz/og.png" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "twitter:image", content: "https://akumarujon.uz/og.png" },
        { name: "twitter:card", content: "summary_large_image" },
    ],
})
</script>

<template>
    <div class="text-center grey text-white w-100 Chomsky mx-auto">
        <div class="container flex mx-auto justify-between items-center">
            <NuxtLink to="/">
                <h1 class="mx-5">
                    <NuxtImg src="/bucket.png" alt="Home" width="100"></NuxtImg>
                </h1>
            </NuxtLink>
            <ul class="mx-5">
                <li>
                    <NuxtLink to="/map" class="link">
                        <NuxtImg src="map.png" width="60" alt="Map"></NuxtImg>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.link {
    margin: 20px;
}

* {
    color: white;
}

.bg-dark {
    background-color: black;
}
</style>
