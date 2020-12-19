<template>
  <div>
    <button v-if="loginToken" @click="logOut()">
      Log Out
    </button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "logout-user",

  computed: {
    loginToken() {
      return this.$store.state.loginToken;
    }
  },

  methods: {
    logOut: function() {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/login",
          method: "DELETE",
          data: {
            loginToken: this.loginToken
          }
        })
        .then(response => {
          console.log(response);
          cookies.remove("session");
          cookies.remove("user");
          this.$store.commit("loginDelete");
          this.$router.push("/login");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="css" scoped>
button {
  font-size: 1.2em;
  background-color:rgb(156, 156, 156);
  color: white;
}
button:hover{
  background-color: rgb(104, 104, 104);
}
</style>