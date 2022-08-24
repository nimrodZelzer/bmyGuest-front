<template>

    <form @submit.prevent="login" class="signup-container form-page">
        <div class="signup-card flex column space-between">
            <div class="signup-fields flex column space-between grow-1">
                <h1>Welcome to Bmyguest</h1>
                <el-input id="username" v-model="cred.username" type="text" placeholder="userName" class="inputUser"/>
                <el-input id="password" v-model="cred.password" type="password" placeholder="password" class="inputPsd"/>
            </div>
            <button class="reserve-btn" >login</button>
        </div>
        <GoogleLogin :callback="callback" prompt class="google-login"/>
        
    </form>
</template>

<script>

export default {
    name: 'signup-page',
    data() {
        return {
            cred: {
                username: "",
                password: "",
            },
        };
    },
    methods: {
        login(){
           const {username}=this.cred
           const {password}=this.cred
           this.$store.dispatch({ type: 'login', cred: this.cred})
           this.$emit("login")
        }
    },
    mounted() {
    }
}
</script>

<style>
</style>