<template>
  <div>
    <h1 id="title">Your Favourited Boards:</h1>
    <div id="page-container">
        <div v-if="faveBoards.length == 0">
        Sorry! No boards here. Please go to previous page.
      </div>
      <div v-else id="board-container" v-for="board in faveBoards" :key="board.id">
        <h2 class="boardtitle">Username:</h2>
        <p style="font-size:1.2em; margin:0">{{ board.username }}</p>
        <h2 class="boardtitle">Title:</h2>
        <p style="font-size:1.2em; margin:0">{{ board.title }}</p>
        <br />
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
          <p style="font-size:1.1em; margin:0; align-self:start;">
            {{ board.createdAt }}
          </p>
        </div>
        <board-likes
          id="likes"
          :ownerId="board.userId"
          :boardId="board.boardId"
        >
        </board-likes>
        <button id="unfave" @click="unfaveBoard(board.boardId, $event.currentTarget)">
          UnFavourite Board
        </button>
      </div>
    </div>
    <button id="previouspage" v-if="offset != 0" @click="PreviousBoards()">
      Previous Page</button
    ><button id="nextpage" v-if="faveBoards.length == 6" @click="NextBoards()">Next Page</button>
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
      this.offset = this.offset + 6;
      this.$store.dispatch("getFavouriteBoards", this.offset);
    },

    PreviousBoards: function() {
      this.offset = this.offset - 6;
      this.$store.dispatch("getFavouriteBoards", this.offset);
    },

    unfaveBoard: function(boardId, button) {
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
          this.isFaved = false;
          button.innerHTML = "Success!";
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
  font-size: 1.3em;
  margin: 0;
}

#title {
  font-size: 1.8em;
  font-family: "Indie Flower", cursive;
  margin-top: 6vh;
}

#previouspage,
#nextpage {
  font-size: 1.2em;
  background-color: rgb(235, 235, 235);
  color: black;
  border: none;
  padding: 3%;
  margin-left: 5vw;
  box-shadow: 2px 2px 5px 2px #000000;
  margin-top: 10vh;
}

#previouspage:hover,
#nextpage:hover {
  color: #b2adb7;
}

#board-container {
  border: ridge 3px white;
  box-shadow: 1px 1px 10px 1px black;
  padding: 5%;
  margin-bottom: 50px;
}

#unfave {
  display: grid;
  grid-template-columns: 1fr;
  font-size: 1.2em;
  border: none;
  background-color: rgb(156, 156, 156);
  color: white;
  margin-left: 10%;
  width: 80%;
  height: 46px;
  align-self: start;
  align-items: center;
  margin-top: 12%;
}

@media (max-width: 767px) {
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

  #title {
    font-size: 1.8em;
    font-family: "Indie Flower", cursive;
  }

  #previouspage,
  #nextpage {
   font-size: 1.2em;
    background-color: rgb(235, 235, 235);
    color: black;
    border: none;
    padding: 3%;
    margin-left: 5vw;
    box-shadow: 2px 2px 5px 2px #000000;
    margin-top: 0;
  }
  #previouspage:hover,
  #nextpage:hover {
    color: #b2adb7;
  }

  #board-container {
    border: ridge 3px white;
    box-shadow: 1px 1px 10px 1px black;
    padding: 5%;
    margin-bottom: 50px;
  }

  #unfave {
    display: grid;
    grid-template-columns: 1fr;
    font-size: 1.2em;
    border: none;
    background-color: rgb(156, 156, 156);
    color: white;
    margin-left: 10%;
    width: 80%;
    height: 46px;
    align-self: start;
    align-items: center;
    margin-top: 12%;
  }
}

/* TABLET */
@media only screen and (min-width: 768px) {
  .fill {
    width: 100%;
    height: 100%;
  }
  #container {
    height: 35vh;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  #page-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    width: 100%;
  }

  #image {
    width: 330px;
    height: 330px;
    object-fit: cover;
  }

  .boardtitle {
    font-size: 1.3em;
    margin: 2%;
  }

  #title {
    font-size: 2.5em;
    font-family: "Indie Flower", cursive;
    margin-top: 3vh;
  }

  #previouspage,
  #nextpage {
    font-size: 1.2em;
    background-color: rgb(235, 235, 235);
    color: black;
    border: none;
    padding: 3%;
    margin-left: 5vw;
    box-shadow: 2px 2px 5px 2px #000000;
    margin-bottom: 5%;
    margin-top: 0;
  }
  #previouspage:hover,
  #nextpage:hover {
    color: #b2adb7;
  }

  #board-container {
    border: ridge 3px white;
    box-shadow: 1px 1px 10px 1px black;
    padding: 5%;
    margin-bottom: 50px;
    width: 90%;
  }
}
</style>
