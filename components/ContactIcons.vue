<template>
  <aside class="absolute">
    <a href="https://www.linkedin.com/in/barrosruben/">
      <fa-icon class="icon white" :icon="['fab', 'linkedin-in']" />
    </a>
    <a href="https://github.com/SASNOVACAT08/">
      <fa-icon class="icon white" :icon="['fab', 'github']" />
    </a>
    <div class="tooltip">
      <fa-icon class="icon white hand" :icon="['fas', 'at']" @click="copy('ruben.barr08@gmail.com')" />
    </div>
    <div class="tooltip">
      <fa-icon class="icon white hand" :icon="['fas', 'phone']" @click="copy('+33641873816')" />
    </div>
  </aside>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ContactIcons extends Vue {
  async copy (text: string) {
    await this.$copyText(text)
  }
}
</script>

<style scoped>
.absolute {
  position: absolute;
  bottom: 1%;
  right: 2%;
  z-index: 2;
  display: flex;
}
.icon {
  font-size: 1.5rem;
  margin: 0.3rem;
}
.tooltip:after {
  content: 'Copier';
  display: none;
  position: absolute;
  z-index: 9999;
  bottom: 2.5rem;
  left: 0;
  width: 114px;
  height: 36px;
  color: #fff;
  font-size: 10px;
  line-height: 36px;
  text-align: center;
  background: rgba(0, 0, 0, .72);
  border-radius: 3px;
}
.tooltip:hover:after {
  display: block;
}
.tooltip:active:after, .tooltip:focus:after {
  content: 'Copié !';
}
.hand {
  cursor: pointer;
}
</style>
