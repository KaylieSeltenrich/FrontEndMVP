<template>
  <div>
    <div id="likes-text">Likes: {{ likesAmount }}</div>
    <button
      id="like"
      v-if="!isLiked && userId != ownerId && showButton"
      @click="likeBoard()"
    >
      Like Board
    </button>
    <button
      id="unlike"
      v-if="isLiked && userId != ownerId && showButton"
      @click="unlikeBoard()"
    >
      Unlike Board
    </button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  mounted() {
    this.getLikes();
  },

  data() {
    return {
      boardLikes: [],
      likesAmount: 0,
      loginToken: cookies.get("session"),
      isLiked: true,
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
    showButton: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    getLikes: function() {
      axios
        .request({
          url: "https://inspo.ml/api/board-likes",
          method: "GET",
          params: {
            boardId: this.boardId,
          },
        })
        .then((response) => {
          this.boardLikes = response.data;
          this.likesAmount = this.boardLikes.length;
          this.isLiked =
            this.boardLikes.filter((boardLike) => {
              return boardLike.userId == this.userId;
            }).length == 1;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    likeBoard: function() {
      axios
        .request({
          url: "https://inspo.ml/api/board-likes",
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
          this.isLiked = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    unlikeBoard: function() {
      axios
        .request({
          url: "https://inspo.ml/api/board-likes",
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
          this.boardLikes = response.data;
          this.likesAmount = this.boardLikes.length;
          this.isLiked =
            this.boardLikes.filter((boardLike) => {
              return boardLike.userId == this.userId;
            }).length == 1;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="css" scoped>
#like,
#unlike {
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
}

#likes-text{
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 5%;
}
</style>
