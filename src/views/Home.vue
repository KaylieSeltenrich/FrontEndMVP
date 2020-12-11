<template>
  <div class="home">
  <display-boards></display-boards>
  </div>
</template>

<script>
// @ is an alias to /src
import DisplayBoards from "@/components/DisplayBoards.vue";


export default {
  name: "Home",

  components: {
    DisplayBoards,
  },
  
};
</script>
