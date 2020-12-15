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
    userBoards: [],
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
    },
    userBoards: function(state,data){
      state.userBoards = data
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

     getAllBoards: function(context,offset) {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/boards",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            offset: offset
          },
        })
        .then((response) => {
         context.commit("allBoards",response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    },


    getUserBoards: function(context,offset) {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/boards",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            offset: offset,
            userId: context.state.userId
          },
        })
        .then((response) => {
         context.commit("userBoards",response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    },
     
  },
  getters: {
    getUsersBoards: function(state) {
      return state.boards.filter(function(board) { return state.userId == board.userId })
    },

  }
});
