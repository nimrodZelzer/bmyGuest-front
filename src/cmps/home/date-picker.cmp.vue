
<template class="header-date-container">
  <section class="date-picker">
    <form @submit.stop="submit" class="date-container clickable ">
      <div class="checkin">
        <span class="top">Check in</span>
        <span v-if="!date" class="bottom">Add dates</span>
        <span v-else class="bottom">{{ this.date[0].getDate() }}/{{ this.date[0].getMonth() + 1 }}/{{
            this.date[0].getYear()
            - 100
        }}</span>

      </div>
      <div for="custom-date-picker" class="checkout">
        <span class="top">Check out</span>
        <span v-if="!date" class="bottom">Add dates</span>
        <span v-else class="bottom">{{ this.date[1].getDate() }}/{{ this.date[1].getMonth() + 1 }}/{{
            this.date[1].getYear()
            - 100
        }}</span>
      </div>

      <el-date-picker id="my-date" name="my-date" class="clickable" @change="addDateToStore" v-model="date"
        start-placeholder="Add dates" end-placeholder="Add dates" type="daterange" style=">* border:none;[U+200F]"
        popper-class="custom-date-picker clickable" />
   </form>
  </section>
</template>


<script>
export default {
  props: {
    dates: Array
  },
  data() {
    return {
      date: null,
      active: false,
      value2: '',
      shortcuts: [
        {
          text: 'Last week',
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            return [start, end]
          },
        },
        {
          text: 'Last month',
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            return [start, end]
          },
        },
        {
          text: 'Last 3 months',
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            return [start, end]
          },
        },
      ]
    }
  },
  methods: {
    submit() {
      console.log(this.value1)
    },
    addDateToStore() {
      console.log(this.date)
      this.$store.dispatch({
        type: 'loadCurrDate',
        date: this.date
      })
    }
  },

}
</script>