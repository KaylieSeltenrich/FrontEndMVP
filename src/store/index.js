import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
import cookies from "vue-cookies";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
    loginToken: cookies.get("session"),
    boards: [],
    userId: cookies.get("user"),
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
    allBoards: function(state,data){
      state.boards = data
    }

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
     },

     getAllBoards: function(context) {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/boards",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          data: {},
        })
        .then((response) => {
         context.commit("allBoards",response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    },
     
  },
  getters: {
    getUsersBoards: function(state) {
      return state.boards.filter(function(board) { console.log(board.userId); console.log(state.userId); return state.userId == board.userId })
    },
  }
});
