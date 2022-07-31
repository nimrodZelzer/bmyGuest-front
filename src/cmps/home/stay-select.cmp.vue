<!-- <template>
    <section class="stay-select clickable  ">
        <form @submit.prevent class="main-form ">
            <div class="mini-container search-input-container">
                <label> Where
                    <input type="text" v-model="filterBy.txt" class="stay-search clickable"
                        placeholder="Search destinations" />
                </label>

            </div>
            <div class="mini-container flex column justify-center date-container">
                <date-picker :dates="dates" />
            </div>
            <div @click="shouldShow = !shouldShow" class="mini-container guests-container">
                <label class="clickable">Who
                    <input class="guests" placeholder="Add guests" disabled />
                </label>
                <button @mouseover="mouseOverBtn" @click.stop="goExplore" class="btn-airbnb search-header-btn">
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
                            <span> - </span>
                        </button>
                        <span class="guests-num">{{ adults }}</span>
                        <button type="button">
                            <span> + </span>
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
                            <span> -</span>
                        </button>
                        <span class="guests-num">{{ children }}</span>
                        <button type="button">
                            <span> + </span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>

<script>
import datePicker from "./date-picker.cmp.vue"

export default {
    data() {
        return {
            // stays: {
            //     country: ''
            // },
            default: '',
            adults: 0,
            children: 0,
            shouldShow: false,
            dates: [],
            filterBy: { txt: '' }

        }
    },
    methods: {
        goExplore() {
            this.$router.push(`/explore/${this.filterBy.txt}`)
            this.filterBy.txt = ''
        }
    },
    computed: {

    },
    components: { datePicker },
    created() { },
}
</script> -->



<template>
    <section class="stay-select clickable  ">
        <form @submit.prevent class="main-form ">
            <div class="search-input-container mini-container">
                <label> Where
                    <input type="text" v-model="filterBy.txt" class="stay-search clickable"
                        placeholder="Search destinations" />
                </label>

            </div>
            <div class="mini-container flex column justify-center date-container">
                <date-picker :dates="dates" />
            </div>
            <div @click="shouldShow = !shouldShow" class="mini-container guests-container">
                <label class="clickable">Who
                    <input class="guests" placeholder="Add guests" disabled />
                </label>
                <button @mouseover="mouseOverBtn" @click.stop="goExplore" class="btn-airbnb search-header-btn">
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
                            <span> - </span>
                        </button>
                        <span class="guests-num">{{ adults }}</span>
                        <button type="button">
                            <span> + </span>
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
                            <span> -</span>
                        </button>
                        <span class="guests-num">{{ children }}</span>
                        <button type="button">
                            <span> + </span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>

<script>
import datePicker from "./date-picker.cmp.vue"

export default {
    data() {
        return {
            default: '',
            adults: 0,
            children: 0,
            shouldShow: false,
            dates: [],
            filterBy: { txt: '' }
        }
    },
    methods: {
        goExplore() {
            this.$router.push(`/explore/${this.filterBy.txt}`)
            this.filterBy.txt = ''
        }
    },
    computed: {

    },
    components: { datePicker },
    created() { },
}
</script>