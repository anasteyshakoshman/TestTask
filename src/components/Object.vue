<template>
  <div class="object">
  </div>
</template>

<script>
export default {
  name: 'Object',
  props: {
    info: {
      type: Object,
      required: true
    },
    extendInfo: {
      type: Object,
      required: true
    }
  }
}
</script>
