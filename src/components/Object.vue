<template>
  <div class="object">
    <div class="object-full-img">
      <img
      @click="goToExtend"
      :src="previewImage"
      class="object-img"/>
      <a-button
      @click="changeLiked"
      type="default"
      size="small"
      icon="heart"
      class="liked-button object-liked-button"
      :class="{active__button: liked }"/>
    </div>
    <div class="object-info">
      <h3
      @click="goToExtend"
      class="object-reference">
        {{title}}
      </h3>
      <h3 class="object-price">
        {{price}}
      </h3>
      <h3 class="object-address">
        {{address}}
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
    title () {
      return this.$store.getters.getObject(this.number).title
    },
    price () {
      return this.$store.getters.getObject(this.number).price
    },
    address () {
      return this.$store.getters.getObject(this.number).address
    },
    previewImage () {
      return this.$store.getters.getObject(this.number).previewImage
    },
    id () {
      return this.$store.getters.getObject(this.number).id
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
          Pid: this.id,
          Pnumber: this.number
        }
      })
    }
  }
}
</script>
<style>
@import '../style/button.css';

.object {
  font-size: small;
  display: inline-block;
  width: 208px;
  height: 292px;
  margin: 10px;
  vertical-align: middle;
  color: dodgerblue;
}

.object-price, .object-address, .object-reference {
  margin: 2px;
}

.object-price {
  font-weight: bold;
}

.object-address {
  opacity: 0.6;
  font-weight: normal;
}

.object-reference {
  color: dodgerblue;
}

.object-reference:hover {
  color: red;
}

.object-reference, .object-img {
  cursor: pointer;
}

.object-full-img {
  position: relative;
}

.object-img {
  width: 100%;
  height: 156px;
}

.object-liked-button {
  position: absolute;
  bottom: 85%;
  left: 85%;
}
</style>
