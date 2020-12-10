import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
import cookies from "vue-cookies";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
    loginToken: cookies.get("session"),
  },

  mutations: {
    updateImages: function(state,data) {
      state.images = data;
    },

    loginUpdate: function (state, data) {
      state.loginToken = data
    },
    loginDelete: function (state) {
      state.loginToken = undefined
    },
  },
  actions: {
    getImages: function(context,searchinput) {
      axios.request({
          url: "https://api.pexels.com/v1/search?query=" + searchinput + "&per_page=15&page=" + Math.floor(Math.random() * 10),
          method: "GET",
          headers:{
              'Authorization':'563492ad6f917000010000010df21032a6d14f14af8b9814bf45e291',
          }
      }).then((response) => {
          console.log(response)
          context.commit("updateImages",response.data.photos)
          
      }).catch((error) => {
          console.log(error)
      })
     }
  },
  modules: {}
});
