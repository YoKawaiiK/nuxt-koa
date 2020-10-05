export default ({ store, redirect }) => {
  if (store.getters['cookies/GET_role_id']) {
    redirect(
      {name: 'posts-user_id', 
      params: {
        'user_id': store.getters['cookies/GET_user_id']
      }
    })
  }
}