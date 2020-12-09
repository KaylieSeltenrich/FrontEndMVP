<template>
  <div class="pagecontainer">
    <div class="login-and-signup">
      <p>Email:</p>
      <input type="text" id="email-input" class="input-text" v-model="email" />
      <p>Password:</p>
      <input type="password" id="password-input" class="input-text" v-model="password" />
      <h2 @click="loginUser">Login</h2>
      <h3>{{ loginStatus }}</h3>
    </div>
  </div>
</template>

<script>

</script>

<style lang="css" scoped>

</style>