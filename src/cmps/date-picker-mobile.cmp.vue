<template>
    <section class="date-picker-mobile">
        <div class="top">When's your trip?</div>
        <Datepicker v-model="date" modelType="dd.MM.yyyy" vertical @update:modelValue="handleDate" autoApply inline
            textInput inlineWithInput inputClassName="dp-custom-input" menuClassName="dp-custom-menu" range
            multiCalendars hideInputIcon calendarClassName="dp-custom-calendar" calendarCellClassName="dp-custom-cell">
        </Datepicker>

        <div class="btns-action clickable">
            <button @click.prevent class="skip">Skip</button>
            <button @click.prevent="goBack" class="next">Next</button>
        </div>

    </section>
</template>

<script>
import { reactive, toRaw } from 'vue'

export default {
    props: {
        dates: { type: Array }
    },
    data() {
        return {
            date: '',
        }
    },
    methods: {
        handleDate() {
            const state = reactive(this.date)
            const res = toRaw(state)
            console.log(res)
            this.$emit('dates', res)
        },
        goBack() {
            this.$emit('isOpen', false)
        }
    }
}
</script>