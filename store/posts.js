
export default {
  state: () => ({
    posts: null,
    postsTotal: null,
    user: null,
    userStatus: 'empty'
  }),
  getters: {
    GET_POSTS (state) {
      return state.posts
    },
    GET_posts_total(state) {
      return state.postsTotal
    },
    GET_user_login (state) {
      if (state.user) {
        return state.user.login
      }
    },
    GET_user_id (state) {
      if (state.user) {
        return state.user.user_id
      }
    },
    GET_USER (state) {
      return state.user
    },
    // Для отображения сообщений на странице постов при загрузке на клиенте
    GET_USER_STATUS (state) {
      return state.userStatus
    }
  },
  mutations: {
    // Сохранение постов в state
    SET_POSTS (state, object) {
      state.posts = object.posts;
      state.postsTotal = object.postsTotal
    },
    // Сохранение 1 поста
    
    SET_POST (state, object) {
      // Если есть object.index, значит пост обновляется
      if (typeof object.index == 'number') {
        state.posts[object.index].text = object.post.text
      }
      else {
        if (state.posts == null) {
          state.posts = []
        }
        // Если больше 10 постов, то удалить нижний
        if (state.posts.length > 9) {
          state.posts.pop()
        }
        // Если пост новый, то загрузить в начало
        if (object.newPost) {
          state.posts.unshift(object.post)
        } 
        // Если пост загружен после удаления какого-то поста
        else {
          state.posts.push(object.post)
        }
        state.postsTotal++
      }
    },
    // Пользователь
    SET_USER (state, object) {
      state.user = object
    },
    SET_USER_STATUS (state, string) {
      state.userStatus = string
    },
    // Удаление всех постов
    DELETE_POSTS (state) {
      state.posts = null
      state.postsTotal = null
      state.user = null
      state.userStatus = 'empty'
    },
    // Удаление 1 поста
    DELETE_POST (state, post_id) {
      const deleteIndex = state.posts.findIndex((post) => post.post_id == post_id)

      state.posts.splice(deleteIndex, 1)
      state.postsTotal--
    },
  },
  actions: {
    // Используется для показа уведомления при загрузке страницы на стороне клиента 
    async callMessageUserStatus({dispatch, getters}) {
      if (getters.GET_USER_STATUS == 'empty') {
        dispatch('messages/getPostsEmpty', null, {root: true})
      } 
      else if (getters.GET_USER_STATUS == 'userNotFound') {
        dispatch('messages/getPostsUserNotFound', null, {root: true})
      }
      else if (getters.GET_USER_STATUS == 'error') {
        dispatch('messages/error', null, {root: true})
      }
    },
    // Получение постов
    async getPosts ({commit}, data) {
      await commit('DELETE_POSTS')
      const response = await this.$axios.$get(`/api/posts/posts/${data.login}/${data.pagination}`)

      if (response.posts) {
        commit('SET_POSTS', {posts: response.posts, postsTotal: response.postsTotal})
        commit('SET_USER', response.user)
        commit('SET_USER_STATUS', 'posts')
      }
      else if (response.empty) {
        commit('SET_USER', response.user)
        commit('SET_USER_STATUS', 'empty')
      } 
      else if (response.userNotFound) {
        commit('SET_USER_STATUS', 'userNotFound')
      }
      else {
        commit('SET_USER_STATUS', 'error')
      }
    },
    // Удаление 1 поста:
    // 1 Удалить на сервере
    // 2 Получить удовлитворительный ответ
    // 3 Удалить из state
    // 4 Загрузить 1 пост в начало списка постов

    // Получение одного поста 
    async getPost ({commit, getters, dispatch}) {
      const login = getters.GET_user_login
      const last_post_id = getters.GET_POSTS[getters.GET_POSTS.length - 1].post_id
      const response = await this.$axios.$get(`/api/posts/post/${login}/${last_post_id}`)
      if (response.post) {
        const object = {
          post: response.post,
        }
        commit('SET_POST', object)
      }
      else {
        dispatch('messages/error', null, {root: true})
      }
    },
    async deletePost ({dispatch, commit, getters}, post) {

      const response = await this.$axios.$post('/api/posts/post/delete', post)
      if (response.delete) {
        await commit('DELETE_POST', post.post_id)
        await dispatch('messages/deletePost', null, {root: true})

        if (getters.GET_posts_total > 9) {
          await dispatch('getPost')
        }
      } 
      else {
        await dispatch('messages/error', null, {root: true})
      }
    },

    async updatePost({dispatch, commit, getters}, updatePost) {
      const response = await this.$axios.$post('/api/posts/post/update', {post: updatePost})
      if (response.update) {
        const index = await getters.GET_POSTS.findIndex((post) => post.post_id == updatePost.post_id)
        commit('SET_POST', {post: updatePost, index: index})
      } 
      else {
        dispatch('messages/error', null, {root: true})
      }
    },
    async insertPost({dispatch, commit}, newPost) {
      const response = await this.$axios.$post('/api/posts/post/insert', {post: newPost})

      if (response.post) {
        const object = {
          post: response.post,
          newPost: true
        }
        commit('SET_POST', object)
      } 
      else {
        dispatch('messages/error', null, {root: true})
      }
    },
    // При нажатии на кнопке изменения поста
    async findPost({getters}, post_id) {
      return new Promise((resolve) => {
        getters.GET_POSTS.find((post) => {
          if (post.post_id == post_id ) {
            resolve(post.text)
          }
        }) 
      })
    }
  }
}