<template>
    <section class="guests-modal">
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
    </section>
</template>

<script>
export default {
    data() {
        return {
            adults: 0,
            children: 0,
        }
    },
    created() { },
    methods: {
        inc(num) {
            this.adults += num
        },
        incChildrens(num) {
            this.children += num
        },
    }
}
</script>