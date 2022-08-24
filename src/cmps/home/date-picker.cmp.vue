
<!-- <template class="header-date-container">
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
      // console.log(this.value1)
    },
    addDateToStore() {
      this.$store.dispatch({
        type: 'loadCurrDate',
        date: this.date
      })
    }
  },

}
</script> -->
<!-- //////////////////////////////////////////////////////////////// -->
<!-- <template>
  <section class="header-date-container">
    <el-date-picker style="width: 100%" @change="changed" v-model="value1" type="daterange" start-placeholder="Check In"
      end-placeholder="Check Out" :picker-options="pickerOptions" popper-class="custom-date-picker-header"
      range-separator="|" prefix-icon="false">
    </el-date-picker>
  </section>
</template>

<script>
export default {
  name: "date-picker",
  props: { stayId: String },
  data() {
    return {
      pickerOptions: {
        disabledDate: (time) => {
          return (
            time.getTime() < Date.now()
            ||
            (
              this.stayOrders && this.stayOrders.some((stayOrder) => {
                return (time.getTime() > stayOrder[0]) && (time.getTime() < stayOrder[1])
              }))
          )
        },
      },
      value1: "",
    };
  },
  methods: {
    changed() {
      this.$emit("pick", this.value1);
    },
  },
  computed: {
    stayOrders() {
      return this.$store.getters.getStayOrdersTimeStamps
    }
  }
};
</script> -->

<template>
  <section class="header-date-container">
    <Datepicker v-model="date" modelType="dd.MM.yyyy" @update:modelValue="handleDate" range multiCalendars
      closeOnScroll>
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





