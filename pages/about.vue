<script setup lang="ts">
useHead({
  title: 'akumarujon - About',
  htmlAttrs: {
    lang: 'en',
  },
})
</script>

<template>
    <div class="bg-neutral-950 text-white height pb-10">
        <Header></Header>
        <div class="container w-4/6 mx-auto">
          <h1 class="text-center Chomsky about-header">About me.</h1>
          <p class="JetBrainsMono m-5 paragraph">I am 17 years old self-taught developer from Uzbekistan. I have started my career since 2020.
            I have experienced several Telegram Bot frameworks, VueJS/NuxtJS, several backend frameworks like 
            Django, Flask, ExpressJS. I use several programming languages as JavaScript, TypeScript, Python3,
            Rust and Shell for scripting purposes. I'm planning to learn more about C/C++ and Zig.
            Doing some design works with Figma. I'm active linux user. I have tried more than 8 linux distributions like
            ArchLinux, EndeavourOS, ArcoLinux, Manjaro, Fedora, Ubuntu, Lubuntu, Linux Mint. I can communicate in English(b2) and Uzbek(native) as well, learning
            Russian nowadays. 
          </p>
        </div>
    </div>
</template>

<style scoped>

.height {
    height: 100vh;
}

@media screen and (max-width: 800px) {
    .about-header {
        text-align: center !important;
    }

    .container{
      width: 100% !important;
      margin: 10px;
    }
    .paragraph {
      margin: 5px !important;
    }
}
</style>
