<template>
  <div>
    <section class="hero "
    :class="GET_cookies_user_id == GET_posts_user_id ? 'is-primary' : 'is-theme'"
    >
      <div class="hero-body">
        <div class="container">
          <h1 v-if="GET_cookies_user_id == GET_posts_user_id"
          class="title">Мои посты</h1>
          <h1 class="title" v-else>
            Посты пользователя @{{GET_posts_user_login}}
          </h1>
          <h2 class="subtitle">
            Количество постов: {{GET_posts_total || 0}}
          </h2>
        </div>
      </div>
    </section>
    <section>
      <posts-pagination
      :GET_POSTS="GET_POSTS"
      :GET_POSTS_USER="GET_POSTS_USER"
      :GET_cookies_user_id="GET_cookies_user_id"
      />
    </section>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'posts',
  validate({ params }) {
    const validator = /^\d+$/
    return validator.test(params.pagination)
  },
  head() {
    return {
      title: 'Посты',
    }
  },
  async asyncData({ store, params }) {
    const data = {
      login: params.login,
      pagination: params.pagination,
    }
    await store.dispatch('posts/getPosts', data)
    return {
      GET_POSTS: store.getters['posts/GET_POSTS'],
      GET_POSTS_USER: store.getters['posts/GET_USER'],
      GET_cookies_user_id: store.getters['cookies/GET_user_id'],
      GET_posts_user_login: store.getters['posts/GET_user_login'],
      GET_posts_user_id: store.getters['posts/GET_user_id'],
    }
  },
  methods: {
    ...mapActions('posts', ['callMessageUserStatus'])
  },
  computed: {
    ...mapGetters('posts', ['GET_posts_total'])
  },
  mounted() {
    // Показать сообщение на случай, если что-то не так
    this.callMessageUserStatus()

  }
}
</script>