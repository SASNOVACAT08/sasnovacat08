<template>
  <aside>
    <p class="absolute white">
      © 2022 Ruben Barros. Tous droits réservés.
    </p>
  </aside>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class RightsReserved extends Vue {
}
</script>

<style scoped>
.absolute {
  position: absolute;
  bottom: 1%;
  left: 2%;
  z-index: 2;
  font-size: 0.6rem
}
@media screen and (min-width: 810px){
  .absolute {
  position: absolute;
  bottom: 1%;
  left: 2%;
  z-index: 2;
  font-size: 0.8rem
}
}
</style>
