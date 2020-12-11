<template>
  <div class="profile">
 <display-user-boards> </display-user-boards>
  </div>
</template>

<script>
// @ is an alias to /src
import DisplayUserBoards from "@/components/DisplayUserBoards.vue"

export default {
  name: "Profile",
  components: {
  DisplayUserBoards
  }
};
</script>
