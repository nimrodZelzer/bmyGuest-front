<template>
    <section class="app-header main-layout">
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
                <div v-if="!isOpenHeader" class="mini-search clickable">
                    <label>Anywhere</label>
                    <label>Any week</label>
                    <label>Add guests</label>
                    <span></span>
                </div>
            </div>
            <header-nav :stays="stays" />
        </section>
        <open-header v-if="isOpenHeader" />
    </section>
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
                <div class="mobile-content" @click.stop="openMobSearchBar">
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
            scrolldown: 0,
            isOpenHeader: false,
            pageTop: 0,
            currPage: null,
            dates: [],
            isMobOpen: true,
            isShow: true,
            openFilterMb: false,
        }
    },
    created() {
        this.$store.commit({ type: 'setOpenHeader', currVal: this.isOpenHeader })
        window.addEventListener("scroll", this.handleScroll)

    },
    methods: {
        openMobSearchBar() {
            this.isShow = !this.isShow
            window.scrollTo(0, 0);
        },
        closeOpenHdr(val) {
            this.isShow = true
            this.openFilterMb = false
        },
        goHome() {
            this.$router.push('/')
            this.isOpenHeader = false
            this.$store.commit({ type: 'setOpenHeader', currVal: this.isOpenHeader })
        },
        handleScroll() {
            if (this.currentPage === 'home-page') this.handleLabels('block')
            if (window.scrollY > this.pageTop + 100 || window.scrollY < this.pageTop) {
                this.isOpenHeader = false
                if (this.currentPage === 'explore-app') this.handleFilterBtn('flex')
                this.$store.commit({ type: 'setOpenHeader', currVal: this.isOpenHeader })
                this.removeOverlay()
            }
        },
        openSearchBar() {
            this.pageTop = window.top.scrollY
            this.isOpenHeader = true
            this.$store.commit({ type: 'setOpenHeader', currVal: this.isOpenHeader })

            if (this.currentPage === 'explore-app') this.handleFilterBtn('none')
            if (this.currentPage === 'home-page') this.handleLabels('none')
            this.addOverlay()
        },
        openMobHeader() {
            this.isMobOpen === !this.isMobOpen
            console.log(this.isMobOpen)
        },
        handleFilterBtn(val) {
            document.querySelector('.filter-btn').style.display = val
        },
        handleLabels(val) {
            document.querySelector('.labels-select').style.display = val
        },
        addOverlay() {
            document.querySelector(`.${this.currentPage}`).classList.add('overlay')
        },
        removeOverlay() {
            document.querySelector(`.${this.currentPage}`).classList.remove('overlay')
        }
    },
    computed: {
        currentPage() {
            return this.$store.getters.currPage
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
    watch: {
        isShow() {
            if (!this.isShow) {
                this.pageTop = window.top.scrollY
                document.body.style.overflow = 'hidden'
                return
            }
            document.body.style.overflow = 'auto'
        },
    },
}
</script>
    