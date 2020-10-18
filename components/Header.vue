<template>
  <div>
    <nav
      class="navbar has-background-theme is-fixed-top is-size-5"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          @click="sidebarOpen = !sidebarOpen"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link class="navbar-item" :to="{ name: 'index' }"
            >Главная</nuxt-link
          >

          <nuxt-link 
          v-show="GET_user_id != null"
          class="navbar-item" :to="{ name: 'profile-user_id' }"
            >Профиль</nuxt-link
          >
          <nuxt-link class="navbar-item" 
          v-show="GET_user_id != null"
          
          :to="{ 
            name: 'posts-login-pagination',
            params: {
              login: GET_user_login,
              pagination: 1
            } 
          }"
            >Мои посты</nuxt-link
          > 
        

        </div>
        <div class="navbar-end">
          <div class="navbar-item">

            <a @click="sidebarOpen = !sidebarOpen" class="navbar-item">
              <fas icon="angle-left" size="2x" />
            </a>

            <b-sidebar
              type="is-theme"
              :fullheight="sidebarFullheight"
              :right="sidebarRight"
              :mobile="sidebarFullwidth"
              v-model="sidebarOpen"
            >
              <a class="mt-3 ml-4" @click="sidebarOpen = !sidebarOpen">
                <fas icon="angle-left" size="3x" rotation="180" />
              </a>

              <aside class="menu mt-3 ml-4 is-size-5">
                <div v-show="GET_user_name">
                  <p class="menu-label">Профиль</p>
                  <ul class="menu-list">
                    <li>
                      <nuxt-link :to="{ name: 'profile-user_id' }">
                        <fas icon="user" />
                        <span> {{ GET_user_name }} </span>
                      </nuxt-link>
                    </li>
                  </ul>
                </div>

                <p class="menu-label">Навигация</p>
                <ul class="menu-list">
                  <li>
                    <nuxt-link :to="{ name: 'index' }">
                      <fas icon="home" />
                      <span>Главная</span>
                    </nuxt-link>
                  </li>
                  <li v-show="GET_user_login">
                    <nuxt-link :to="{ 
                      name: 'posts-login-pagination',
                      params: {
                        login: GET_user_login,
                        pagination: 1
                      }
                    }">
                      <fas icon="archive" />
                      <span>Мои посты</span>
                    </nuxt-link>
                  </li>
                </ul>
                <p class="menu-label">Действия</p>
                <ul class="menu-list">
                  
                  <li v-show="GET_user_id == null">
                    <nuxt-link :to="{ name: 'auth-signin' }">
                      <fas icon="sign-in-alt" />
                      <span>Войти</span>
                    </nuxt-link>
                  </li>
                  <li v-show="GET_user_id != null" @click="deleteCookies()">
                    <a>
                      <fas icon="sign-out-alt" />
                      <span>Выход</span>
                    </a>
                  </li>
                </ul>
              </aside>
            </b-sidebar>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Header',
  data() {
    return {
      sidebarOpen: false,
      sidebarFullwidth: 'fullwidth',
      sidebarFullheight: true,
      sidebarRight: true,
    }
  },
  computed: {
    ...mapGetters('cookies', ['GET_user_name', 'GET_user_id', 'GET_user_login']),
  },
  methods: {
    ...mapActions('cookies', ['deleteCookies']),
  },
}
</script>

<style lang="css">
</style>