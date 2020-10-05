export default {
  state() {
    return {
      role_id: null,
      user_id: null
    }
  },
  getters: {
    GET_role_id(state) {
      return state.role_id;
    },
    GET_user_id(state) {
      return state.user_id;
    }

  },
  actions: {
    // 
    async SET_COOKIES({state}) {
      state.role_id = this.$cookies.get('role_id')
      state.user_id = this.$cookies.get('user_id')
    },
    async DELETE_COOKIES({state}) {
      state.role_id = null
      state.user_id = null
    }
  }
}