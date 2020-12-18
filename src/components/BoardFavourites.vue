<template>
  <div>
    <br/>
    <button v-if="!isFaved" @click="faveBoard()">
      Favourite Board
    </button>
    <button v-if="isFaved" @click="unfaveBoard()">
      UnFavourite Board
    </button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  mounted() {
    this.getFaves();
  },

  data() {
    return {
      boardFaves: [],
      loginToken: cookies.get("session"),
      isFaved: false,
      userId: cookies.get("user"),
    };
  },

  props: {
    boardId: {
      type: Number,
    },
    ownerId: {
      type: Number,
    },
  },

  methods: {
    getFaves: function() {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/all-faves",
          method: "GET",
          params: {
            boardId: this.boardId,
          },
        })
        .then((response) => {
          console.log(response)
          this.boardFaves = response.data;
          this.isFaved =
            this.boardFaves.filter((boardFave) => {
              return boardFave.userId == this.userId;
            }).length == 1;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    faveBoard: function() {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/board-favourites",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            id: this.boardId,
            loginToken: this.loginToken,
          },
        })
        .then((response) => {
          console.log(response);
          this.isFaved = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    unfaveBoard: function() {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/board-favourites",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            id: this.boardId,
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

<style lang="scss" scoped></style>
