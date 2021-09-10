<template>
  <Layout>
    <div class="flex h-screen justify-center items-center bg-green-50">
      <div class="m-auto">
        <h1 class="text-4xl text-center pb-4">Markus Hunsalz</h1>
        <p class="text-2xl text-center pb-4">Re-think common design patterns</p>
        <Social />
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
