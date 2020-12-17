<template>
  <div>
    <div id="page-container">
      <div v-for="mostBoardLike in mostBoardLikes" :key="mostBoardLike">
        <h2 class="boardtitle">Username:</h2>
        {{ mostBoardLike[0] }}
        <h2 class="boardtitle">Title:</h2>
        {{ mostBoardLike[2] }} <br />
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
          <h2>Created at:</h2>
          {{ mostBoardLike[4] }}
        </div>
        <board-likes :showButton="false" :boardId="mostBoardLike[1]"> </board-likes>
      </div>
    </div>
    <button v-if="offset != 0" @click="PreviousBoards()">Previous Page</button
    ><button @click="NextBoards()">Next Page</button>
  </div>
</template>

<script>
import axios from "axios";
import BoardLikes from "./BoardLikes.vue"

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
