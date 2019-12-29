<template>
  <div class="app">
<!--    <router-view/>-->
    <object
    v-for="objectInfo in objects"
    :key="objectInfo.id"
    :info="objectInfo">
    </object>
    {{objects}}
  </div>
</template>

<script>
import axios from 'axios'
import Object from './components/Object'

export default {
  name: 'App',
  component: {
    Object
  },
  data: function () {
    return {
      objects: null
    }
  },
  mounted () {
    axios
      .get('http://134.209.138.34/items')
      .then((response) => {
        this.objects = response['data']
      })
      .catch(error => console.log(error))
  }
}
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
