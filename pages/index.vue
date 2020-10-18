
<template>
  <div>
    <br />
    <div class="column box is-three-fifths is-offset-one-fifth">
      <article>
        <section class="content is-large">
          <h1>В данном сервисе Вы можете:</h1>
          <ol type="1">
            <li>
              <nuxt-link :to="{name: 'auth-signin'}">
                Регистрироваться и входить в профиль используя аккаунт Google;
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{
                name: 'posts-login-pagination',
                params: {
                  login: GET_user_login,
                  pagination: 1
                }
              }">
                Просматривать/создавать/удалять/изменять посты;
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name: 'profile-user_id'}">
                Изменять логин.
              </nuxt-link>
            </li>
          </ol>
        </section>
        <section>
        </section>
      </article>
    </div>
    <br />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head() {
    return {
      title: 'Главная',
    }
  },
  computed: {
    ...mapGetters('cookies', ['GET_user_login'])
  }
}
</script>

<style>
</style>
