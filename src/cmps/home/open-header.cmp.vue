<template >
    <section class="open-header clickable">
        <div style="position:relative ;">
            <form @submit.prevent class="main-form">
                <div class="search-input-container" @click="(whereClick)" :class="{ active: !searchClick }">
                    <label> Where
                        <input type="text" v-model="filterBy.txt" class="stay-search clickable"
                            placeholder="Start your search" />
                    </label>
                </div>
                <!-- <div class="date-header-container"> -->
                <date-picker />
                <!-- </div> -->
                <div @click.stop="(guestsClick)" :class="{ active: !active }" class="guests-container mini-container">
                    <label class="clickable">Who
                        <input class="guests" placeholder="Add guests" disabled />
                    </label>
                    <button @click.stop="goExplore" class="btn-airbnb search-header-btn">
                        <span>
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="true"
                                style="none: block; fill: none; height: 11px; width: 11px; stroke: currentcolor; overflow: visible;">
                                <g fill="none" stroke="#FFFFFF" stroke-width="4px">
                                    <path
                                        d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
                                        fill="none" stroke-width="6px"></path>
                                </g>
                            </svg>
                        </span>
                        Search
                    </button>
                </div>
                <div class="guests-modal" v-if="shouldShow">
                    <div class="guest-type-label">
                        <div class="guest-label ">
                            <span><strong>Adults</strong> </span>
                            <small>Ages 13 or above</small>
                        </div>
                        <div class="guest-btns">
                            <button type="button">
                                <span @click="inc(-1)"> - </span>
                            </button>
                            <span class="guests-num">{{ adults }}</span>
                            <button type="button">
                                <span @click="inc(+1)"> + </span>
                            </button>
                        </div>
                    </div>
                    <div class="guest-type-label">
                        <div class="guest-label ">
                            <span><strong>Children</strong> </span>
                            <small>Ages 2-12</small>
                        </div>
                        <div class="guest-btns">
                            <button type="button">
                                <span @click="incChildrens(-1)"> -</span>
                            </button>
                            <span class="guests-num">{{ children }}</span>
                            <button type="button">
                                <span @click="incChildrens(+1)"> + </span>
                            </button>
                        </div>
                    </div>
                </div>
                <header-map @closeHeader="closeHeader" v-if="!searchClick" class="header-country" />

            </form>
        </div>
    </section>
</template>
<script>
import headerMap from "../header-map-search.cmp.vue";
import datePicker from "./date-picker.cmp.vue"
export default {
    data() {
        return {
            filterBy: { txt: '' },
            showMenu: false,
            scrolldown: 0,
            openSearch: false,
            miniSearch: true,
            hideSearch: true,
            pageTop: true,
            currPage: null,
            loginSignup: false,
            adults: 0,
            children: 0,
            shouldShow: false,
            dates: [],
            active: true,
            count: 0,
            searchClick: false
        };
    },
    created() { },
    methods: {
        async goExplore() {
            console.log('filterBy.txt: ', this.filterBy.txt)
            this.miniSearch = true
            this.$emit('openHeader', false)
            this.$router.push(`/explore/${this.filterBy.txt}`)
            this.filterBy.txt = ''
        },
        handleScroll() {
            console.log(window.scrollY)
            console.log(this.pageTop)
            if (window.scrollY > this.pageTop + 101 || window.scrollY < this.pageTop) {
                this.miniSearch = true
                this.$emit('openHeader', false)
            }
        },
        closeHeader(value) {
            this.$emit('openHeader', value)
            console.log("here")
        },
        openSearchBar() {
            this.miniSearch = false
            this.pageTop = window.top.scrollY
            this.$emit('openHeader', true)
        },
        openLoginModal() {
            this.loginSignup = true
        },
        activeSelection() {
            this.active = !this.active
        },
        inc(num) {
            this.adults += num
        },
        incChildrens(num) {
            this.children += num
        },
        guestsClick() {
            this.shouldShow = !this.shouldShow
            this.active = !this.active
            this.searchClick = true
        },
        async whereClick() {
            try {
                this.count++
                if (this.count > 1)
                    // this.active = !this.active
                    this.searchClick = !this.searchClick
                this.shouldShow = false
            } catch (err) {
                console.log(err)
            }
        },

    },
    computed: {},
    unmounted() { },
    components: {
        datePicker,
        headerMap,
    },
};
</script>
<style lang="">
    
</style>