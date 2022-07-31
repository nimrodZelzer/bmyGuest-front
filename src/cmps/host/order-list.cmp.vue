<template>

  <ul class="order-list" v-if="orders">
    <orderPreview @changeStatus="changeStatus" v-for="order in  orders" :order="order" :key="order._id" />
  </ul>

</template>

<script>

import orderPreview from './orderPreview.cmp.vue'


export default {
  props: {
    orders: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {

    }
  },
  components: {
    orderPreview,

  },
  methods: {
      changeStatus(order){
      this.$emit('changeStatus',order)
    }

  },
  created() {

  }

}
</script>
