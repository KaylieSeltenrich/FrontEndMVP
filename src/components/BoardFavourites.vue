<template>
  <div>
    <br />
    <button id="fave" v-if="!isFaved" @click="faveBoard()">
      Favourite Board
    </button>
    <button id="unfave" v-if="isFaved" @click="unfaveBoard()">
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
          url: "https://inspo.ml/api/all-faves",
          method: "GET",
          params: {
            boardId: this.boardId,
          },
        })
        .then((response) => {
          console.log(response);
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
          url: "https://inspo.ml/api/board-favourites",
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
          url: "https://inspo.ml/api/board-favourites",
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
          this.isFaved = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="css" scoped>
#fave, #unfave{
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
</style>
