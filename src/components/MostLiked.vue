<template>
  <div>
    <h1 id="title">Most Liked Boards of the Month:</h1>
    <div id="page-container">
      <div v-if="mostBoardLikes.length == 0">
        Sorry! No boards here. Please go to previous page.
      </div>
      <div
        v-else
        id="board-container"
        v-for="mostBoardLike in mostBoardLikes"
        :key="mostBoardLike"
      >
        <h2 class="boardtitle">Username:</h2>
        <p id="subtitle">{{ mostBoardLike[0] }}</p>
        <h2 class="boardtitle">Title:</h2>
        <p id="subtitle">{{ mostBoardLike[2] }}</p>
        <br />
        <img id="image" v-bind:src="mostBoardLike[3]" />
        <div id="container">
          <div
            class="fill"
            v-bind:style="'background-color:' + mostBoardLike[6]"
            @click="CopyHex($event.currentTarget)"
          >
            {{ mostBoardLike[6] }}
          </div>
          <div
            class="fill"
            v-bind:style="'background-color:' + mostBoardLike[7]"
            @click="CopyHex($event.currentTarget)"
          >
            {{ mostBoardLike[7] }}
          </div>
          <div
            class="fill"
            v-bind:style="'background-color:' + mostBoardLike[8]"
            @click="CopyHex($event.currentTarget)"
          >
            {{ mostBoardLike[8] }}
          </div>
          <div
            class="fill"
            v-bind:style="'background-color:' + mostBoardLike[9]"
            @click="CopyHex($event.currentTarget)"
          >
            {{ mostBoardLike[9] }}
          </div>
          <div
            class="fill"
            v-bind:style="'background-color:' + mostBoardLike[10]"
            @click="CopyHex($event.currentTarget)"
          >
            {{ mostBoardLike[10] }}
          </div>
          <div
            class="fill"
            v-bind:style="'background-color:' + mostBoardLike[11]"
            @click="CopyHex($event.currentTarget)"
          >
            {{ mostBoardLike[11] }}
          </div>
          <div
            class="fill"
            v-bind:style="'background-color:' + mostBoardLike[12]"
            @click="CopyHex($event.currentTarget)"
          >
            {{ mostBoardLike[12] }}
          </div>
          <div
            class="fill"
            v-bind:style="'background-color:' + mostBoardLike[13]"
            @click="CopyHex($event.currentTarget)"
          >
            {{ mostBoardLike[13] }}
          </div>
          <div
            class="fill"
            v-bind:style="'background-color:' + mostBoardLike[14]"
            @click="CopyHex($event.currentTarget)"
          >
            {{ mostBoardLike[14] }}
          </div>
          <div
            class="fill"
            v-bind:style="'background-color:' + mostBoardLike[15]"
            @click="CopyHex($event.currentTarget)"
          >
            {{ mostBoardLike[15] }}
          </div>
          <h2 class="boardtitle">Created at:</h2>
          <p id="subtitle">
            {{ mostBoardLike[4] }}
          </p>
        </div>
        <board-likes id="likes" :showButton="false" :boardId="mostBoardLike[1]">
        </board-likes>
      </div>
    </div>
    <button id="previouspage" v-if="offset != 0" @click="PreviousBoards()">
      Previous Page</button
    ><button id="nextpage" v-if="mostBoardLikes.length == 6" @click="NextBoards()">Next Page</button>
  </div>
</template>

<script>
import axios from "axios";
import BoardLikes from "./BoardLikes.vue";

export default {
  components: {
    BoardLikes,
  },
  mounted() {
    this.getMostLiked();
  },

  data() {
    return {
      mostBoardLikes: [],
      boardLikes: [],
      likesAmount: 0,
    };
  },

  methods: {
    getMostLiked: function() {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/most-liked",
          method: "GET",
          params: {},
        })
        .then((response) => {
          console.log(response);
          this.mostBoardLikes = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

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

#title {
  display: block;
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
    font-size: 1.3em;
    margin: 2%;
  }

  #likes {
    margin: 0;
    font-size: 1.5em;
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
    margin-top: 0vh;
    
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
    grid-template-columns: 1fr;
    column-gap: 10px;
    width: 100%;
  }

  #image {
    width: 550px;
    height: 550px;
    object-fit: cover;
  }

  .boardtitle {
    font-size: 1.8em;
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

  #likes{
    font-size: 2em;
  }

  #subtitle{
    font-size: 1.5em;
    margin: 0;
    margin-top: 2%;
  }
}
</style>
