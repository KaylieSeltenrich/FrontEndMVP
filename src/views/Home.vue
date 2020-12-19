<template>
  <div>
    <div v-if="!loginToken">
      <h1>Oops!</h1>
      <h3>
        You appear to not be logged in. Please either log in or signup to acess
        this page. Thank you!
      </h3>
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
