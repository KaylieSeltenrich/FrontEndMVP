<template>
  <div>
    <input type="text" placeholder="Input Image URL" v-model="imageinput" />
    <button @click="submitted = true"> Submit Image</button>
    <pallette-image v-if="submitted" :image="imageinput"> </pallette-image>
  </div>
</template>

<script>
import PalletteImage from './PalletteImage.vue';

export default {
  components: { PalletteImage },
  data() {
    return {
    imageinput: "",
    submitted: false,
    };
  },

}

</script>

<style lang="css" scoped>
</style>
