<template>
    <form class="mob-open-header" @submit.prevent="submit">
        <section class="top">
            <div class="exit-btn">
                <button @click.stop="toggleMbHdr">
                    <span v-if="!isClicked">
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                            role="presentation" focusable="false"
                            style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                            <path d="m6 6 20 20"></path>
                            <path d="m26 6-20 20"></path>
                        </svg>
                    </span>
                    <span v-else>
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
            <div class="tablist">
                <button @click.prevent>Stays</button>
                <button @click.prevent>Experiences</button>
            </div>
        </section>
        <section class="main">
            <h2>Where to?</h2>
            <div class="op-mob-minisearch" @click="isClicked = !isClicked">
                <label>
                    <input type="search" placeholder="Search destination" v-model="dest" />
                </label>
                <div class="mob-countries">
                    <header-map />
                </div>
            </div>
        </section>
        <section class="bottom">
            <div class="dates-container">
                <button @click.prevent="openDatePicker = !openDatePicker" class="clickable">
                    <span>When</span>
                    <span>Add dates</span>
                </button>
            </div>
            <div class="guests-container">
                <button @click.prevent class="clickable">
                    <span>Who</span>
                    <span>Add guests</span>
                </button>
            </div>
            <div class="mob-footer">
                <button @click.prevent="clearAll" class="clr-btn">Clear all</button>
                <button class="btn-airbnb">Search </button>
            </div>
        </section>
        <date-picker-mobile v-if="openDatePicker" />
    </form>
    <!-- <guests-modal /> -->
</template>

<script>
import headerMap from "../header-map-search.cmp.vue";
import datePickerMobile from "../date-picker-mobile.cmp.vue";
import guestsModal from "../guests-modal.cmp.vue";
export default {
    data() {
        return {
            isClicked: false,
            dest: '',
            openDatePicker: false,
        }
    },
    props: {
        isShow: {
            type: Boolean
        }
    },
    methods: {
        toggleMbHdr() {
            this.$emit('isShow', false)
        },
        submit() {
            console.log('submit')
            const order = {
                dest: this.dest,
                dates: toRaw(this.dates),
                guests: this.adults + this.children
            }
            console.log(order)
        }
    },
    computed: {},
    created() {
        console.log(this.isShow)
    },
    components: { headerMap, datePickerMobile, guestsModal }
}
</script>

