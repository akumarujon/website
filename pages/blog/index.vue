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
        <div class="">
            <h1 class="text-center Chomsky blog-header">Blogs</h1>
        </div>

        <div class="mx-auto  p-5 text-white w-2/5 div">
            <ContentList path="/blog" v-slot="{ list }">
                <div v-for="blog in list" :key="blog._path" class="my-5 p-5 border grey rounded-2xl blog">
                    <NuxtLink :to="`/blog/${blog.slug}`">
                        <h1 class="">{{ blog.title }}</h1>
                        <br>
                        <p class="">{{ blog.description }}</p>
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


.blog {
    border: 2px solid white;
    border-radius: 10px;
    padding: 30px;
    margin: 20px;
    transition: 0.8s ease;
}

.blog:hover {
    color: black;
    background-color: white;
    transform: scale(1.1);
}


@media screen and (max-width: 800px) {
    .div {
        width: 90%;
        margin: 0 auto;
    }

    .blog-header {
        text-align: center !important;
    }

    .blog {
        max-width: 400px;
        width: 100%;
        margin: 20px auto;
    }
}
</style>