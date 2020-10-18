export default ({ store, redirect }) => {
  if (store.getters['cookies/GET_user']) {
    redirect(
      {name: 'posts-login-pagination', 
      params: {
        login: store.getters['cookies/GET_user_login'],
        pagination: 1
      }
    })
  }
}