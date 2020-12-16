<template>
  <div class="favourites">
   <display-favourite-boards> </display-favourite-boards>
  </div>
</template>

<script>
import DisplayFavouriteBoards from '../components/DisplayFavouriteBoards.vue';


export default {
  name: "Favourites",
  components: {
  DisplayFavouriteBoards,
  }
};
</script>
