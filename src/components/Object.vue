<template>
  <div class="object">
    <div class="object__img">
      <img
      @click="goToExtend"
      class="object__reference"
      :src="info.previewImage"/>
      <a-button
      @click="changeLiked"
      type="default"
      size="small"
      icon="heart"
      class="button"
      :class="{active__button: liked }"/>
    </div>
    <div class="object__info">
      <h3
      @click="goToExtend"
      class="object__reference">
        {{info.title}}
      </h3>
      <h3 class="object__price">
        {{info.price}}
      </h3>
      <h3 class="object__address">
        {{info.address}}
      </h3>
    </div>
  </div>
</template>

<script>
import ExtendObject from '@/components/ExtendObject'
export default {
  name: 'Object',
  props: {
    number: {
      type: Number,
      required: true
    }
  },
  data: function () {
    return {
      liked: false
    }
  },
  computed: {
    info () {
      return this.$store.getters.getObject(this.number)
    }
  },
  created () {
    this.liked = this.$store.getters.getLiked(this.number)
  },
  methods: {
    changeLiked () {
      this.liked = !this.liked
      this.$store.commit('changeLiked', this.number)
    },
    goToExtend () {
      this.$router.push({
        path: '/:Pid',
        name: 'ExtendObject',
        component: ExtendObject,
        params: {
          Pid: this.info.id,
          Pnumber: this.info.number
        }
      })
    }
  }
}
</script>
<style>
.object {
  font-size: small;
  display: inline-block;
  width: 208px;
  height: 292px;
  margin: 10px;
  vertical-align: middle;
}

.object__reference {
  color: dodgerblue;
  cursor: pointer;
}

.object__reference:hover {
  color: red;
}

.object__info h3 {
  margin: 2px;
}

.object__price {
  font-weight: bold;
}

.object__address {
  opacity: 0.6;
  font-weight: normal;
}

.object__img {
  position: relative;
}

.object__img img {
  width: 100%;
  height: 156px;
}

.button {
  position: absolute;
  bottom: 85%;
  left: 85%;
  cursor: pointer;
  color: dodgerblue;
  border: 1px solid dodgerblue;
}
.button:hover, .active__button {
  background: dodgerblue;
  color: white;
  border: 1px solid white;
}
</style>
