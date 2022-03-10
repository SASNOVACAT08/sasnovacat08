
<template>
  <main class="relative">
    <snow />
    <swiper-vertical />
    <rights-reserved />
    <contact-icons />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class IndexPage extends Vue {}
</script>

<style>
*{
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
body {
  margin: 0px
}
.relative {
  position: relative;
}
.white {
  color: #fff;
}
</style>
