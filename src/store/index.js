import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    objects: null
  },
  getters: {
    getObject: state => number => {
      return state.objects[number]
    },
    getAllObjects: state => {
      return state.objects
    },
    getLiked: state => number => {
      return state.objects[number].liked
    }
  },
  mutations: {
    setObjects: (state, value) => {
      state.objects = value
      for (let i = 0; i < state.objects.length; ++i) {
        state.objects[i].liked = false
        state.objects[i].number = i
      }
    },
    changeLiked (state, num) {
      state.objects[num].liked = !state.objects[num].liked
    }
  },
  actions: {
    initStore: ({commit}) => {
      axios
        .get('http://134.209.138.34/items')
        .then((response) => {
          commit('setObjects', response.data)
        })
        .catch(error => console.log(error))
    }
  }
})
