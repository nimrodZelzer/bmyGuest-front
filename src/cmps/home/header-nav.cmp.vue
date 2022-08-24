<template >

    <div class="main-nav">
        <nav>
            <router-link to="/explore">Explore</router-link>
            <router-link v-if="shunitAdmin" to="/order" :user="user">Become a Host</router-link>
            <button class="user-menu-btns clickable" @click="showMenu = !showMenu">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                    focusable="false"
                    style="display: block;fill: none;height: 16px;width: 16px;stroke: currentcolor;stroke-width: 3;overflow: visible;">
                    <g fill="none" fill-rule="nonzero">
                        <path d="m2 16h28"></path>
                        <path d="m2 24h28"></path>
                        <path d="m2 8h28"></path>
                    </g>
                </svg>
                <img src="/img/peopleImages/1003.jpg" class="avatar-header " />
            </button>
        </nav>

        <div class="user-nav-container" v-if="showMenu" @click="showMenu = false">
            <div class="user-nav flex column">
                <a v-if="!user" @click="isModalLoginSingUp = !isModalLoginSingUp">login</a>
                <a v-if="!user" @click="isModalLoginSingUp = !isModalLoginSingUp">register</a>
                <router-link to="#">Notifications</router-link>
                <router-link v-if="user" :user="user" to="/orders">Orders</router-link>
                <router-link :stays="stays" to="/wishlist">Wishlist</router-link>
            </div>
        </div>
    </div>
    <div v-if="this.isModalLoginSingUp" class="modal-reserv-overlay">
    </div>
    <div v-if="this.isModalLoginSingUp" class="login-modal flex">
        <div class="top-of-register flex justify-between ">
            <h2>Log in or sign up</h2>
            <svg @click="isModalLoginSingUp = !isModalLoginSingUp" class="clickable" viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"
                style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 2; overflow: visible;">
                <path d="m6 6 20 20"></path>
                <path d="m26 6-20 20"></path>
            </svg>
        </div>
        <register @login="login" />
    </div>
</template>
<script>
import register from './register.cpm.vue'
export default {
    data() {
        return {
            showMenu: false,
            scrolldown: 0,
            openSearch: false,
            miniSearch: true,
            hideSearch: false,
            pageTop: true,
            currPage: null,
            adults: 0,
            children: 0,
            shouldShow: false,
            isShowDropdownMenu: false,
            dates: [],
            user: null,
            stays: null,
            admin: null,
            isModalLoginSingUp: false
        };
    },
    created() {

    },


    methods: {
        closeDropdownMenu() {
            console.log(this.isShowDropdownMenu);
            this.showMenu = false
        },
        async login() {
            console.log('here');
            const loggedinUser = await this.$store.getters.loggedinUser
            this.user = loggedinUser
            this.isModalLoginSingUp = false
        }
    },
    computed: {
        shunitAdmin() {
            const adminForDemo = this.$store.getters.getAdmin
            this.admin = adminForDemo
            return adminForDemo
        },
    },
    unmounted() { },
    components: {
        register,

    },
};
</script>
<style lang="">
    
</style>