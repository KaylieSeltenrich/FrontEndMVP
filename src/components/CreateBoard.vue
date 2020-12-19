<template>
  <div>
    <p>Title:</p>
    <input type="text" v-model="title">
    <button @click="createBoard()">Save Board</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
data() {
    return {
        title: "",
    }
},
  computed: {
    loginToken() {
      return this.$store.state.loginToken;
    },
  },
  props: {
      image: {
          type: String,
      },
      colors: {
          type: Array,
      }
  },
  methods: {
    createBoard: function() {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/boards",
          method: "POST",
          data: {
              title: this.title,
              loginToken: this.loginToken,
              colors: this.colors,
              image: this.image,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="css" scoped>
div{
  margin-bottom: 5%;
}
p{ 
  font-weight: bold;
  font-size: 1.2em;
}
</style>
