<template>
    <div class="home">
      <a-button
      type="link"
      size="large"
      @click="goToLiked">Избранное</a-button>
      <h2 class="home-title">Недвижимость</h2>
      <Object
      v-for="objectInfo in objects"
      :key="objectInfo.id"
      :number="objectInfo.number">
      </Object>
    </div>
</template>

<script>
import Object from './Object'
import LikedObjects from './LikedObject'

export default {
  name: 'Home',
  components: {
    Object
  },
  computed: {
    objects () {
      return this.$store.getters.getAllObjects
    }
  },
  methods: {
    goToLiked () {
      this.$router.push({
        path: '/liked',
        name: 'LikedObjects',
        component: LikedObjects
      })
    }
  }
}
</script>

<style>
.home {
  font-family: 'Avenir', Helvetica, Arial, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  padding: 10px;
}

.home-title {
  font-weight: bold;
  margin-left: 10px;
}
</style>
