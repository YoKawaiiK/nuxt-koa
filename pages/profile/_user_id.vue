<template>
  <div>
    profile
  </div>
</template>
<script>
export default {
  name: 'profile',
  head() {
    return {
      title: 'Профиль',
      meta: [
        {
          auth: true
        }
      ]
    }
  },
  middleware: 'auth'
}
</script>