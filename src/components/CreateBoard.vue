<template>
  <div>
    <p>Title:</p>
    <input type="text" v-model="title">
    <button @click="createBoard($event.currentTarget)">Save Board</button>
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
    createBoard: function(button) {
      axios
        .request({
          url: "https://inspo.ml/api/boards",
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
          button.innerHTML = "Saved Succesfully!"
        })
        .catch((error) => {
          console.log(error);
          button.innerHTML = "Error Saving!"
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


@media only screen and (min-width: 768px) {
p{ 
  font-weight: bold;
  font-size: 1.6em;
}
input{
  height: 3vh;
  width: 50%;
  font-size: 1.2em;
}
button{
  height: 4vh;
  width: 20%;
  font-weight: bold;
}
}

@media only screen and (min-width: 1024px) {
p{ 
  font-weight: bold;
  font-size: 1.6em;
}
input{
  height: 3vh;
  width: 50%;
  font-size: 1.2em;
}
button{
  height: 4vh;
  width: 20%;
  font-weight: bold;
}
}


</style>
