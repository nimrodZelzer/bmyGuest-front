
<template>
    <section class="dashboard-host-page main-layout">
        <div class="dash-board-header">
            <h1>Incoming Reservation</h1>
            <span>{{ this.orders.length }} items</span>
        </div>
        <div class="dash-board-details flex ">
            <order-list @changeStatus='changeStatus' :orders="orders" />
            <div class="dash-board-summary">
                <div class="summary-header flex align-center">
                    <div>
                        <h2>Hosting Summary</h2>
                        <h3>Fantastic job!</h3>
                        <p>guests love what your doing keep up the good work</p>
                        <span>view details</span>
                    </div>
                    <img src="https://icons-for-free.com/download-icon-complete+done+green+success+valid+icon-1320183462969251652_256.ico" alt="">
                    <!-- <img src="src\assets\images\success-svgrepo-com.svg" alt=""> -->
                </div>
                <div class="earnings-container ">
                    <div class="flex  justify-between"><span>August earnings</span><span  class="green">2650$</span></div>
                    <div class="flex  justify-between"><span>30 day reviews</span><span class="green">870</span></div>
                </div>
                <div class="overall-container">
                    <div class="flex justify-between"><span>Overall ratings</span><span  class="green">4.9 <i class="fa fa-star"></i></span></div>
                    <div class="flex justify-between"><span>Total reviews</span><span  class="green">40</span></div>
                </div>
                <div class="flex justify-between">
                    <img class="bottom-pic" src="https://freesvg.org/img/Gerald_G_House_sitting_on_a_pile_of_money.png" alt="">
                </div>
            </div>
            <!-- <div class="chart ">
                <orderByMonths />
            </div> -->
        </div>
        <!-- <h2>Your Orders</h2>
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
        </div> -->
        <div class="hostStayList">
            <h2>Your Stay List</h2>
            <stay-list style="padding:40px 0;" :stays="this.stays" />
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
// import userWishlistVue from "./user-wishlist.vue"

export default {
    name: 'deshboard-host',
    props: {
        user: Object,
    },
    data() {
        return {
            orderByMonth:null,
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
            this.orders = await this.$store.dispatch({ type: 'getOrderByHost', id: '62e0e9b1dd13b00af4e80283' })
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

    },


    components: {
        orderList,
        totalPriceChart,
        orderByMonths,
        stayList,
        selectStays,
        orderFilter,
        // userWishlist

    },
    computed: {

    },
}
</script>
