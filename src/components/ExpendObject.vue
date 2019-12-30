<template>
  <div class="expend_object">
    <h1>{{this.$route.params.Pid}}</h1>
    <h1>{{extendInfo}}</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ExtendObject',
  data: function () {
    return {
      extendInfo: {
        type: Object,
        required: true
      }
    }
  },
  mounted () {
    axios
      .get('http://134.209.138.34/item/' + this.$route.params.Pid)
      .then((response) => {
        this.extendInfo = response.data
      })
      .catch(error => console.log(error))
  }
}
</script>

<style>
.expend_object {
  width: 100%;
  height: 100%;
}
</style>
