<template>
    <div id="image-container">
      <pallette-image id="palletteimage" v-for="image in images" :image="image.src.medium" :key="image.src.medium">
      </pallette-image>
   </div>
</template>

<script>
import PalletteImage from "./PalletteImage.vue"

export default {
  components: {
    PalletteImage,
  },
computed: {
        images() {
            return this.$store.state.images
        }
    },
    }
</script>

<style lang="css" scoped>
#image-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    object-fit: contain;
}

@media (max-width: 600px) {

#image-container {
    display: grid;
    grid-template-columns: 1fr;
    object-fit: contain;
}

}

</style>