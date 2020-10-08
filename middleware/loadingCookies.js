export default ({store, $cookies}) => {
  if ($cookies.get('user_id')) {
    store.commit('cookies/SET_COOKIES')
  }
}