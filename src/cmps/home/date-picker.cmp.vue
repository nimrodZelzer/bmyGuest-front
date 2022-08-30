<template>
  <section class="header-date-container">
    <Datepicker v-model="date" modelType="dd.MM.yyyy" @update:modelValue="handleDate" range multiCalendars closeOnScroll
      calendarClassName="calendar">
      <template #trigger>
        <section class="flex row gap">
          <div class="checkin  flex column">
            <span class="top">Check in</span>
            <span class="bottom">Add dates</span>
          </div>
          <div class="checkout flex column">
            <span class="top">Check out</span>
            <span class="bottom">Add dates</span>
          </div>
        </section>
      </template>
    </Datepicker>
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
  created() {
  },
  methods: {
    handleDate() {
      const state = reactive(this.date)
      const res = toRaw(state)
      console.log(res)

      // this.dates = state
      // console.log(toRaw(this.date))
      this.$emit('dates', res)
    }
  }
}
</script>

<style>
</style>





