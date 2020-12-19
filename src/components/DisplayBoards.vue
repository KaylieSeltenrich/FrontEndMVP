<template>
  <div>
    <h1 id="title"> All Boards: </h1>
    <div id="page-container">
      <div v-for="board in boards" :key="board.id">
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

          <board-likes :ownerId="board.userId" :boardId="board.id">
          </board-likes>
          <board-favourites :ownerId="board.userId" :boardId="board.id">
          </board-favourites>
        </div>
      </div>
    </div>
    <button id="previouspage" v-if="offset != 0" @click="PreviousBoards()">Previous Page</button
    ><button id="nextpage" @click="NextBoards()">Next Page</button>
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
      this.offset = this.offset + 5;
      this.$store.dispatch("getAllBoards", this.offset);
    },

    PreviousBoards: function() {
      this.offset = this.offset - 5;
      this.$store.dispatch("getAllBoards", this.offset);
    },
  },
};
</script>

<style scoped>
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
    margin-top: 10vh;
  }

#previouspage, #nextpage {
  font-size: 1.2em;
  background-color:rgb(235, 235, 235);
  color: black;
  border: none;
  padding: 3%;
}
#previouspage:hover, #nextpage:hover{
  color: #b2adb7;
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
    font-size: 1em;
    margin: 2%;
  }

  #title{
    font-size: 1.8em;
    font-family: 'Indie Flower', cursive;
    margin-top: 10vh;
  }

  #previouspage, #nextpage {
  font-size: 1.2em;
  background-color:rgb(235, 235, 235);
  color: black;
  border: none;
  padding: 3%;
  margin-left: 5vw;
  box-shadow: 2px 2px 5px 2px #000000;
}
#previouspage:hover, #nextpage:hover{
  color: #b2adb7;
}
}

</style>
