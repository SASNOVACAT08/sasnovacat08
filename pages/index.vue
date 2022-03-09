
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
import SwiperVertical from '../components/Swiper/SwiperVertical.vue'
import Snow from '@/components/Snow.vue'

@Component({
  components: {
    Snow,
    SwiperVertical
  }
})
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
