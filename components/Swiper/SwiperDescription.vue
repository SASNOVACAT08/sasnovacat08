<template>
  <section class="white m">
    <section class="flex">
      <h3 class="text-right">
        Bonjour !
        <br>
        Je suis développeur web
        <br>
        particulièrement JS & TS
        <br>
        sur Paris.
      </h3>
      <article class="size-sm text-left">
        <p>
          J'aime développer des applications web,
          <br>
          des APIS et des applications mobiles.
        </p>
        <p>
          J'apprécie partager mes connaisances.
          <br>
          Je peux aussi vous conseiller ou travailler
          <br>
          avec vous !
        </p>
      </article>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class SwiperDescription extends Vue {
}
</script>

<style scoped>
.text-right {
  text-align: left;
  margin-right: auto;
  margin-left: auto;
  font-size: 90%;
}
.text-left {
  text-align: left;
  margin-right: auto;
  margin-left: auto;
  font-size: 90%;
}
.size-sm {
  font-size: 0.9rem;
  font-weight: normal;
}
@media screen and (min-width: 810px){
  .text-right {
    text-align: right;
    margin-right: 1rem;
  }
  .text-left {
    text-align: left;
    margin-left: 1rem;
  }
  .flex {
    display: flex;
    align-items: center;
  }
}
</style>
