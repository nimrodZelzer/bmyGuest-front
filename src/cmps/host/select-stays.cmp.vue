<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      select stay<el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu class="dropdown-list" v-for="stay in stays" key="stay._id">
        <el-dropdown-item class="dropdown-item flex justify-between">
          <span >{{ stay.name }}</span>
          <img class="avatar" v-bind:src="'/img/Images/' + stay.imgUrls[0]" />
        </el-dropdown-item>

      </el-dropdown-menu>
    </template>
  </el-dropdown>



</template>

<script >
import { ArrowDown, Check, CircleCheck, CirclePlus, CirclePlusFilled, Plus } from '@element-plus/icons-vue'
export default {
  props: {
    stays: {
      type: Array,
      required: true,
    },
  },
  components: {

  },
  methods: {

  }
}
</script>



<style scoped>
.block-col-2 .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>