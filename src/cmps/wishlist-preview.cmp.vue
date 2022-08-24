<template >
    <div class="flex wishlist-preview" @click="goToDetails">
        <img :src="'/img/Images/' + stay.imgUrls[0]" alt="">
        <div class="left-container flex column">
            <div>
                <h5>{{ stay.roomType }}</h5>
                <div class="txt-container">
                    <h3>{{ stay.name }}</h3>
                    <p>{{ stay.capacity.guests }} guests - {{ stay.capacity.bedrooms }} bedrooms -
                        {{ stay.capacity.beds }} beds - {{ stay.capacity.bathrooms }} bathrooms </p>
                </div>
            </div>
            <div class="bottm-txt">
                <span class="wish-review"><span><i class="fa fa-star red"></i></span>{{ stay.reviewScores.rating / 2 / 10
                }}
                    <span class="gray">({{ stay.reviews.length }} reviews)</span></span>
                <div>
                    <p> <span class="price">${{ stay.price }} &nbsp;</span>night</p>
                    <!-- <p>${{stay.price * nights}} total</p> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import carusel from '../cmps/home/carusel.cmp.vue';
export default {
    props: {
        stay: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            nights: 0
        };
    },
    created() {
        // this.$store.dispatch({ type: "loadById", id: this.order.stayId })
        // this.stay = this.$store.getters.getCurrStay
        // this.reservationValue()
    },
    methods: {
        reservationValue() {
            const _MS_PER_DAY = 1000 * 60 * 60 * 24;
            // Discard the time and time-zone information.
            const utc1 = Date.UTC(this.order.startDate.getFullYear(), this.order.startDate.getMonth(), this.order.startDate.getDate());
            const utc2 = Date.UTC(this.order.endDate.getFullYear(), this.order.endDate.getMonth(), this.order.endDate.getDate());
            this.nights = (Math.floor((utc2 - utc1) / _MS_PER_DAY))
        },
        goToDetails() {
            this.$router.push(`/stay/${this.stay._id}`)
        }
    },
    computed: {},
    unmounted() { },
    components: {
        carusel
    }
};
</script>
<style >
.width {
    width: 100px;
    height: 100px;
    margin: auto;
}
</style>