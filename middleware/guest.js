export default ({ store, redirect }) => {
  if (store.getters['cookies/GET_user']) {
    redirect(
      {name: 'posts-user_id', 
      params: {
        'user_id': store.getters['cookies/GET_user'].user_id
      }
    })
  }
}