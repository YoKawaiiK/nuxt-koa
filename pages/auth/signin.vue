<template>
  <div>
    <div class="has-text-centered">
      <div class="has-block-centered">
        <div class="column is-centered is-desktop is-4">
          <div class="box">
            <h2 class="title has-text-black">Войти через соцсеть</h2>
            <form autocomplete>

              <hr />
              <div class="field is-grouped">
                <a class="control" href="/api/auth/google">
                  <div class="button is-medium has-background-primary">
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
