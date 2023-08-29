<template>
  <main>
    <Header></Header>
    <div class="w-10/12 mx-auto p-5 text-white">
      <article class="prose mx-auto text-white">
        <ContentDoc v-slot="{ doc }">
          <h1 class="text-4xl text-center p-3 text-white">{{ doc.title }}</h1>
          <div class="text-xl text-white">
            <ContentRenderer :value="doc" class="text-white"/>
          </div>
        </ContentDoc>
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
.prose :where(p):not(:where([class~="not-prose"] *))
{
  color: #e5e5e5 !important;
  font-family: JetBrains Mono;
}
</style>