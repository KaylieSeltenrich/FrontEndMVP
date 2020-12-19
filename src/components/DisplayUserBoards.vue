<template>
  <div>
    <h1 id="title"> Your Boards: </h1>
    <div id="page-container">
      <div v-for="board in userBoards" :key="board.id">
        <h2 class="boardtitle">Username:</h2>
        {{ board.username }}
        <h2 class="boardtitle">Title:</h2>
        {{ board.title }} <br />
        <img id="image" v-bind:src="board.image" />
        <div id="container">
          <div
            class="fill"
            v-bind:style="'background-color:' + board.colour1"
            @click="CopyHex($event.currentTarget)"
          >
            {{ board.colour1 }}
          </div>
          <div
            class="fill"
            v-bind:style="'background-color:' + board.colour2"
            @click="CopyHex($event.currentTarget)"
          >
            {{ board.colour2 }}
          </div>
          <div
            class="fill"
            v-bind:style="'background-color:' + board.colour3"
            @click="CopyHex($event.currentTarget)"
          >
            {{ board.colour3 }}
          </div>
          <div
            class="fill"
            v-bind:style="'background-color:' + board.colour4"
            @click="CopyHex($event.currentTarget)"
          >
            {{ board.colour4 }}
          </div>
          <div
            class="fill"
            v-bind:style="'background-color:' + board.colour5"
            @click="CopyHex($event.currentTarget)"
          >
            {{ board.colour5 }}
          </div>
          <div
            class="fill"
            v-bind:style="'background-color:' + board.colour6"
            @click="CopyHex($event.currentTarget)"
          >
            {{ board.colour6 }}
          </div>
          <div
            class="fill"
            v-bind:style="'background-color:' + board.colour7"
            @click="CopyHex($event.currentTarget)"
          >
            {{ board.colour7 }}
          </div>
          <div
            class="fill"
            v-bind:style="'background-color:' + board.colour8"
            @click="CopyHex($event.currentTarget)"
          >
            {{ board.colour8 }}
          </div>
          <div
            class="fill"
            v-bind:style="'background-color:' + board.colour9"
            @click="CopyHex($event.currentTarget)"
          >
            {{ board.colour9 }}
          </div>
          <div
            class="fill"
            v-bind:style="'background-color:' + board.colour10"
            @click="CopyHex($event.currentTarget)"
          >
            {{ board.colour10 }}
          </div>
          <h2 class="boardtitle">Created at:</h2>
          {{ board.createdAt }}
        </div>
        <board-likes id="likes" :ownerId="board.userId" :boardId="board.id">
        </board-likes>
        <div id="button-container">
          <button id="delete" @click="deleteBoard(board.id)">Delete Board</button> <br />
          <input type="text" v-model="title" /><button id="update"
            @click="updateTitle(board.id)"
          >
            Update Board Title
          </button>
        </div>
      </div>
    </div>
    <button v-if="offset != 0" @click="PreviousBoards()">Previous Page</button
    ><button @click="NextBoards()">Next Page</button>
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
      this.$store.dispatch("getUserBoards", this.offset);
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
      return this.$store.state.userBoards;
    },
  },
  methods: {
    CopyHex: function(element) {
      let range = document.createRange();
      range.selectNode(element);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand("copy");
    },

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

    NextBoards: function() {
      this.offset = this.offset + 5;
      this.$store.dispatch("getUserBoards", this.offset);
    },

    PreviousBoards: function() {
      this.offset = this.offset - 5;
      this.$store.dispatch("getUserBoards", this.offset);
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

 #title{
    font-size: 1.8em;
    font-family: 'Indie Flower', cursive;
  }

@media (max-width: 600px) {
  .fill {
    width: 100%;
    height: 100%;
  }
  #container {
    height: 50vh;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  #page-container {
    display: grid;
    grid-template-columns: 1fr;
    align-content: center;
    text-align: center;
    justify-items: center;
  }
  #image {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }

  .boardtitle {
    font-size: 1em;
    margin: 2%;
  }

  #likes {
    margin: 0;
    font-size: 1.2em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 5vh;
  }

  #button-container{
  display: grid;
  grid-template-columns: 1fr;
  width: 70%;
  margin-left: 15%;
  }

   #title{
    font-size: 1.8em;
    font-family: 'Indie Flower', cursive;
  }

  #delete, #update{
  font-size: 1.2em;
  }

  input{
    height:3vh;
    margin-bottom: 2vh;
  }

}
</style>
