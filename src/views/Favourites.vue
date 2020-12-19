<template>
  <div>
    <div id="error" v-if="!loginToken">
      <h1>Oops!</h1>
      <h3>
        You appear to not be logged in. Please either log in or signup to acess
        this page. Thank you!
      </h3>
    </div>
    <div v-if="loginToken != undefined" class="favourites">
      <display-favourite-boards> </display-favourite-boards>
    </div>
  </div>
</template>

<script>
import DisplayFavouriteBoards from "../components/DisplayFavouriteBoards.vue";

export default {
  name: "Favourites",
  components: {
    DisplayFavouriteBoards,
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
  min-height: 50vh;
  margin-top: 4%;
}
</style>
