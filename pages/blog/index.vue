<script setup lang="ts">
useHead({
  title: 'akumarujon - Blog',
})
</script>

<template>
    <Head>
        <meta name="og:description" content="This is the place where akumaru will share his experience.">
    </Head>
    <div class="grey text-white">
    <Header></Header>
    <div class="m-10">
        <h1 class="text-5xl text-center Chomsky">Blogs</h1>
    </div>

    <div class="mx-auto  p-5 text-white w-4/6">
        <ContentList path="/blog" v-slot="{ list }">
            <div v-for="blog in list" :key="blog._path" class="my-5 p-5 border grey rounded-2xl">
            <NuxtLink :to="`/blog/${blog.slug}`">
                <h1 class="text-3xl">{{ blog.title }}</h1>
                <br>
                <p class="text-xl">{{ blog.description }}</p>
            </NuxtLink>
            </div>
        
        </ContentList>
    </div>
</div>
    
</template>

<style>
body {
    background-color: #0a0a0a;
}
</style>