<template>
  <div>
    
    <p>posts</p>
    {{GET_user}}
  </div>
</template>
<script>
export default {
  name: 'posts',
  validate({params}) {
    return /^\d+$/.test(params.user_id)
  },
  head() {
    return {
      title: 'Посты'
    }
  },
  async asyncData({store}) {

    // Получить данные о пользователе через jwt
    // установить cookies 
    await store.commit('cookies/SET_COOKIES')
    return {
      GET_user: store.getters['cookies/GET_user']
    }
  },

}
</script>