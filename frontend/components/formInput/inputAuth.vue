<template lang="">
    <div>
        <input :type='type' :placeholder='placeholder' :name='name' v-model="value" />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    props: ["type", "placeholder", "name"],
    methods: {
        ...mapActions('auth', ['reset_value', 'change_value'])
    },
    computed: {
        value: {
            get() {
                this.$attrs.value
            },
            set(val) {
                this.change_value({ key: this.name, value: val })
            }
        }
    },
    created() {
        this.reset_value({ key: this.name })
    }
};
</script>

<style lang="css" scoped>
input {
    background-color: #224957;
    color: #ffffff;
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    width: 300px;
    height: 45px;
    border-radius: 10px;
    border: 0px;
    padding: 12px 18px;
}

::placeholder {
    color: #ffffff;
}
</style>