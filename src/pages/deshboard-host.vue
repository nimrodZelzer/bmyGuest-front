
<template>
    <section class="dashboard-host-page main-layout">
        <div class="charts flex">
            <div class="chart">
                {{ this.datasets }}
                <totalPriceChart v-if="this.prices" :datasets="this.datasets" />
            </div>
            <div class="chart ">
                <orderByMonths />
            </div>
        </div>
        <h2>Your Orders</h2>

        <div class="order-table">
            <div class="order-filter flex">
                <orderFilter />
            </div>
            <div class="order-table-header">
                <span class="title">Date Of Order</span>
                <span class="check-in">Check In</span>
                <span class="check-out">Check Out</span>
                <span class="guest-name">Name</span>
                <span class="price">Price</span>
                <span class="status">Status</span>
            </div>

            <order-list :orders="orders" />
        </div>
        <div class="hostStayList">
            <h2>Your Stay List</h2>
            <stay-list :stays="this.stays" />
        </div>
    </section>
</template>

<script>
import orderList from "../cmps/host/order-list.cmp.vue"
import totalPriceChart from "../cmps/host/total-price-chart.cmp.vue"
import orderByMonths from "../cmps/host/order-by-months.cmp.vue"
import stayList from "../cmps/home/stay-list.cmp.vue"
import selectStays from "../cmps/host/select-stays.cmp.vue"
import orderFilter from "../cmps/host/order-filter.cmp.vue"
import { socketService } from "../services/socket.service.js"
export default {
    name: 'deshboard-host',
    props: {
        user: Object,
    },
    data() {
        return {
            orderByMonth: null,
            orders: null,
            stays: null,
            prices: null,
            datasets: [
                {
                    data: [],
                    backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
                },
            ],
        }
    },
    async created() {

        try {
            const orders = await this.$store.dispatch({ type: 'getOrderByHost', id: '62e0e9b1dd13b00af4e80283' })
            this.orders = orders
            socketService.on('order-added', this.addOrder)
        } catch (err) {
            console.log(" Error in read orders", err)
            throw err
        }
        try {
            const stays = await this.$store.dispatch({ type: 'getStaysByHost', id: '62e0e9b1dd13b00af4e80283' })
            this.stays = stays
        } catch (err) {
            console.log(" Error in read orders", err)
            throw err
        }

        try {
            this.prices = await this.$store.getters.getTotalPrices
            this.datasets[0].data.push(prices)
            this.datasets[0].data = await this.$store.getters.getTotalPrices


        } catch (err) {
            console.log(" Error in read orders by price", err)
            throw err
        }
        try {
            this.orderByMonth = await this.$store.getters.getOrderPerMonth
            console.log(this.orderByMonth)
        } catch (err) {
            console.log(" Error in read orders by price", err)
            throw err
        }



    },
    methods: {
        dataset() {
            return [
                {
                    data: this.prices,
                    backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
                },
            ]

        }

    },


    components: {
        orderList,
        totalPriceChart,
        orderByMonths,
        stayList,
        selectStays,
        orderFilter,

    },
    computed: {
        // user() {
        //     return this.$store.getters.loggedinUser
        // },
        // host() {
        //     return this.$store.getters.loggedinUser[0]
        // },
    },
}
</script>



