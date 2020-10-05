<template>
  <div>
    
    <p>posts</p>
    {{GET_role_id}}
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
    await store.dispatch('cookies/SET_COOKIES')
    return {
      GET_role_id: store.getters['cookies/GET_role_id']
    }
  },

}
</script>