<template>
  <button
    :class="classes"
    :disabled="disabled"
    type="button"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})

export default class KbnButton extends Vue {
  @Prop({ default: 'button' })
  type!: string

  @Prop({ default: false })
  disabled!: boolean

  handleClick(ev: unknown) {
    this.$emit('click', ev)
  }

  get classes(): string[] {
    const cls = this.type === 'text' ? `-${this.type}` : ''
    return [`kbn-button${cls}`]
  }
};
</script>

<style scoped>
.kbn-button {
  padding: .6em 1.3em;
}
.kbn-button-text {
  border: none;
  padding-left: 0;
  padding-right: 0;
}
</style>
