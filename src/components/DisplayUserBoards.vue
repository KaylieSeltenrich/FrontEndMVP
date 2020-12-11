<template>
  <div>
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
      </div>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";

export default {
    mounted () {
        if(this.$store.state.boards.length == 0){
           this.$store.dispatch("getAllBoards");
        }

    },
  data() {
    return {
      userId: cookies.get("user"),
    };
  },
  computed: {
    userBoards() {
      return this.$store.getters.getUsersBoards;
    },
  },
};
</script>

<style lang="scss" scoped></style>
