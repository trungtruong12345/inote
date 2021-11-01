<template lang="">
    <div class='menu-left swing-in-left-fwd'>
        <div class='bg'></div>
        <div class='profile'>
            <img src='https://static.thenounproject.com/png/4291178-200.png' class='bg' />
            <!-- <i class="bi bi-person-fill bg"></i> -->
            <div class='user-name'>
                {{ name }}
            </div>
    
            <div class='user-email'>
                {{ email }}
            </div>
<!--     
            <img src='@/assets/images/menuLeft/Group(1).png' :class="'arrow ' + (showBtnLogout ? 'd-none': '')" @click='toggleBtnLogout' />
            <img src='@/assets/images/menuLeft/arrow_up.png' :class="'arrow ' + (showBtnLogout ? '' : 'd-none')" @click='toggleBtnLogout' /> -->
            <i :class="'bi bi-caret-down arrow ' + (showBtnLogout ? 'd-none': '')" @click='toggleBtnLogout'></i>
            <i :class="'bi bi-caret-up arrow ' + (showBtnLogout ? '' : 'd-none')" @click='toggleBtnLogout'></i>

            <div :class="'logout ' + (showBtnLogout ? '' : 'd-none')" @click="onSignOut">
                Logout
            </div>
        </div>
    
        <div class='list'>
            <div :class="'is_row ' + ($nuxt.$route.path == '/words' ? 'active' : '')">
                <div class='icon'>
                    <!-- <i class="bi bi-file-earmark-word-fill"></i> -->
                    <!-- <i class="bi bi-file-word"></i> -->
                    <i class="bi bi-file-earmark-word"></i>
                </div>
                <div class='text'>
                    <nuxt-link to="/words">Words</nuxt-link>
                </div>
            </div>
    
            <div :class="'is_row ' + ($nuxt.$route.path == '/todo' ? 'active' : '')">
                <div class='icon'>
                    <i class="bi bi-check2-square"></i>
                </div>
                <div class='text'>
                    <nuxt-link to="/todo">Todo</nuxt-link>
                </div>
            </div>
    
            <div :class="'is_row ' + ($nuxt.$route.path == '/notes' ? 'active' : '')">
                <div class='icon'>
                    <i class="bi bi-journal-bookmark"></i>
                </div>
                <div class='text'>
                    <nuxt-link to="/notes">Notes</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import $ from "jquery";

export default {
    computed: {
        ...mapGetters("headerDefault", ["showBtnLogout"]),
        ...mapGetters("auth", ["user_id", "email", "name"]),
    },
    methods: {
        ...mapActions("headerDefault", ["toggleBtnLogout"]),
        ...mapActions("auth", ["auth", "signOut"]),
        onSignOut() {
            this.signOut();
            this.$router.push("/sign-in");
        },
    },
    async created() {
        await this.auth();
    }
};
</script>

<style lang="css" scoped>
a.nuxt-link-active {
    color: #34353C !important;
}

a:hover {
    text-decoration: none;
}

.logout,
img {
    cursor: pointer;
}

.active {
    background-color: #F6F8FA !important;
}

.active .icon i {
    color: #34353C !important;
    ;
}
</style>