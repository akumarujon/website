<script setup lang="ts">
import json from "../assets/social.json"

useHead({
    title: 'akumarujon - Contact.',
    htmlAttrs: {
        lang: 'en',
    },
    link: [
        { rel: "canonical", href: "https://akumarujon.uz" }
    ]
})

const socials = ref(json);
</script>

<template>
    <Header></Header>
    <div class="grey text-white height" style="margin: 0 auto; max-width: 1440px;">
        <div class="text flex flex-col div">
            <h1 class="text-center text-5xl Chomsky mb-5 heading">Reach me on social media.</h1>
            <div v-for="social in socials" class="items-center flex justify-center">
                <NuxtLink :to="`${social.link}`">
                    <h1 class="social text-center text-5xl w-80 Chomsky">{{ social.social }}</h1>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
  

<style>
.height {
    height: 100%;
}

.text {
    height: 80vh;
}

.social {
    border: 2px solid white;
    border-radius: 10px;
    padding: 30px;
    margin: 20px;
    transition: 0.8s ease;
}

.social:hover {
    color: black;
    background-color: white;
    transform: scale(1.1);
}

@media screen and (max-width: 800px) {
    .heading {
        font-size: 2.2rem;
    }

    .div {
        width: 90%;
        margin: 0 auto;
    }

    .social {
        max-width: 400px;
        width: 250px;
        margin: 20px auto;
    }
}
</style>
