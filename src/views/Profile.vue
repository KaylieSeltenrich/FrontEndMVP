<template>
  <div class="profile">
<update-profile> </update-profile>
 <display-user-boards> </display-user-boards>
  </div>
</template>

<script>
// @ is an alias to /src
import DisplayUserBoards from "@/components/DisplayUserBoards.vue";
import UpdateProfile from "@/components/UpdateProfile.vue"

export default {
  name: "Profile",
  components: {
  DisplayUserBoards,
  UpdateProfile

  }
};
</script>
