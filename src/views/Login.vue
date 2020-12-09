<template>
  <div class="login">
  <user-login> </user-login>
  </div>
</template>

<script>
// @ is an alias to /src
import UserLogin from "@/components/UserLogin.vue";

export default {
  name: "Login",
  components: {
    UserLogin
  }
};
</script>
