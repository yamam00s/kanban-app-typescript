<template>
  <div>
    <div
      v-if="error"
      class="error"
    >
    <p class="display">予期しないエラーが発生しました。アプリケーション作成者に以下の情報と一緒にお問い合わせください。</p>
    <hr>
    <p class="message">エラーメッセージ</p>
    <p class="info">エラー情報: {{ info }}</p>
    <p class="stack">エラー詳細: {{ error.stack }</p>
    </div>
    <template v-else>
      <slot />>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ErrorBoundary extends Vue {
  error: Error | null = null
  info: string | null = null

  errorCaptured(err: Error, vm: Vue[], info: string): boolean {
    this.error = err
    this.info = info
  }
}
</script>

<style>
.error {
  color: red;
  text-align: left;
}
</style>
