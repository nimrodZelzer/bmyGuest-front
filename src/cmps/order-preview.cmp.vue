<template >

    <div class="flex wishlist-preview">
        <img :src="'/img/Images/' + stay.imgUrls[0]" alt="">
        <div class="left-container flex column">
            <div class="order-title-container">
                <h2>{{ stay.loc.city }}</h2>
                <p>{{ stay.roomType }} in {{ stay.propertyType }} hosted by {{ stay.host.fullname }}</p>
            </div>
            <div class="order-date-container">
                <span>
                    {{ order.startDate.toLocaleString('default', { month: 'short' }) }}
                    {{ this.order.startDate.getDate() }}
                </span>
                <span>
                    {{ order.endDate.toLocaleString('default', { month: 'short' }) }}
                    {{ this.order.endDate.getDate() }}
                </span>
                <span></span>
            </div>
        </div>
    </div>
</template>
<script>
import carusel from '../cmps/home/carusel.cmp.vue';
export default {
    props: {
        order: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            stay: null,
            nights: 0
        };
    },
    created() {
        this.$store.dispatch({ type: "loadById", id: this.order.stayId })
        this.stay = this.$store.getters.getCurrStay
        this.reservationValue()
    },
    methods: {
        reservationValue() {
            const _MS_PER_DAY = 1000 * 60 * 60 * 24;
            // Discard the time and time-zone information.
            const utc1 = Date.UTC(this.order.startDate.getFullYear(), this.order.startDate.getMonth(), this.order.startDate.getDate());
            const utc2 = Date.UTC(this.order.endDate.getFullYear(), this.order.endDate.getMonth(), this.order.endDate.getDate());
            this.nights = (Math.floor((utc2 - utc1) / _MS_PER_DAY))
        },
    },
    computed: {},
    unmounted() { },
    components: {
        carusel
    }
};
</script>
<style >
</style>