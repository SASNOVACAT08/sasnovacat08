<!-- Please remove this file from your project -->
<template>
  <client-only>
    <swiper
      class="swiper"
      :options="swiperOption"
    >
      <swiper-slide>
        <swiper-name />
      </swiper-slide>
      <swiper-slide>
        <swiper-description />
      </swiper-slide>
      <swiper-slide>
        <swiper-skills />
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination" />
    </swiper>
  </client-only>
</template>

<script lang="ts">
import 'swiper/css/swiper.css'
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class SwiperVertical extends Vue {
  public swiperOption = {
    direction: 'vertical',
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    mousewheel: true
  }
}
</script>

<style>
.swiper {
  height: 100vh;
  width: 100%;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 32px;
  height: 100%;
}
.swiper-pagination-bullet {
  background-color: #fff;
}
</style>
