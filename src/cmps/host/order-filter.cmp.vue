<template>
    <section class="toy-filter">

        <div>
            <el-select @change="filterBy" v-model="filter.status" placeholder="Select status">
                <el-option v-for="(status, idx) in this.status" :value="status" :key="idx">
                    {{ status }}
                </el-option>
            </el-select>
        </div>
    </section>
</template>

<script>


export default {
    data() {
        return {
            status: [
                'pending',
                'Confirm',
                'Rejected',
            ],
            filter: {


            },
        }
    },
    methods: {
        filterBy() {
            this.$store.dispatch({
                type: 'loadOrder',
                filter: this.filter
            })
        },
    },

    computed: {

    },
}
</script>
