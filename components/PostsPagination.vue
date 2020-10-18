<template>
  <div>
    <div v-if="GET_posts_total == null">
      <div class="column is-mobile is-three-fifths is-offset-one-fifth">
        <h2 class="title is-2 has-text-centered">Здесь ничего нет...</h2>
      </div>
    </div>
    <div v-else>
      <div class="columns is-mobile">
        <div class="column is-three-fifths is-offset-one-fifth">
          <div v-for="(POST, i) in GET_POSTS" :key="`${i}-${POST.post_id}`">
            <br />
            <div class="box">
              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p>
                      #{{ POST.post_id }}
                      <strong>{{ GET_POSTS_USER.name }}</strong>
                      <small>@{{ GET_POSTS_USER.login }}</small>
                      <small>{{ POST.date }}</small>
                      <br />
                      {{ POST.text }}
                    </p>
                  </div>
                  <nav
                    v-if="GET_cookies_user_id == GET_POSTS_USER.user_id"
                    class="level is-mobile"
                  >
                    <div class="level-left">
                      <a
                        @click="callModalWindow(POST.post_id)"
                        class="level-item link"
                        aria-label="edit"
                      >
                        <span class="icon">
                          <fas icon="edit" />
                        </span>
                      </a>
                      <a
                        @click="deletePost({ post_id: POST.post_id })"
                        class="level-item"
                        aria-label="delete"
                      >
                        <span class="icon">
                          <fas icon="trash" />
                        </span>
                      </a>
                    </div>
                  </nav>
                </div>
              </article>
            </div>
          </div>
          <br />
          <b-pagination
            :total="GET_posts_total"
            :current.sync="pagination.current"
            range-before="2"
            range-after="2"
            order="is-centered"
            size="is-medium"
            :per-page="pagination.perPage"
            @change="pageChange"
          ></b-pagination>
          <br />
        </div>
      </div>
    </div>

    <div class="is-fixed-button">
      <span
        v-show="
          GET_cookies_user_id != null &&
          GET_cookies_user_id == GET_POSTS_USER.user_id &&
          modalWindow == false
        "
        @click="callModalWindow()"
        class="button is-danger is-fixed-button is-large"
      >
        <span class="icon is-small">
          <fas icon="pen" />
        </span>
      </span>
    </div>

    <b-modal v-model="modalWindow">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <textarea
              v-model="text"
              class="textarea"
              cols="30"
              rows="11"
              style="resize: none"
            ></textarea>
          </div>
          <div class="field is-grouped">
            <p class="control">
              <span
                v-if="change == false"
                @click="insert()"
                class="button is-success"
              >
                Добавить
              </span>
              <span v-else @click="update()" class="button is-warning">
                Обновить
              </span>
            </p>

            <p class="control">
              <span @click="close()" class="button">Закрыть</span>
            </p>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PostsPagination',
  props: [
    'GET_POSTS',
    'GET_POSTS_USER',
    'GET_cookies_user_id'
  ],
  data() {
    return {
      // Modal window for writing post
      change: false,
      text: null,
      modalWindow: false,
      post_id: null,

      pagination: {
        perPage: 10,
        current: 1,
      },
    }
  },
  computed: {
    ...mapGetters('posts', ['GET_posts_total']),
    requestParams() {
      return {
        login: this.$route.params.login,
        pagination: this.pagination.current,
      }
    },
    createDataPagination() {
      return {
        login: this.$route.params.login,
        pagination: +this.$route.params.pagination,
      }
    },
  },
  methods: {
    ...mapActions('posts', ['deletePost', 'insertPost', 'updatePost']),
    pageChange(value) {
      this.pagination.current = value
      this.$router.push({
        name: 'posts-login-pagination',
        params: this.requestParams,
      })
    },
    clearModalWindowData() {
      this.text = null
      this.change = false
      this.modalWindow = false
      this.post_id = null
    },
    close() {
      this.clearModalWindowData()
    },
    callModalWindow(post_id) {
      this.clearModalWindowData()
      if (post_id) {
        this.$store.dispatch('posts/findPost', post_id).then((text) => {
          this.change = true
          this.post_id = post_id
          this.text = text
        })
      }
      this.modalWindow = true
    },
    insert() {
      this.insertPost({ text: this.text })
      this.clearModalWindowData()
    },
    update() {
      this.updatePost({
        post_id: this.post_id,
        text: this.text
      })
      this.clearModalWindowData()
    },
  },
  mounted() {
    // Стартовое значение для pagination
    const data = this.createDataPagination
    this.pagination.current = data.pagination
  },
}
</script>
<style lang="css">
.is-fixed-button {
  position: fixed !important;
  z-index: 101;
  bottom: 60px;
  right: 30px;
}
</style>