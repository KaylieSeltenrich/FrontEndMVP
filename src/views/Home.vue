<template>
  <div>
    <div id="error" v-if="!loginToken">
      <h1>
        Welcome to Inspo! Please Signup or Login to continue.
      </h1>
      <p>
        With Inspo you can generate colour pallettes from images that you either
        input yourself or use the search bar. The purpose is to
        inspire creativity for all artists and designers! <br />
        This website was created as my MVP project for Innotech College using
        Vue, Javascript, and Flask. The entire frontend and backend was built from scratch.
      </p>
       <router-link class="link" to="/login"> Login</router-link>
        <router-link class="link" to="/signup"> Signup</router-link>
    </div>
    <div v-if="loginToken != undefined" class="home">
      <display-boards></display-boards>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DisplayBoards from "@/components/DisplayBoards.vue";

export default {
  name: "Home",

  components: {
    DisplayBoards,
  },

  computed: {
    loginToken() {
      return this.$store.state.loginToken;
    },
  },
};
</script>

<style lang="css" scoped>
#error {
  min-height: 40vh;
}

h1 {
  margin-top: 10%;
}

.link {
 margin: 2%;
 height: 5vh;
 font-size: 1.3em;
 font-weight: bold;
 color: black;
}
@media (min-width: 1024px) {
.link {
 margin: 2%;
 height: 5vh;
 font-size: 1.3em;
 font-weight: bold;
 color: black;
 width: 50%;
 margin-left: 25%;
 border: 1px solid grey;
}

#error {
  min-height: 50vh;
}

h1 {
margin-top: 5%;
}
}
</style>
