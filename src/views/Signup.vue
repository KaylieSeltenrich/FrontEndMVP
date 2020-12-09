<template>
  <div class="signup">
      <user-signup> </user-signup>
  </div>
</template>

<script>
// @ is an alias to /src
import UserSignup from "@/components/UserSignup.vue";
export default {
  name: "Signup",
  components: {
  UserSignup
  }
};
</script>