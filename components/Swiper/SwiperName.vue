<template>
  <section>
    <h1 class="white">
      Ruben Barros
    </h1>
    <span class="white italic">Développeur </span>
    <vue-typer
      :text="text"
      :type-delay="500"
      :pre-type-delay="500"
      erase-style="backspace"
      :repeat="0"
      class="italic"
    />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class SwiperName extends Vue {
  public text = [
    'Front',
    'Back',
    'JS/TS',
    'Fullstack'
  ]
}
</script>

<style>
.vue-typer .custom.char.typed {
  color: #fff;
}
.vue-typer .custom.caret.typing {
  background-color: #fff;
}
.italic {
  font-style: italic;
}
</style>
