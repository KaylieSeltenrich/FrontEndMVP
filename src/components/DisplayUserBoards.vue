<template>
<div>
  <div id="page-container">
    <div v-for="board in userBoards" :key="board.id">
      <h2 class="boardtitle">Username:</h2>
      {{ board.username }}
      <h2 class="boardtitle">Title:</h2>
      {{ board.title }} <br />
      <img id="image" v-bind:src="board.image" />
      <div id="container">
        <div class="fill" v-bind:style="'background-color:' + board.colour1">
          {{ board.colour1 }}
        </div>
        <div class="fill" v-bind:style="'background-color:' + board.colour2">
          {{ board.colour2 }}
        </div>
        <div class="fill" v-bind:style="'background-color:' + board.colour3">
          {{ board.colour3 }}
        </div>
        <div class="fill" v-bind:style="'background-color:' + board.colour4">
          {{ board.colour4 }}
        </div>
        <div class="fill" v-bind:style="'background-color:' + board.colour5">
          {{ board.colour5 }}
        </div>
        <div class="fill" v-bind:style="'background-color:' + board.colour6">
          {{ board.colour6 }}
        </div>
        <div class="fill" v-bind:style="'background-color:' + board.colour7">
          {{ board.colour7 }}
        </div>
        <div class="fill" v-bind:style="'background-color:' + board.colour8">
          {{ board.colour8 }}
        </div>
        <div class="fill" v-bind:style="'background-color:' + board.colour9">
          {{ board.colour9 }}
        </div>
        <div class="fill" v-bind:style="'background-color:' + board.colour10">
          {{ board.colour10 }}
        </div>
        <h2>Created at:</h2>
        {{ board.createdAt }}
        <button @click="deleteBoard(board.id)"> Delete Board </button> <br />
        <input type="text" v-model="title"><button @click="updateTitle(board.id)"> Update Board Title </button>
      </div>
       <board-likes :ownerId="board.userId" :boardId="board.id"> </board-likes> 
    </div>
  </div>
   <button v-if="offset != 0" @click="PreviousBoards()">Previous Page</button><button @click="NextBoards()">Next Page</button>
</div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
import BoardLikes from "./BoardLikes.vue";

export default {
  components: {
    BoardLikes,
  },
  mounted() {
    if (this.$store.state.userBoards.length == 0) {
      this.$store.dispatch("getUserBoards",this.offset);
    }
  },
  data() {
    return {
      userId: cookies.get("user"),
      loginToken: cookies.get("session"),
      title: "",
      offset: 0,
    };
  },
  computed: {
    userBoards() {
      return this.$store.state.userBoards
    },
  },
  methods: {
      deleteBoard: function(boardId) {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/boards",
          method: "DELETE",
          data: {
              loginToken: this.loginToken,
              id: boardId,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

updateTitle: function(boardId) {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/boards",
          method: "PATCH",
          data: {
              loginToken: this.loginToken,
              id: boardId,
              title: this.title,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

     NextBoards: function(){
     this.offset = this.offset + 5;
     this.$store.dispatch("getUserBoards",this.offset);
    },

     PreviousBoards: function(){
     this.offset = this.offset - 5;
     this.$store.dispatch("getUserBoards",this.offset);
    },

  },
};
</script>

<style lang="css" scoped>
.fill {
  width: 100%;
  height: 100%;
}
#container {
  height: 50vh;
  width: 30vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
#page-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  text-align: center;
  justify-items: center;
}
#image {
  width: 500px;
  height: 500px;
  object-fit: cover;
}

.boardtitle {
  font-size: 1em;
  margin: 0;
}
</style>
