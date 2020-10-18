export default {
  actions: {
    async setLogin({dispatch, commit}, login) {
      // Если больше 25 символов
      if (login.lenght > 25) {
        dispatch('messages/setLoginLenght', null, {root: true})
        return false;
      }
      // задать логин
      const response = await this.$axios.$post('/api/auth/login/set', {login: login})
      if (!response.setLogin) {
        dispatch('messages/error', null, {root: true})
      } 
      else {

        await commit('cookies/SET_login', login, {root: true})
        await dispatch('messages/setLoginTrue', null, {root: true})
        await commit('cookies/SET_COOKIES', null, {root: true})
      }
    }
  }
}