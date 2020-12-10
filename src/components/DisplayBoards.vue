<template>
  <div>
    <div v-for="board in boards" :key="board.id">
      {{ boards }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      boards: [],
    };
  },
  mounted() {
    this.getAllBoards();
  },
  methods: {
    getAllBoards: function() {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/boards",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          data: {},
        })
        .then((response) => {
          console.log(response);
          this.boards = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
