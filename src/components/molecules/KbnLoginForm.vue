<template>
  <form novalidate>
    <div class="form-item">
      <label for="email">メールアドレス</label>
      <input
        id="email"
        v-model="email"
        type="text"
        autocomplete="off"
        placeholder="例: kanban@domin.com"
        @focus="resetError"
        >
        <ul>
          <li v-if="!validation.email.format">メールアドレスの形式が不正です</li>
          <li v-if="!validation.email.required">メールアドレスが入力されていません</li>
        </ul>
    </div>

    <div class="form-item">
      <label for="password">パスワード</label>
      <input
        id="password"
        v-model="password"
        type="password"
        autocomplete="off"
        placeholder="例: XXXXXXXX"
        @focus="resetError"
      >
      <ul>
        <li v-if="!validation.password.required">パスワードが入力されていません</li>
      </ul>
    </div>

    <div class="form-actions">
      <KbnButton
        :disabled="disableLoginAction"
        @click="handleClick"
      >
        ログイン
      </KbnButton>
      <p
        v-if="progress"
        class="login-progress"
      >
        ログイン中...
      </p>
      <p
        v-if="error"
        class="login-error"
      >
        {{ error }}
      </p>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// KbnButtonをインポート
import KbnButton from '@/components/atoms/KbnButton.vue';

// メールアドレスのフォーマットをチェックする正規表現
const REGEX_EMAIL: RegExp = /^(([^<>[\]\\.,;:/s@"]+(\.[^<>()[\]\\.,:;\s@"]+)*)| (".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const required = (val: string) => {
  return !!val.trim();
};

@Component({
  components: {
    KbnButton
  }
})
export default class KbnLoginForm extends Vue {
  @Prop({})
    // TODO interface書く 書き方考える
  onlogin!: any

  email: string = ''
  password: string = ''
  progress: boolean = false
  error: string = ''

  // TODO interface書く
  get validation(): any { // emailとpasswordのバリデーション
    return {
      email: {
        required: required(this.email),
        format: REGEX_EMAIL.test(this.email)
      },
      password: {
        required: required(this.password)
      }
    }
  }

  // もっといい書き方ありそう
  get valid(): boolean {
    const validation = this.validation // 先に定義したvalidationを用いて可否を返す
    const fields: string[] = Object.keys(validation)
    let valid: boolean = true
    for (let i: number = 0; i< fields.length; i++) {
      const field: string = fields[i]
      valid = Object.keys(validation[field]).every((key: string) => validation[field][key])
      if (!valid) break
    }
    return valid
  }

  get disableLoginAction(): boolean { // validを使ってログイン処理の可否、progressは後述
    　return !this.valid || this.progress
  }

  resetError(): string {
    return this.error = ''
  }

  handleClick(ev: Event) {
    if (this.disableLoginAction) return // 不備があればログイン処理が実行されないようガード
    this.progress = true
    this.error = ''

    this.$nextTick((): void => {
      this.onlogin({ email: this.email, password: this.password })
        // TODO 本来の型
        .catch((err: any) => {
          this.error = err.message
        })
        .then(() => {
          this.progress = false
        })
    })
  }
}
</script>

<style scoped>
form {
  display: block;
  margin: 0 auto;
  text-align: left;
}

label {
  display: block;
}

input {
  width: 100%;
  padding: .5em;
  font: inherit;
}

ul {
  list-style-type: node;
  padding: 0;
  margin: .25em 0;
}

ul il {
  font-size: .5em;
}

.validation-errors {
  height: 32px;
}

.forn-actions p {
  font-size: .5em
}




</style>
