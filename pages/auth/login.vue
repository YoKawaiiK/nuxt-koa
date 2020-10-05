<template>
  <div>
    <div class="has-text-centered">
      <div class="has-block-centered ">
        <div class="column is-centered is-desktop is-4">
          <div class="box">
            <h2 class="title has-text-black">Вход</h2>
            
            <form autocomplete>
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
              <button class="button is-block has-background-primary is-large is-fullwidth">
                <fas icon="user-lock" />
                <span>Войти</span>
              </button>
              <hr />
              <div class="field is-grouped">
                <div class="control">
                  <nuxt-link :to="{name: 'auth-signin'}">Регистрация</nuxt-link>
                </div>
                <div class="control">
                  <a class="is-danger" href="../">Не помню пароль...</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  head() {
    return {
      title: 'Вход',
      meta: [
        {
          guest: true
        }
      ]
    }
  },
  middleware: 'guest',
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
