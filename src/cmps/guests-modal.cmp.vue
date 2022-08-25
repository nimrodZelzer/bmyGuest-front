<template>
    <section class="guests-modal">
        <div class="guest-type-label">
            <div class="guest-label ">
                <span><strong>Adults</strong> </span>
                <small>Ages 13 or above</small>
            </div>
            <div class="guest-btns">
                <button type="button">
                    <span @click="adultCount(-1)"> - </span>
                </button>
                <span class="guests-num">{{ adults }}</span>
                <button type="button">
                    <span @click="adultCount(+1)"> + </span>
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
                    <span @click="childrenCount(-1)"> -</span>
                </button>
                <span class="guests-num">{{ children }}</span>
                <button type="button">
                    <span @click="childrenCount(+1)"> + </span>
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'guests-modal',
    data() {
        return {
            adults: 0,
            children: 0,
        }
    },
    created() { },
    methods: {
        adultCount(num) {
            this.adults += num
        },
        childrenCount(num) {
            this.children += num
            this.$emit()
        },
    }
}
</script>