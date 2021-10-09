<template lang="">
    <div class='menu-left'>
        <div class='bg'></div>
        <div class='profile'>
            <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' class='bg' />
            <div class='user-name'>
                {{ name }}
            </div>
    
            <div class='user-email'>
                {{ email }}
            </div>
    
            <img src='@/assets/images/menuLeft/Group(1).png' :class="'arrow ' + (showBtnLogout ? 'd-none': '')" @click='toggleBtnLogout' />
            <img src='@/assets/images/menuLeft/arrow_up.png' :class="'arrow ' + (showBtnLogout ? '' : 'd-none')" @click='toggleBtnLogout' />
    
            <div :class="'logout ' + (showBtnLogout ? '' : 'd-none')" @click="onSignOut">
                Logout
            </div>
        </div>
    
        <div class='list'>
            <div class='is_row'>
                <div class='icon'>
                    <img src='@/assets/images/menuLeft/Group(2).png' />
                </div>
                <div class='text'>
                    <nuxt-link to="/words">Words</nuxt-link>
                </div>
            </div>
    
            <div class='is_row'>
                <div class='icon'>
                    <img src='@/assets/images/menuLeft/Group(2).png' />
                </div>
                <div class='text'>
                    <nuxt-link to="/notes">Notes</nuxt-link>
                </div>
            </div>
    
            <div class='is_row'>
                <div class='icon'>
                    <img src='@/assets/images/menuLeft/Group(2).png' />
                </div>
                <div class='text'>
                    <nuxt-link to="/wordsd">Words</nuxt-link>
                </div>
            </div>
    
            <div class='is_row'>
                <div class='icon'>
                    <img src='@/assets/images/menuLeft/Group(2).png' />
                </div>
                <div class='text'>
                    <nuxt-link to="/wordsd">Words</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters("headerDefault", ["showBtnLogout"]),
        ...mapGetters("auth", ["user_id", "email", "name"]),
    },
    methods: {
        ...mapActions("headerDefault", ["toggleBtnLogout"]),
        ...mapActions("auth", ["auth", "signOut"]),
        onSignOut(){
           this.signOut()
           this.$router.push("/sign-in");
        }
    },
    async created(){
        await this.auth()
    }
};
</script>

<style lang="css" scoped>
a.nuxt-link-active {
  color: #2C627F;
}
a:hover {
    text-decoration: none;
}
.logout, img {
    cursor: pointer;
}
</style>