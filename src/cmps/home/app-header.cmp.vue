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

    <template v-if="isMobile">
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
        <div class="footer-mobile-app" v-if="isOpenFooter">
            <div class="btn-wrapper">
                <button @click="goHome">
                    <a href="">
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                            role="presentation" focusable="false"
                            style="display: block; fill: none;stroke: currentcolor; stroke-width: 4; overflow: visible;">
                            <g fill="none">
                                <path
                                    d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9">
                                </path>
                            </g>
                        </svg>
                        Explore

                    </a>

                </button>
                <button @click="goWishlist">
                    <a>
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                            role="presentation" focusable="false"
                            style="display: block; fill: none;  stroke: currentcolor; stroke-width: 2.66667; overflow: visible;">
                            <path
                                d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z">
                            </path>
                        </svg>
                        Wishlist
                    </a>


                </button>
                <button @click="goWishlist">
                    <a href="#">
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                            role="presentation" focusable="false"
                            style="display: block; fill: currentcolor;stroke-width: 4;">
                            <path
                                d="m16 1c8.2842712 0 15 6.71572875 15 15 0 8.2842712-6.7157288 15-15 15-8.28427125 0-15-6.7157288-15-15 0-8.28427125 6.71572875-15 15-15zm0 8c-2.7614237 0-5 2.2385763-5 5 0 2.0143973 1.2022141 3.7998876 2.9996346 4.5835001l.0003231 2.0984999-.1499943.0278452c-2.8326474.5613112-5.31897338 2.2230336-6.93575953 4.5872979 2.34343054 2.291067 5.54974273 3.7028569 9.08579613 3.7028569 3.5355506 0 6.7414538-1.4113884 9.0850203-3.701476-1.6141801-2.3628535-4.0978119-4.0247647-6.929184-4.5867938l-.1558786-.0287302.001228-2.0991413c1.7288399-.7547474 2.9066959-2.4357565 2.9936498-4.355479l.0051645-.2283797c0-2.7614237-2.2385763-5-5-5zm0-6c-7.17970175 0-13 5.82029825-13 13 0 2.9045768.95257276 5.5866683 2.56235849 7.7509147 1.42074739-1.9134907 3.33951478-3.4002416 5.53860831-4.2955956l.3480332-.1363191-.0229565-.0189706c-1.43704227-1.2411241-2.34462949-3.045583-2.42083359-5.0285539l-.00520991-.2714755c0-3.8659932 3.1340068-7 7-7s7 3.1340068 7 7c0 1.9941317-.8415062 3.8279876-2.224566 5.1193683l-.225434.2006317.0447787.0163138c2.3268368.8792152 4.3570558 2.4138611 5.8430586 4.4127726 1.6098837-2.1632453 2.5621627-4.8449575 2.5621627-7.7490864 0-7.17970175-5.8202983-13-13-13z">
                            </path>
                        </svg>
                        Home
                    </a>
                </button>
            </div>
        </div>
    </template>
    <template v-else>
        <section class="mobile-open-header">
            <open-header-mobile :isMobile="isMobile" @isMobile="closeOpenHdr" />
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
    name: 'app-header',
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
            isMobile: true,
            openFilterMb: false,
            isOpenFooter: false,
        }
    },
    created() {
        console.log(this.$store.getters.openHeader)
        window.addEventListener("scroll", this.handleScroll)

    },
    methods: {
        openMobSearchBar() {
            this.isMobile = false
            window.scrollTo(0, 0);
        },
        closeOpenHdr() {
            this.isMobile = true
            this.openFilterMb = false
            this.isOpenHeader = false
        },
        goHome() {
            this.$router.push('/')
            this.isOpenHeader = false
            this.$store.commit({ type: 'setOpenHeader', currVal: false })
        },
        handleScroll() {
            if (this.currentPage === 'home-page') {
                this.handleLabels('block')
                if (window.scrollY === 0) {
                    this.isOpenFooter = false
                } else {
                    // document.querySelector('.footer-mobile-app').style.display = 'flex'
                    this.isOpenFooter = true
                }

            }
            else if(this.currPage==='stay-details'){
                this.isOpenFooter = false
            }
            if (window.scrollY > this.pageTop + 100 || window.scrollY < this.pageTop) {
                this.isOpenHeader = false
                this.$store.commit({ type: 'setOpenHeader', currVal: this.isOpenHeader })
                if (this.currentPage === 'explore-app') this.handleFilterBtn('flex')
                this.removeOverlay()
            }





        },
        openSearchBar() {
            this.pageTop = window.scrollY
            this.isOpenHeader = true

            this.$store.commit({ type: 'setOpenHeader', currVal: this.isOpenHeader })

            if (this.currentPage === 'explore-app') this.handleFilterBtn('none')
            if (this.currentPage === 'home-page') this.handleLabels('none')
            this.addOverlay()
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
        },
        goWishlist() {
            this.$router.push('/wishlist')
        },
        goToExplore() {
            this.$router.push('/explore')
        },
        closeOpenDesktopHdr(val) {
            console.log(val)
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
        isMobile() {
            if (!this.isMobile) {
                document.body.style.overflow = 'hidden'

                if (window.top.scrollY > 0) {
                    document.querySelector('.footer-mobile-app').style.display = 'none'
                }
                return
            }
            document.body.style.overflow = 'auto'
        },
        openFilterMb() {
            if (this.openFilterMb) {
                this.pageTop = window.top.scrollY
                document.body.style.overflow = 'hidden'
                return
            }
            document.body.style.overflow = 'auto'
        },
    },
}
</script>
    