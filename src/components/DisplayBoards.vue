<template>
  <div>
    <div id="page-container">
      <div v-for="board in boards" :key="board.id">
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
        <board-likes :ownerId="board.userId" :boardId="board.id"> </board-likes>
        </div>
      </div>
    </div>
    <button v-if="offset != 0" @click="PreviousBoards()">Previous Page</button><button @click="NextBoards()">Next Page</button>
  </div>
</template>

<script>
import BoardLikes from "./BoardLikes.vue";

export default {
  data() {
    return {
      offset: 0,
    }
  },
  components: {
    BoardLikes,
  },

  computed: {
    boards() {
      return this.$store.state.boards;
    },
  },

  mounted() {
    this.$store.dispatch("getAllBoards",this.offset);
  },

  methods: {
    CopyHex: function(element) {
      let range = document.createRange();
      range.selectNode(element);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand("copy");
    },
    
    NextBoards: function(){
     this.offset = this.offset + 5;
     this.$store.dispatch("getAllBoards",this.offset);
    },

     PreviousBoards: function(){
     this.offset = this.offset - 5;
     this.$store.dispatch("getAllBoards",this.offset);
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
</style>
