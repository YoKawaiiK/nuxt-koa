<template>
  <div>
    <nav
      class="navbar has-background-theme is-fixed-top is-size-5"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
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
          <nuxt-link class="navbar-item" :to="{name: 'index'}">Главная</nuxt-link>
          <nuxt-link class="navbar-item" :to="{name: 'profile-user_id'}">Профиль</nuxt-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <!-- <b-dropdown 
            position="is-bottom-left" 
            append-to-body 
            aria-role="menu">
              <a class="navbar-item" slot="trigger" role="button">
                <fas icon="bars" size="2x" />
              </a>

              <b-dropdown-item class="is-size-5"
              custom aria-role="menuitem">
                Logged as
                <b>Rafael Beraldo</b>
              </b-dropdown-item>

              <hr class="dropdown-divider" />

              <b-dropdown-item 
              has-link value="home" aria-role="menuitem">
                <nuxt-link :to="{name: 'index'}">
                  <fas icon="home" />
                  <span class="is-size-5">Главная</span>
                </nuxt-link>
              </b-dropdown-item>

              <hr class="dropdown-divider" aria-role="menuitem" />

              <b-dropdown-item 
              has-link value="logout" aria-role="menuitem">
                <nuxt-link :to="{name: 'auth-login'}">
                  <fas icon="user-lock" />
                  <span class="is-size-5">Вход</span>
                </nuxt-link>
              </b-dropdown-item>

              <b-dropdown-item 
              has-link value="logout" aria-role="menuitem">
                <nuxt-link :to="{name: 'auth-signin'}">
                  <fas icon="sign-in-alt" />
                  <span class="is-size-5">Регистрация</span>
                </nuxt-link>
              </b-dropdown-item>

              <b-dropdown-item 
              value="logout" aria-role="menuitem">
                <fas icon="sign-out-alt" />
                <span class="is-size-5">Выход</span>
              </b-dropdown-item>
            </b-dropdown>-->

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
              <a class="mt-3 ml-4"
                @click="sidebarOpen = !sidebarOpen"
              >
                <fas icon="angle-left" size="3x" rotation="180"/>
              </a>
              
              <aside class="menu mt-3 ml-4 is-size-5">
                <div v-show="GET_user_name">
                <p class="menu-label">Аккаунт</p>
                <ul class="menu-list">
                  <li>
                    <nuxt-link :to="{name: 'profile-user_id'}">
                      <fas icon="user" />
                      <span> {{GET_user_name}} </span>
                    </nuxt-link>
                  </li>
                </ul>
                </div>
                

                <p class="menu-label">Навигация</p>
                <ul class="menu-list">
                  <li>
                    <nuxt-link :to="{name: 'index'}">
                      <fas icon="home" />
                      <span>Главная</span>
                    </nuxt-link>
                  </li>
                </ul>
                <p class="menu-label">Действия</p>
                <ul class="menu-list">
                  <li v-show="GET_user == null">
                    <nuxt-link :to="{name: 'auth-login'}">
                      <fas icon="user-lock" />
                      <span>Вход</span>
                    </nuxt-link>
                  </li>
                  <li v-show="GET_user == null">
                    <nuxt-link :to="{name: 'auth-signin'}">
                      <fas icon="sign-in-alt" />
                      <span>Регистрация</span>
                    </nuxt-link>
                  </li>
                  <li 
                  v-show="GET_user != null"
                  @click="deleteCookies()"
                  >
                    <a >
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
    ...mapGetters('cookies', ['GET_user', 'GET_user_name'])
  },
  methods: {
    ...mapActions('cookies', ['deleteCookies']),
  }
}
</script>

<style lang="css">
</style>