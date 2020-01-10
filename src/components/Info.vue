<template>
  <div>
    <a-icon
    :type="typeIcon"
    theme="twoTone"
    class="info-inline-block"/>
    <h3 class="info-inline-block">
      {{data}}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Info',
  props: {
    data: {
      type: String,
      required: true
    },
    typeIcon: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.info-inline-block {
  display: inline-block;
}
</style>
