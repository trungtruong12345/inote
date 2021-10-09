<template lang="">
    <div class='btn'>
        <button type="button" @click='onClick'>{{ value }}</button>
    
        <div class='other'>
            <!-- {{ other }} -->
            <nuxt-link to="/sign-up" v-if="value == 'Login'">{{ other }}</nuxt-link>
            <nuxt-link to="/sign-in" v-if="value == 'Sign up'">{{ other }}</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ["value", "other", "func"],
    methods: {
        async onClick() {
            var res = await this.func();
            this.$emit("res-status", res);
        },
    },
};
</script>

<style lang="css" scoped>
.btn {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    margin-top: 16px;
    padding: 0;
}

.other {
    margin-top: 26px;
    /* font-family: Montserrat; */
    display: flex;
    justify-content: center !important;
}

.other a {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #000000;
}

button {
    /* width: 300px; */
    height: 45px;
    background: #20df7f;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    border: 0px;
    /* font-family: Lexend Deca; */
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    text-transform: capitalize;
    color: #224957;
}
</style>