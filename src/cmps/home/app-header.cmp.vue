<template>
    <div class="app-header main-layout" :class="{
        'header-container': !miniSearch,
        'close-header': miniSearch,
    }">
        <section :class="{ 'stay-details': isStayDetails, 'explore-page': explorePage }">
            <section class="top-header flex">
                <div class="logo">
                    <h1 @click.stop="goHome">
                        <span>
                            <i class="fa-brands fa-airbnb logo-icon"></i>
                        </span>
                        <span class="logo-txt">
                            BmyGuest
                        </span>
                    </h1>
                </div>
                <div @click.stop="openSearchBar" class="search-close">
                    <div v-if="miniSearch" class="mini-search clickable">
                        <label>Anywhere</label>
                        <label>Any week</label>
                        <label>Add guests</label>
                        <span></span>
                    </div>
                </div>
                <header-nav :stays="stays" />
            </section>
            <open-header v-if="!miniSearch" @openHeader="open(value)" />
        </section>
    </div>

    <template v-if="isShow">
        <section class="mobile clickable">
            <div class="mini-search-mobile">
                <span>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                        focusable="false" style="display: block; height: 16px; width: 16px; fill: currentcolor;">
                        <path
                            d="M13 0c7.18 0 13 5.82 13 13 0 2.868-.929 5.519-2.502 7.669l7.916 7.917-2.828 2.828-7.917-7.916A12.942 12.942 0 0 1 13 26C5.82 26 0 20.18 0 13S5.82 0 13 0zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"
                            opacity=".8"></path>
                    </svg>
                </span>
                <div class="mobile-content" @click.stop="isShow = !isShow">
                    <div>
                        <label>where to?</label>
                    </div>
                    <div class="mspans">
                        <label>Anywhere</label>
                        <label>Any week</label>
                        <label>Add guests</label>
                    </div>
                </div>
                <div class="mobile-filter" @click.prevent="openFilterMb = !openFilterMb">
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                        focusable="false" style="display: block; height: 16px; width: 16px; fill: rgb(34, 34, 34);">
                        <path
                            d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z">
                        </path>
                    </svg>
                </div>
                <header-filter v-if="openFilterMb" :stays="stays" />
            </div>
        </section>
    </template>
    <template v-else>
        <section class="mobile-open-header">
            <open-header-mobile :isShow="isShow" @isShow="closeOpenHdr" />
        </section>
    </template>
</template>

<script>
import datePicker from "./date-picker.cmp.vue"
import headerNav from "./header-nav.cmp.vue"
import openHeader from "./open-header.cmp.vue"
import openHeaderMobile from "./open-header-mobile.cmp.vue"
import headerFilter from './header-filter.cmp.vue'
export default {
    props: {
        stays: {
            type: Array
        }
    },
    data() {
        return {
            showMenu: false,
            scrolldown: 0,
            openSearch: false,
            miniSearch: true,
            pageTop: 0,
            currPage: null,
            dates: [],
            isStayDetails: false,
            isMobOpen: true,
            isShow: true,
            openFilterMb: false,
        }
    },
    created() {
        window.addEventListener("scroll", this.handleScroll)
        this.miniSearch = true
        // this.$emit("minisearch", true)
    },
    mounted() {
        this.miniSearch = true
    },
    methods: {
        open(value) {
            // console.log(value)
        },
        closeOpenHdr(val) {
            this.isShow = true
            this.openFilterMb = false

        },
        goHome() {
            this.$router.push('/')
        },
        handleScroll() {
            if (this.currentPage === 'home-page') document.querySelector('.labels-select').style.display = 'block'
            if (window.scrollY > this.pageTop + 100 || window.scrollY < this.pageTop) {
                this.miniSearch = true
                document.querySelector(`.${this.currentPage}`).classList.remove('overlay')
            }
        },
        openSearchBar() {
            this.pageTop = window.top.scrollY
            this.miniSearch = false


            if (this.currentPage === 'home-page') document.querySelector('.labels-select').style.display = 'none'
            document.querySelector(`.${this.currentPage}`).classList.add('overlay')
            console.log(this.currentPage)
        },
        openMobHeader() {
            this.isMobOpen === !this.isMobOpen
            console.log(this.isMobOpen)
        },
    },
    computed: {
        currentPage() {
            return this.$store.getters.currPage
        },
        explorePage() {
            const res = this.currPage === 'explore-page' ? true : false
            return res
        },
        homePage() {
            const res = this.currPage === 'home-page' ? true : false
            return res
        },
        currDest() {
            var dest = this.$store.getters.getDest;
            if (!dest) return "Start your search";
            else return dest;
        },
    },
    components: {
        datePicker,
        headerNav,
        openHeader,
        openHeaderMobile,
        headerFilter
    },
    unmounted() {
        window.removeEventListener("scroll", this.handleScroll)
    },
    // watch: {
    // "$store.state.currPage": {
    //     handler() {
    //         this.currPage = this.$store.getters.currPage
    //         this.miniSearch = this.currPage !== "home-page" && this.currPage !== "explore-page"
    //         if (this.currPage === "home-page") this.miniSearch = true
    //     },
    //     immediate: true,
    //     deep: true,
    // },
    // "$route.name": {
    //     handler(name) {
    //         this.isStayDetails = name === 'stay-details'
    //     },
    //     immediate: true,
    //     deep: true,
    // }
    // },
    watch: {
        isModalVisible() {
            if (this.isShow) {
                document.body.style.overflow = 'hidden'
                return
            }

            document.body.style.overflow = 'auto'
        }
    },
}
</script>
    