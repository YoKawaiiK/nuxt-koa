<template>
  <div>
    <div class="container">
      <div class="column is-half is-offset-one-quarter">
        <div class="box">

          <div class="field">
            <label class="label">Логин</label>
            <div class="control has-icons-left has-icons-right">
              
              <input v-if="GET_user.login == null"
              class="input" placeholder="Придумайте логин" v-model="login">
              <input v-else
              class="input" :placeholder="GET_user.login" v-model="login">

              <span class="icon is-small is-left">
                <fas icon="user-lock" />
              </span>
            </div>
          </div>
          <div class="field is-grouped is-grouped-centered">
            <div class="control">
              <div @click="setLogin(login)"
              class="button is-primary">
                <span v-if="GET_user.login == null"
                >Создать</span>
                <span v-else>
                Обновить
                </span>
              </div>
            </div>
          </div>
          <hr>
            <div class="field">
              <label class="label">Имя</label>
              <div class="control">
                <input class="input disable" :placeholder="GET_user.given_name" disabled>
              </div>
            </div>

            <div class="field">
              <label class="label">Фамилия</label>
              <div class="control">
                <input class="input" :placeholder="GET_user.family_name" disabled>
              </div>
            </div>

            <div class="field">
              <label class="label">ID</label>
              <div class="control">
                <input class="input" :placeholder="GET_user.user_id" disabled>
              </div>
            </div>

          <div class="field is-grouped is-grouped-centered">
            <div class="control">
              <div class="button is-info">
                <span class="icon">
                  <fas :icon="['fab', 'google']" />
                </span>
                <span>Обновить данные</span>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'profile',
  head() {
    return {
      title: 'Профиль'
    }
  },
  middleware: 'auth',
  data() {
    return {
      login: null
    }
  },
  computed: {
    ...mapGetters('cookies', ['GET_user'])
  },
  methods: {
    ...mapActions('updateUser', ['setLogin'])
  }
}
</script>