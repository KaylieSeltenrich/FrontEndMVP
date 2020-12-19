<template>
  <div>
    <div v-if="!loginToken">
      <h1>Oops!</h1>
      <h3>
        You appear to not be logged in. Please either log in or signup to acess
        this page. Thank you!
      </h3>
    </div>
    <div v-if="loginToken != undefined" class="profile">
      <update-profile> </update-profile>
      <display-user-boards> </display-user-boards>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DisplayUserBoards from "@/components/DisplayUserBoards.vue";
import UpdateProfile from "@/components/UpdateProfile.vue";

export default {
  name: "Profile",
  components: {
    DisplayUserBoards,
    UpdateProfile,
  },
  computed: {
    loginToken() {
      return this.$store.state.loginToken;
    },
  },
};
</script>
