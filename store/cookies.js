export default {
  state: () => ({
    user: null
  }),
  getters: {
    GET_user(state) {
      return state.user;
    },
    GET_user_name(state) {
      if (state.user) {
        return `${state.user.given_name} ${state.user.family_name}`
      }
    }
  },
  mutations: {
    SET_COOKIES(state) {
      const user = this.$cookies.getAll()
      // На стороне сервера jwt доступен, поэтому исключить его
      delete user.jwt;

      // user как объект
      state.user = {}
      for (const key in user) {
        state.user[key] = user[key]
      }

    },
    SET_login(state, newLogin) {

      this.$cookies.set('login', newLogin, {
        expires: new Date(state.user.expiresCookie),
        path: '/'
      })
      state.login = newLogin
    },
    DELETE_COOKIES(state) {
      state.user = null
    }
  },
  actions: {
    async deleteCookies({dispatch, commit}) {
      const response = await this.$axios.$get('/api/auth/cookies/delete')
      if (response.deleted) {
        await commit('DELETE_COOKIES')
        await dispatch('messages/deleteCookies', null, {root: true})
        await this.$router.push({name: 'auth-login'});
      }
      else {
        await dispatch('messages/error', null, {root: true})
      }
    }
  }
}