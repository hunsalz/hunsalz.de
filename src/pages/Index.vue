<template>
  <Layout>
    <div class="flex h-screen justify-center items-center bg-gray-400">
      <div class="m-auto">
        <h1 class="text-8xl text-center pb-4 text-white line-through underline-12 underline-gray-400">Markus Hunsalz</h1>
        <Social />
        <p class="text-3xl text-center pb-4 text-white">Re-think common design patterns</p>
      </div>
    </div>
  </Layout>
</template>

<script>
import Social from "~/components/Social.vue"
export default {
  metaInfo: {
    title: "Portfolio - Markus Hunsalz",
    meta: [
      {
        name: "description",
        content: "Portfolio page",
      },
    ],
  },
  components: {
    Social,
  },
}
</script>
