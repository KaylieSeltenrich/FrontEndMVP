<template>
  <div>
    <div id="likes-text">Likes: {{ likesAmount }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    this.getLikes();
  },

  data() {
    return {
      boardLikes: [],
      likesAmount: 0,
    };
  },

  props: {
    boardId: {
      type: Number,
    },
  },

  methods: {
    getLikes: function() {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/board-likes",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P",
          },
          params: {
            boardId: this.boardId,
          },
        })
        .then((response) => {
          this.boardLikes = response.data;
          this.likesAmount = this.boardLikes.length;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
