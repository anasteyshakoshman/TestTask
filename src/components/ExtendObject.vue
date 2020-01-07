<template>
  <div class="extend-object">
    <h1>{{info.title}}</h1>
    <a-button
      @click="changeLiked"
      type="default"
      size="small"
      icon="heart"
      class="liked-button extend-object__liked-button"
      :class="{active__button: liked }">
      {{titleButton}}
    </a-button>
    <h3>{{info.price}}</h3>
    <h3>{{info.address}}</h3>
    <h3>{{info.sellerName}}</h3>
    <a-carousel
    arrows
    dotsClass="slick-dots slick-thumb">
      <a
      slot="customPaging"
      slot-scope="props">
        <img
        class="img-reference"
        :src="getImgUrl(props.i)" />
      </a>
      <div
      v-for="(image, index) in info.images"
      :key="index">
        <img
        class="img-full"
        :src="image"/>
      </div>
    </a-carousel>
    <h3 class="extend-object__description">{{info.description}}</h3>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ExtendObject',
  data: function () {
    return {
      info: null,
      liked: false
    }
  },
  created () {
    axios
      .get('http://134.209.138.34/item/' + this.$route.params.Pid)
      .then((response) => {
        this.info = response.data[0]
      })
      .catch(error => console.log(error))
    this.liked = this.$store.getters.getLiked(this.$route.params.Pnumber)
  },
  methods: {
    changeLiked () {
      this.liked = !this.liked
      this.$store.commit('changeLiked', this.$route.params.Pnumber)
    },
    getImgUrl (i) {
      return this.info.images[i]
    }
  },
  computed: {
    titleButton () {
      if (this.liked) return 'В избранном'
      else return 'Добавить в избранное'
    }
  }
}
</script>

<style>
@import "../style/button.css";

.extend-object {
  margin: 30px;
}
.ant-carousel {
  max-width: 600px;
  max-height: 900px;
}
.img-full {
  max-width: 500px;
  max-height: 500px;
}
.img-reference {
  max-width: 100px;
  max-height: 100px;
  padding-top: 20px;
}

.extend-object__liked-button {
  position: static;
  margin-bottom: 15px;
}
.extend-object__description {
  position: absolute;
  left: 45%;
  top: 26%;
  right: 10%;
  width: auto;
  padding: 15px;
  border: 2px solid dodgerblue;
  border-radius: 5px;
}
</style>
