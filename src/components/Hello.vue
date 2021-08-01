<template>
  <div>
    <button
      class="btn btn-primary"
      @click="fetchMovie">
      Get Movie!
    </button>
    <h1>{{ title }}</h1>
    <p>{{ director }}</p>
    <img
      :src="poster"
      :alt="title" />
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  data() {
    return {
      title: '',
      poster: '',
      director: ''
    }
  },
  computed: { // 데이터를 가져올 때
    msg() {
      return this.$store.state.message.msg
    },
    reversedMsg() {
      return this.$stor.getters['message/reversedMsg']
    }
  },
  // mounted() {
  //   this.fetchMovie()
  // },
  methods: { // 동작을 가져올 때
    updateMsg() {
      this.$store.commit('message/updateMsg', '1234')
    },
    reverseMsg() {
      this.$store.dispatch('message/reverseMsg')
    },
    async fetchMovie() {
      // http 요청은 브라우저에서 차단될 수 있다.
      const res = await fetch('https://www.omdbapi.com/?apikey=4d8ddc33&i=tt3896198')
      const movie = await res.json()
      console.log(movie)
      this.title = movie.Title
      this.director = movie.Director
      this.poster = movie.Poster
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  $color: salmon;
  background-color: $color;
  display: flex; 
}
</style>