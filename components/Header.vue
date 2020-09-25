<template>
  <div>
    <nav class="navbar is-size-5" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>

        <a
          role="button"
          class="navbar-burger burger"
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
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <b-dropdown 
            position="is-bottom-left" append-to-body aria-role="menu">
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

            </b-dropdown>
            
          </div>
        </div>
      </div>
    </nav> 
  </div>
</template>
<script>
export default {
  name: 'Header',

}
</script>

<style>
</style>