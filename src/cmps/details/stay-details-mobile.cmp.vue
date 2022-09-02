<template>
    <section class="stay-details-mobile">
        <div class="header">
            <div class="details-header-mob">
                <div class="exit-btn clickable">
                    <button @click.stop="goExplore" class="clickable">
                        <span>
                            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                role="presentation" focusable="false"
                                style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                                <g fill="none">
                                    <path d="m4 16h26"></path>
                                    <path
                                        d="m15 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932">
                                    </path>
                                </g>
                            </svg>
                        </span>
                    </button>
                </div>
                <div class="share-save-btns clickable">
                    <div class="share-btn">
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                            role="presentation" focusable="false"
                            style=" height: 16px; width: 16px; stroke: currentcolor; stroke-width: 2; overflow: visible; display: inline-block margin: top 10px;">
                            <g fill="none">
                                <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path>
                                <path d="M16 3v23V3z"></path>
                                <path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path>
                            </g>
                        </svg>
                    </div>
                    <div class="save-btn" @click="saveToWishlist">
                        <svg class="like save-btn" @click.prevent="saveToWishlist" viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"
                            style="stroke: currentColor; stroke-width: 2; overflow: visible;">
                            <path title="Add to wishlist" :class="{ 'red': wished, 'black': !wished }"
                                d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-mob-details" v-if="!isReservationOpen&&!isGalleryOpen">
            <div class="images-mob">
                <img v-bind:src="'/img/Images/' + stay.imgUrls[0]" alt="" class="ratio-card" @click="openGalleryMob" />
                <!-- <carousel :autoplay="5000" :items-to-show="1">
                    <slide v-for="slide in stay.imgUrls.length" :key="slide">
                        <img v-bind:src="'/img/Images/' + stay.imgUrls[slide - 1]" alt="" class="ratio-card" />
                    </slide>
                    <template #addons>
                        <navigation />
                        <pagination />
                    </template>
                </carousel> -->
            </div>
            <hr />
            <div class="host-sec">
                <div class="txt-container">
                    <h3>{{ stay.propertyType }} hosted by {{ stay.host.fullname }}</h3>
                    <p>{{ stay.capacity.guests }} guests <span class="dot"></span> {{ stay.capacity.bedrooms }} bedrooms
                        <span class="dot"></span>
                        {{ stay.capacity.beds }} beds <span class="dot"></span> {{ stay.capacity.bathrooms }} bathrooms
                    </p>
                </div>
                <div>
                    <img :src="'/img/peopleImages/' + this.avatarImg" class="avatar" alt="">
                </div>
            </div>
            <hr />
            <extras-details />
            <hr />
            <div class="stay-desc">
                <p>{{ stay.description }}</p>
            </div>
            <hr />
            <div class="amenities-mobile">
                <amenities-details :stay="stay" id="reviews" />
            </div>
            <hr />
            <div class="map-container-mob">
                <details-map :stay="stay" />
                <div>{{ stay.loc.street }}</div>
            </div>
            <hr />
            <div class="date-picker-mob">
                <Datepicker v-model="date" modelType="dd.MM.yyyy" @update:modelValue="handleDate" autoApply inline
                    textInput inlineWithInput inputClassName="dp-custom-input" menuClassName="dp-custom-menu" range
                    hideInputIcon calendarClassName="dp-custom-calendar" calendarCellClassName="dp-custom-cell">
                </Datepicker>
            </div>
            <div v-for="review in stay.reviews" class="details-review-mobile">
                <div class="details-review-header-mob">
                    <img class="avatar" src="@/assets/images/avatar.png" alt="" />
                    <div class="review-title">
                        <span>{{ review.by.fullname }}</span>
                        <div class="review-date">june 2022</div>
                    </div>
                </div>
                <div class="review-txt">{{ review.txt }}</div>
            </div>
            <div class="footer">
                <h2>
                    <span class="price">
                        ${{ stay.price }}
                    </span>
                    
                    <span class="night">night</span>
                </h2>
                <button class="reserve-btn" @click="openOrderMob">Reserve </button>
            </div>
        </div>
        <div v-if="isReservationOpen">
            <reservation-details-mobile :stay="stay" />
        </div>
        <div v-if="isGalleryOpen">
            <galleryMobile :stay="stay"/>
        </div>
    </section>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { toRaw } from 'vue'
import galleryMobile from './gallery-mobile.cmp.vue'

import imageGallery from './image-gallery.cmp.vue'
import ExtrasDetails from './extras-details.cmp.vue'
import amenitiesDetails from "./details-amenities.cmp.vue"
import detailsMap from '../details-map.cmp.vue'
import datePickerMobile from '../date-picker-mobile.cmp.vue'
import reservationDetailsMobile from './reservation-details-mobile.cmp.vue'

export default {
    name: 'stay-details-mobile',
    props: {
        stay: {
            type: Object,
            requird: true
        },
    },
    created() {
        this.handleHeader('none')
        this.handleFooter('hidden')
        console.log(this.stay)

        this.wished = this.stay.wished
    },
    unmounted() {
        this.handleHeader('flex')
        this.handleFooter('visible')
    },
    data() {
        return {
            avatarImg: this.stay.host.pictureUrl,
            date: null,
            isReservationOpen: false,
            wished: false,
            isGalleryOpen:false
        }
    },
    methods: {
        goExplore() {
            this.$router.push('/explore')
        },
        openOrderMob() {
            this.isReservationOpen = !this.isReservationOpen
        },
        openGalleryMob() {
            this.isGalleryOpen = !this.isGalleryOpen
        },
        async saveToWishlist() {
            try {
                let newStay = { ...this.stay }
                newStay.wished = !newStay.wished
                this.$store.dispatch({ type: 'saveStay', stay: newStay })
                await this.$store.dispatch({ type: 'loadStays' })
                // this.$router.push('/wishlist')
            } catch (err) {
                console.log(err)
            }
        },
        handleDate(val) {
            this.date = toRaw(val)
            console.log(this.date)


        },
        handleHeader(val) {
            document.querySelector('.mini-search-mobile').style.display = val
        },
        handleFooter(val) {
            document.querySelector('.footer-mobile').style.visibility = val
        },
    },
    computed: {
        format() {
            const res = toRaw(this.date)
            return res
        },
    },
    components: {
        imageGallery,
        ExtrasDetails,
        amenitiesDetails,
        detailsMap,
        datePickerMobile,
        Carousel,
        Slide,
        Pagination,
        Navigation,
        reservationDetailsMobile,
        galleryMobile
    }
}
</script>

<style>
.carousel__prev,
.carousel__next {
    margin: 0 10px;
}
</style>

