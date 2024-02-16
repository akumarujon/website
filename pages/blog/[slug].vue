<script setup lang="ts">
import { Marked, Renderer} from "@ts-stack/markdown";

Marked.setOptions({
  renderer: new Renderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})

const route = useRoute()
const { data } = await useFetch('/api/readfile', {
  method: "POST",
  body: {
    slug: route.params.slug
  }
})

const result = Marked.parse(data.value!.data)

</script>

<template>
  <main>
    <Header></Header>
    <div class="w-10/12 mx-auto p-5 text-white container">
      <article class="prose mx-auto text-white">
      <div v-html="result">

      </div>
      </article>
    </div>
  </main>
</template>

<style scoped>

.prose :where(code):not(:where([class~="not-prose"] *)),
.prose :where(a):not(:where([class~="not-prose"] *)),
.prose :where(h1):not(:where([class~="not-prose"] *)),
.prose :where(h2):not(:where([class~="not-prose"] *)),
.prose :where(h3):not(:where([class~="not-prose"] *)),
.prose :where(h4):not(:where([class~="not-prose"] *)),
.prose :where(h5):not(:where([class~="not-prose"] *)),
.prose :where(h6):not(:where([class~="not-prose"] *)),
.prose :where(p):not(:where([class~="not-prose"] *)) {
  color: #e5e5e5 !important;
  font-family: "DM Sans", sans-serif;
  line-height: 1.5;
}

@media screen and (max-width: 800px) {
  .blog-header {
    text-align: center !important;
  }

  .container {
    width: 100% !important;
    margin: 10px;
  }

  .paragraph {
    margin: 5px !important;
  }
}
</style>