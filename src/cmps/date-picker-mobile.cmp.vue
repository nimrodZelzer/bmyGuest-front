<template>
    <section class="date-picker-mobile">
        <div class="top">When's your trip?</div>
        <Datepicker v-model="date" modelType="dd.MM.yyyy" vertical @update:modelValue="handleDate" autoApply inline
            textInput inlineWithInput inputClassName="dp-custom-input" menuClassName="dp-custom-menu" hideInputIcon
            calendarClassName="dp-custom-calendar" calendarCellClassName="dp-custom-cell">
        </Datepicker>

        <div class="btns-action clickable">
            <button class="skip">Skip</button>
            <button class="next">Next</button>
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
        }
    }
}
</script>