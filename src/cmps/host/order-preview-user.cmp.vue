
<template class="order-preview" >

  <div class="order-card flex">
    <div class="flex align-center order-right-card">
      <div class="left flex column">
        <div class="guest-details-container flex">
          <div class="content flex column">
            <span class="username">Host Name:{{ order.host.hostName }}</span>
            <span>{{ order.stay.name }}</span>
            <span>{{ order.totalNight }}</span>
          </div>
        </div>
        <div class="dates">
          <span>Dates: <span style="font-family: airbnb-medium">{{ order.checkin.substring(0, 10) }} - {{
              order.checkout.substring(0, 10)
          }}</span></span>
        </div>
      </div>
    </div>
    <div class="right flex column">
      <div class="order-status" :class="newOrder.status" style="border-color: $clr7">
        {{ order.status }}
      </div>

      <span>Total price: <span style="font-family: airbnb-medium">${{ order.totalPrice }}</span></span>
    </div>
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
      statusArry: [
        'Pending',
        'Confirm',
        'Rejected',
      ],
      newOrder: null
    }
  },
  created() {
    this.newOrder = { ...this.order }
    console.log('orderr', this.newOrder);
  },
  methods: {
    // changeStatus(){
    //   let newOrder = {...this.order}
    //   newOrder.status = this.currStatus
    //   console.log(newOrder,"new order")
    //   this.$emit('changeStatus',newOrder)
    // }

    changeStatus() {
      console.log(this.order.status)
      this.$store.dispatch({
        type: 'changeOrderStatus',
        order: this.newOrder
      })
    },
  },
}

</script>

