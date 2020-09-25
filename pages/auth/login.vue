<template>
  <div>
    <div class="container has-text-centered" autocomplete>
      <div class="column is-4 is-offset-4">
        <br />
        <br />
        <br />
        <h3 class="title has-text-black">Вход</h3>
        <hr class="login-hr" />
        <p class="subtitle has-text-black">Ваш логин и пароль</p>
        <div class="box">
          <form>
            <div class="field">
              <div class="control">
                <input class="input is-medium" type="email" placeholder="Почта" autofocus />
              </div>
            </div>

            <div class="field">
              <div class="control">
                <input class="input is-medium" type="password" placeholder="Пароль" />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <b-checkbox v-model="remember">Запомнить меня</b-checkbox>
              </div>
            </div>
            <button class="button is-block is-primary is-large is-fullwidth">
              <fas icon="user-lock" />
              <span>Войти</span>
            </button>
            <hr />
            <div class="field is-grouped">
              <div class="control">
                <nuxt-link :to="{name: 'auth-signin'}">
                  Регистрация
                </nuxt-link>
              </div>
              <div class="control">
                <a class="is-dnger" href="../">Не помню пароль...</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  head() {
    return {
      title: 'Вход',
    }
  },
  data() {
    return {
      remember: false,
      formStatus: 'login',
    }
  },
  methods: {
    login() {},
    signin() {},
  },
}
</script>