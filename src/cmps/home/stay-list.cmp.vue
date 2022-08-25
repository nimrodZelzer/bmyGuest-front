<template>
  <ul class="stay-list main-layout" v-if="stays">
    <stay-preview @addToWishList="addToWishList" v-for="stay in stays" :stay="stay" :key="stay.id" />
  </ul>
  <div v-else>No stays to show</div>
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
