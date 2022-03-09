<!-- Please remove this file from your project -->
<template>
  <client-only>
    <Particles
      id="tsparticles"
      url="/particles.json"
    />
  </client-only>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Snow extends Vue {}
</script>
