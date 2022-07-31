
<template class="order-preview" >

  <div class="order-card flex" :class="{'filter':(currStatus === 'pending')}">
    <div class="flex align-center order-right-card">
      <img class="avatar " src="" alt="">
      <div class="flex column">
        <h3>Requseted by: {{ this.order.guestsDetails.guestName }}</h3>
        <span>Sent at:{{ this.order.createAt }}</span>
        <div class="flex">
          <span>checkin</span>
          <span> checkout {{(currStatus === 'pending')}}</span>
          <span> {{ this.order.totalPrice }} {{ currStatus }}</span>
        </div>
      </div>
    </div>
    <select class="order-status" v-model="currStatus"  @change="changeStatus">
      <option v-for="(status, idx) in this.statusArry" :key="idx">
        {{ status }}
      </option>
    </select>
  </div>
</template>

<script>


export default {
  props: {
    order: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      // currOrder: {
      //   _id: this.order._id,
      //   name: this.order.stay.name,
      //   checkIn: new Date(this.order.checkin).toLocaleDateString("en", { year: "numeric", month: "short", day: "numeric" }),
      //   chackOut: new Date(this.order.checkout).toLocaleDateString("en", { year: "numeric", month: "short", day: "numeric" }),
      //   guest: this.order.guestsDetails.guestName,
      //   totalPrice: this.order.totalPrice,
      //   status: this.order.status,
      // },
      statusArry: [
        'pending',
        'Confirm',
        'Rejected',
      ],
      currStatus: this.order.status
    }
  },
  created() {
    // console.log(this.currOrder)
  },
  methods: {
    changeStatus(){
      let newOrder = {...this.order}
      newOrder.status = this.currStatus
      console.log(newOrder,"new order")
      this.$emit('changeStatus',newOrder)
    }




  },
}

</script>

