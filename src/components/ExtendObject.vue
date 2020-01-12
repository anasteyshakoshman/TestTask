<template>
  <div class="extend-object">
    <div class="extend-object-info">
      <h1>{{title}}</h1>
      <a-button
      @click="changeLiked"
      type="default"
      size="small"
      icon="heart"
      class="liked-button extend-object-liked-button"
      :class="{active__button: liked }">
        {{titleButton}}
      </a-button>
      <Info :data="price" type-icon="calculator"/>
      <Info :data="address" type-icon="environment"/>
      <Info :data="sellerName" type-icon="idcard"/>
    </div>
    <h3 class="extend-object-description">{{description}}</h3>
    <a-carousel class="extend-object-carousel">
      <a
      slot="customPaging"
      slot-scope="props">
        <img
        class="extend-object-img-reference"
        :src="getImgUrl(props.i)" />
      </a>
      <div
      v-for="(image, index) in images"
      :key="index">
        <img
        class="extend-object-img-full"
        :src="image"/>
      </div>
    </a-carousel>
  </div>
</template>

<script>
import axios from 'axios'
import Info from './Info'

export default {
  name: 'ExtendObject',
  components: {
    Info
  },
  data: function () {
    return {
      liked: false,
      title: '',
      price: '',
      address: '',
      sellerName: '',
      images: [],
      description: ''
    }
  },
  created () {
    axios
      .get('http://134.209.138.34/item/' + this.$route.params.Pid)
      .then((response) => {
        this.title = response.data[0].title
        this.price = response.data[0].price
        this.address = response.data[0].address
        this.sellerName = response.data[0].sellerName
        this.images = response.data[0].images
        this.description = response.data[0].description
        this.liked = this.$store.getters.getLiked(this.$route.params.Pnumber)
      })
      .catch(error => console.log(error))
  },
  methods: {
    changeLiked () {
      this.liked = !this.liked
      this.$store.commit('changeLiked', this.$route.params.Pnumber)
    },
    getImgUrl (i) {
      return this.images[i]
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
  margin: 35px;
}

.extend-object-carousel {
  max-width: 600px;
  max-height: 900px;
  padding: 5px 30px 100px 0;
  text-align: center;
}

.extend-object-img-full {
  max-width: 500px;
  max-height: 500px;
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
}

.extend-object-img-reference {
  max-width: 100px;
  max-height: 100px;
}

.extend-object-img-reference:hover {
  border: 3px solid dodgerblue;
}

.extend-object-liked-button {
  position: static;
  margin-bottom: 15px;
}

.extend-object-description {
  display: inline-block;
  vertical-align: bottom;
  max-width: 650px;
  padding: 10px;
  border: 2px solid dodgerblue;
  border-radius: 5px;
}

.extend-object-info {
  display: inline-block;
  width: 600px;
  margin-right: 20px;
}
</style>
