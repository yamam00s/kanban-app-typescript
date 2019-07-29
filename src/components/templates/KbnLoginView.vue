<template>
  <div class="login-view">
    <h1>kanban App</h1>
    <KbnLoginForm :onlogin="handleLogin"></KbnLoginForm>
  </div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator';
import KbnLoginForm from '@/components/molecules/KbnLoginForm.vue';

@Component({
  components: {
    KbnLoginForm
  }
})
export default class KbnLoginView extends Vue {
  handleLogin(authInfo) {
    return this.$store.dispatch('login', authInfo)
      .then(() => {
        this.$router.push({ path: '/' })
      })
      .catch(err => this.throwReject(err))
  }
  throwReject(err) {
    return Promise.reject(err)
  }
}
</script>

<style scoped>
.login-view {
  width: 320px;
  margin: auto;
}
</style>