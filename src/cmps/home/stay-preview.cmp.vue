<template class="stay-preview" >
    <div class="card">
        <div class="card-img" @click="goToDetail">
            <carusel :stay="stay" />
            <button v-if="stay.host.isSuperhost" class="superhost-btn">Superhost</button>
            <svg class="like" @click.stop="addToWishList" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true" role="presentation" focusable="false"
                style="stroke: currentColor; stroke-width: 2; overflow: visible;">
                <path @click="addToWishList && (wished = !wished)" :class="{ 'red': wished, 'black': !wished }"
                    d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z">
                </path>
            </svg>

        </div>

        <div class="card-txt">
            <div class="title flex">
                <span v-if="stay.loc" class="bold score">{{ stay.loc.city }} {{ stay.loc.country }}</span><span
                    class="flex gap align-center"><svg class="bold" viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"
                        style="display: block; height: 12px; width: 12px; fill: currentcolor;">
                        <path
                            d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                            fill-rule="evenodd"></path>
                    </svg>{{
                            (stay.reviewScores.rating / 20).toFixed(2)
                    }} ({{ stay.reviews.length }})</span>
            </div>
            <div class="main-txt flex ">
                <span class="preview-description">{{ stay.description }}</span>
                <span>{{ stay.capacity.beds }} beds</span>
                <!-- <span v-if="stay.host.isSuperhost">Professional Host</span> -->
                <!-- <span v-else>Individual Host</span> -->
            </div>

            <span class="price flex gap"><span class="bold">${{ stay.price }}</span>night</span>
            <!-- <router-link :to="'stay/'+stay._id">Become a Host</router-link> -->

        </div>

    </div>
</template>

<script>

import carusel from './carusel.cmp.vue'

export default {
    name: 'stay-preview',
    props: {
        stay: Object,
    },
    data() {
        return {
            isMouseOver: false,
            description: "",
            wished: false
        }
    },
    created() {
        // this.description = this.stay.description.split(' ').slice(0, 4).join(" ");
        // this.wished = this.$store.getters.getIsWished
        // console.log("wish creted as", this.wished)
        this.wished = this.stay.wished
        // console.log(this.stay.wished, "staysssssssss")
    },
    methods: {
        goToDetail() {
            this.$router.push(`/stay/${this.stay._id}`)
            // this.$store.dispatch({ type: 'loadById', id: this.stay._id })
        },
        addToWishList() {
            // this.wished ? showSuccessMsg("added to wishlist") : showSuccessMsg('removed from wishlist')
            this.$emit("addToWishList", this.stay)
        }
    },
    computed: {},
    components: {
        carusel,

    },
}

</script>

