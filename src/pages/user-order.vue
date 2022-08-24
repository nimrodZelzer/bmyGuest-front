

<template >
    <section v-if="user" class="order-page main-layout">
        <div class="dash-board-header">
            <h1>Your Reservation</h1>
            <span>{{ this.orders.length }} items</span>
        </div>
        <div class="dash-board-details flex ">
            <order-list @changeStatus='changeStatus' :orders="orders" />
        </div>
    </section>
</template>

<script>
import orderList from "../cmps/host/order-list-user.cmp.vue"
import { socketService } from '../services/socket.service.js'

export default {
    name: 'deshboard-host',
    props: {
        user: Object,
    },
    data() {
        return {
            user: null,
            orders: null,
        }
    },
    async created() {
        try {
            this.user = await this.$store.getters.loggedinUser
        } catch (err) {
            console.log(" Error in read orders", err)
            throw err
        }
        try {
            this.orders = await this.$store.dispatch({ type: 'getOrderByUser', id: this.user._id })
        } catch (err) {
            console.log(" Error in read orders", err)
            throw err
        }
        socketService.on("order-added", async (order) => {
            // this.orders.push(order)
            this.orders = this.$store.dispatch({ type: 'getOrderByUser', id: this.user._id })
        })
    },
    methods: {

    },


    components: {
        orderList,


    },
    computed: {

    },
}
</script>
