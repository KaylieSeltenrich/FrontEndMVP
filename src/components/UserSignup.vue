<template>
  <div class="pagecontainer">
    <div class="login-and-signup">
      <p>Username:</p>
      <input type="text"  v-model="username" />
      <p>Email:</p>
      <input type="text" v-model="email" />
      <p>Password:</p>
      <input type="password" v-model="password" />
      <h2 @click="createUser">Sign Up</h2>
    </div>
  </div>
</template>

<script>

</script>

<style lang="css" scoped>

</style>