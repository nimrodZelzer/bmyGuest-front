<template >

    <section class="user-msg" v-if="msg">
        <p>{{ msg.txt }}</p>
    </section>
</template>
<script>
import { eventBus } from '../services/event-bus.service'
export default {
    data() {
        return {
            msg: null
        }
    },
    methods: {
        setMsg(msg) {
            this.msg = msg
            setTimeout(() => {
                this.msg = null
            }, 2500);
        }
    },
    created() {
        eventBus.on('show-msg', this.setMsg)
        // console.log("here")
    },
    destroyed() {
    }
}
</script>
<style >
button {
    background-color: aquamarine;
}
</style>