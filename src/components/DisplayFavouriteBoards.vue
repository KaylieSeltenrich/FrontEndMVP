<template>
  <div>
    <div id="page-container">
      <div v-for="board in faveBoards" :key="board.id">
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
          <h2>Created at:</h2>
          {{ board.createdAt }}
        </div>
        <board-likes :ownerId="board.userId" :boardId="board.boardId"> </board-likes>
        <button @click="unfaveBoard(board.boardId)">
          UnFavourite Board
        </button>
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
    if (this.$store.state.favouriteBoards.length == 0) {
      this.$store.dispatch("getFavouriteBoards", this.offset);
    }
  },
  data() {
    return {
      userId: cookies.get("user"),
      loginToken: cookies.get("session"),
      offset: 0,
    };
  },
  computed: {
    faveBoards() {
      return this.$store.state.favouriteBoards;
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
    NextBoards: function() {
      this.offset = this.offset + 5;
      this.$store.dispatch("getFavouriteBoards", this.offset);
    },

    PreviousBoards: function() {
      this.offset = this.offset - 5;
      this.$store.dispatch("getFavouriteBoards", this.offset);
    },

     unfaveBoard: function(boardId) {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/board-favourites",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            id: boardId,
            loginToken: this.loginToken,
          },
        })
        .then((response) => {
          this.boardFaves = response.data;
          this.isFaved = false
        })
        .catch((error) => {
          console.log(error);
        });
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
