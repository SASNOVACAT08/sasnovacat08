
<template>
  <main class="relative">
    <div class="error">
      <h1 class="white">
        Page non trouvée
      </h1>
      <nuxt-link class="white" to="/">
        Home
      </nuxt-link>
    </div>
    <snow />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Snow from '@/components/Snow.vue'

@Component({
  components: {
    Snow
  }
})
export default class ErrorPage extends Vue {}
</script>

<style>
.error {
  position: absolute;
  z-index: 2;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
