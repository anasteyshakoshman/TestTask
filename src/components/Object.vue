<template>
  <div class="object">
    <div @click="goToExtend(info.id)">
      <img :src="info.previewImage"/>
      <h3>{{info.title}}</h3>
    </div>
    <h3>{{info.price}}</h3>
    <h3>{{info.address}}</h3>
  </div>
</template>

<script>
import ExtendObject from '@/components/ExpendObject'
export default {
  name: 'Object',
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToExtend (id) {
      this.$router.push({
        path: '/:Pid',
        name: 'ExtendObject',
        component: ExtendObject,
        params: {Pid: id}})
    }
  }
}
</script>
<style scoped>
</style>
