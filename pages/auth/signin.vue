<template>
  <div>
    <div class="has-text-centered">
      <div class="has-block-centered">
        <div class="column is-centered is-desktop is-4">
          <div class="box">
            <h2 class="title has-text-black">Регистрация</h2>

            <form autocomplete>
              <div class="field">
                <div class="control">
                  <input
                    class="input is-medium"
                    type="email"
                    placeholder="Почта"
                    autofocus
                  />
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input
                    class="input is-medium"
                    type="password"
                    placeholder="Пароль"
                  />
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input
                    class="input is-medium"
                    type="passwordDouble"
                    placeholder="Повторите пароль"
                  />
                </div>
              </div>
              <button
                class="button is-block has-background-warning is-large is-fullwidth"
              >
                <fas icon="user-lock" />
                <span>Зарегистрироваться</span>
              </button>
              <hr />
              <div class="field is-grouped">
                <div class="control">
                  <nuxt-link :to="{ name: 'auth-login' }">Вход</nuxt-link>
                </div>
              </div>
              <hr />
              <div class="field is-grouped">
                <a class="control" href="/api/auth/google">
                  <div class="button is-medium">
                    <span class="icon is-medium">
                      <fas :icon="['fab', 'google']" size="lg"/>
                    </span>
                  </div>
                </a>

              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: 'signin',
  head() {
    return {
      title: 'Регистрация',
      meta: [
        {
          guest: true
        }
      ]
    }
  },
  middleware: 'guest',
  data() {
    return {}
  },
  methods: {
    login() {},
    signin() {},
  },
}
</script>
