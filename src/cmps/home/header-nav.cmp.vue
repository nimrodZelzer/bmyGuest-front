<template >

    <div class="main-nav">
        <nav>
            <router-link to="/explore">Explore</router-link>
            <router-link v-if="shunitAdmin" to="/order" :user="user">Become a Host</router-link>
            <button class="user-menu-btns clickable" @click="showMenu = !showMenu">
                <!-- <i class="fa-solid fa-bars"></i> -->
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
                <button v-if="!user" @click="login">login</button>
                <!-- <router-link to="#">Log in</router-link> -->
                <router-link to="#">Notifications</router-link>
                <!-- <router-link v-if="user" @click="goToBackOffice">Orders</router-link> -->
                <router-link v-if="user" :user="user" to="/orders">Orders</router-link>
                <router-link :stays="stays" to="/wishlist">Wishlist</router-link>
                <!-- {{ loginSignup }} -->
            </div>
        </div>
    </div>
</template>
<script>
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
            admin: null
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
            var number = +prompt("login")
            try {
                this.$store.dispatch({ type: 'loadUsers', num: number })
                const loggedinUser = await this.$store.getters.loggedinUser
                this.user = loggedinUser
            } catch (err) {
                console.log("userStore: Error in login", err)
                throw err
            }
      
        },
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

    },
};
</script>
<style lang="">
    
</style>