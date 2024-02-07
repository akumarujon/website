<script setup lang="ts">
useHead({
  title: 'akumarujon - UwU',
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    { rel: "canonical", href: "https://akumarujon.uz" }
  ]
})
</script>

<template>
  <div class="pb-5 height">
    <Header></Header>
    <div class="grey text-white" style="margin: 0 auto; max-width: 1440px;">
      <div class="text flex flex-col justify-center items-center">
        <h1 class="Chomsky text-center mt-6 header" style="font-size: 70px !important;">akumarujon</h1>
        <p class="JetBrainsMono text-center mx-20">Self-taught Developer from Uzbekistan. </p>
      </div>
    </div>
  </div>
</template>
  

<style scoped>
.height {
  height: 100vh;
}

.text {
  height: 80vh;
}

.header {
  font-size: 100px;
}

@media screen and (max-width: 800px) {

  h1 {
    margin: 0 auto;
    text-align: start !important;
    font-size: 50px !important;
  }
}
</style>
