<template>
  <div class="liked-object">
    <h1>Избранное</h1>
    <div class="liked-object__none"
    v-if="!objects.length">
      <h2>Как добавить объявление в избранное?</h2>
      <h3>На страницах списка объявлений или объявления нажмите на сердечко рядом с заголовком.</h3>
      <img src="../assets/screenshot1.png"/>
      <img src="../assets/screenshot2.png"/>
    </div>
    <Object
    v-for="objectInfo in objects"
    :key="objectInfo.id"
    :number="objectInfo.number">
    </Object>
  </div>
</template>

<script>
import Object from './Object'

export default {
  name: 'LikedObjects',
  components: {
    Object
  },
  computed: {
    objects () {
      return this.$store.getters.getAllObjects.filter(obj => obj.liked)
    }
  }
}
</script>

<style>
.liked-object {
  margin: 20px;
}
.liked-object__none h2, .liked-object__none h3 {
  font-weight: 500;
  text-align: center;
}
.liked-object__none img {
  height: 350px;
  border: black solid 2px;
  border-radius: 8px;
  margin: 20px;
}

</style>
