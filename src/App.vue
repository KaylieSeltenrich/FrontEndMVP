<template>
  <div id="app">
     <button id="hamburger" @click="showNav()"> <img src="@/assets/hamburger.png" width="50px" alt="hamburger menu"> </button>
    <img src="@/assets/inspologo.png" alt="Logo image" width="500px" />
    <div id="nav" v-if="loginToken != undefined">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/create">Create</router-link>
      <router-link class="link" to="/profile">Profile</router-link>
      <router-link class="link" to="/favourites">Favourites</router-link>
      <router-link class="link" to="/mostliked">Most Liked</router-link>
    </div>
    <div id="logout" v-if="loginToken != undefined">
      <logout> </logout>
    </div>
    <div id="nav" v-else>
      <router-link class="link" to="/login"> Login</router-link>
      <router-link class="link" to="/signup"> Signup </router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import Logout from "./components/Logout.vue";

export default {
  components: {
    Logout,
  },
  computed: {
    loginToken() {
      return this.$store.state.loginToken;
    },
  },

  methods: {
  showNav: function() {
  var x = document.getElementById("nav");
  if (x.style.display === "none") {
    x.style.display = "grid";
  } else {
    x.style.display = "none";
  }
}
  },
};
</script>
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: none;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 5%;
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
  margin-top: 5%;
  
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #b2adb7;
}

.link {
  margin: 10%;
  border: 1px solid rgb(131, 131, 131);
  padding: 5%;
  text-decoration: none;
 
}

#hamburger {
  position: fixed;
  top: 0;
  left: 0;
  margin: 5%;
}


</style>
