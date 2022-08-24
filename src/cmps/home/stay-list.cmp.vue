<template>
  <ul class="stay-list main-layout">
    <stay-preview @addToWishList="addToWishList" v-for="stay in stays" :stay="stay" :key="stay.id" />
  </ul>
</template>

<script>
import stayPreview from './stay-preview.cmp.vue'

export default {
  props: {
    stays: {
      type: Array,
      required: true,
    },
  },
  components: {
    stayPreview,
  },
  methods: {
    addToWishList(stay) {
      this.$emit("addToWishList", stay)
    }
  },
}
</script>
