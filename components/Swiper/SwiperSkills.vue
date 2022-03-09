<template>
  <section class="middle">
    <section>
      <img class="img" src="/images/ts.svg" alt="Typescript Logo">
      <img class="img" src="/images/vue.svg" alt="Vue Logo">
    </section>
    <section>
      <img class="img" src="/images/reactjs.svg" alt="ReactJS Logo">
      <img class="img" src="/images/node.svg" alt="NodeJS Logo">
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class SwiperSkills extends Vue {
}
</script>

<style scoped>
.middle {
  margin-left: auto;
  margin-right: auto;
}
.img {
  width: 5rem;
  height: 5rem;
  margin: 2rem
}
</style>
