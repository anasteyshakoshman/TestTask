<template>
  <div class="extend-object">
    <h3>{{info.title}}</h3>
    <h3>{{info.price}}</h3>
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
    <a-button
    @click="changeLiked"
    type="default"
    size="small"
    icon="heart"
    class="button"
    :class="{active__button: liked }">
      Добавить в избранное
    </a-button>
    <h3>{{info.address}}</h3>
    <h3>{{info.description}}</h3>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ExtendObject',
  data: function () {
    return {
      info: null,
      liked: false,
      slideIndex: 1
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
  }
}
</script>

<style>
.ant-carousel >>> .slick-dots {
  /*height: auto;*/
}
.ant-carousel >>> .slick-slide img {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 80%;
}
.ant-carousel >>> .slick-thumb {
  bottom: -45px;
}
.ant-carousel >>> .slick-thumb li {
  width: 60px;
  height: 45px;
}
.ant-carousel >>> .slick-thumb li img {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
}
.ant-carousel >>> .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
.img-full {
  max-width: 400px;
  max-height: 400px;
}
.img-reference {
  max-width: 200px;
  max-height: 200px;
}
.button {
  position: absolute;
  bottom: 85%;
  left: 85%;
  cursor: pointer;
  color: dodgerblue;
  border: 2px solid dodgerblue;
  font-weight: 600;
}
.button:hover, .active__button {
  background: dodgerblue;
  color: white;
  border: 1px solid white;
}
</style>
