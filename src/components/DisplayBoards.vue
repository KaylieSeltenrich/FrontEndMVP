<template>
  <div>
    <h1 id="title">All Boards:</h1>
    <div id="page-container">
      <div v-if="boards.length == 0">
        Sorry! No boards here. Please go to previous page.
      </div>
      <div v-else id="board-container" v-for="board in boards" :key="board.id">
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

          <board-likes :ownerId="board.userId" :boardId="board.id">
          </board-likes>
          <board-favourites :ownerId="board.userId" :boardId="board.id">
          </board-favourites>
        </div>
      </div>
    </div>
    <button id="previouspage" v-if="offset != 0" @click="PreviousBoards()">
      Previous Page</button
    ><button id="nextpage" v-if="boards.length == 6" @click="NextBoards()">Next Page</button>
  </div>
</template>

<script>
import BoardFavourites from "./BoardFavourites.vue";
import BoardLikes from "./BoardLikes.vue";

export default {
  data() {
    return {
      offset: 0,
    };
  },
  components: {
    BoardLikes,
    BoardFavourites,
  },

  computed: {
    boards() {
      return this.$store.state.boards;
    },
  },

  mounted() {
    this.$store.dispatch("getAllBoards", this.offset);
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
      this.$store.dispatch("getAllBoards", this.offset);
    },

    PreviousBoards: function() {
      this.offset = this.offset - 6;
      this.$store.dispatch("getAllBoards", this.offset);
    },
  },
};
</script>

<style scoped>


/* PHONE */

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
    margin-bottom: 5vh;
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
    font-size: 1.3em;
    margin: 2%;
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

/* DESKTOP */

@media only screen and (min-width: 1024px) {
  .fill {
    width: 100%;
    height: 100%;
  }
  #container {
    height: 45vh;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  #page-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 5%;
    width: 85%;
    margin-left: 8%;
  }

  #image {
    width: 400px;
    height: 400px;
    object-fit: cover;
  }

  .boardtitle {
    font-size: 1.3em;
    margin: 2%;
  }

  #title {
    font-size: 3.5em;
    font-family: "Indie Flower", cursive;
    margin-top: 0;
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
