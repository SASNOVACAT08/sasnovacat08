
<template>
  <main>
    <Snow />
    <client-only>
      <swiper
        class="swiper"
        :options="swiperOption"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide>
        <div slot="pagination" class="swiper-pagination" />
      </swiper>
    </client-only>
  </main>
</template>

<script>
import 'swiper/css/swiper.css'

export default {
  name: 'SwiperExampleVertical',
  title: 'Vertical slider',
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        mousewheel: true
      }
    }
  }
}
</script>

<style scoped>
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
  font-size: 64px;
  height: 100%;
}
body {
  margin: 0px;
}
</style>
