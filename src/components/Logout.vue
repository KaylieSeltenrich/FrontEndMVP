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
          url: "https://inspo.ml/api/login",
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

@media (max-width: 768px) {
button {
  font-size: 1.2em;
  background-color:rgb(156, 156, 156);
  color: white;
  height: 5vh;
 
}
button:hover{
  background-color: rgb(104, 104, 104);
}
}


@media (min-width: 1024px) {
button {

  font-size: 1.2em;
  background-color:rgb(156, 156, 156);
  color: white;
  height: 8vh;
  width: 15vw;
 
}
button:hover{
  background-color: rgb(104, 104, 104);
}
}

</style>