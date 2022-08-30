<template>
    <el-button type="primary" @click="openFullScreen"> As a service </el-button>
</template>

<script>
import { ElLoading } from 'element-plus'

export default {

    data() {
        return {

        }
    },
    methods: {
        openFullScreen = () => {
            const loading = ElLoading.service({
                lock: true,
                text: 'Loading',
                background: 'rgba(0, 0, 0, 0.7)',
            })
            setTimeout(() => {
                loading.close()
            }, 2000)
        }
    }
}



const
</script>
