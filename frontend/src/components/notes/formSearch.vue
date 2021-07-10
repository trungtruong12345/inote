<template lang="">
    <div id='form-search'>
        <form>
            <input type="text" placeholder="Keyword" autocomplete="off" @keyup='setValue'>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        setValue(e) {
            e.preventDefault();
            this.$store.commit('notes/search', { value: e.target.value })
            this.$store.dispatch('notes/getNotes')
        }
    }
}
</script>

<style lang="scss" scoped>
#form-search {
    form>input {
        width: 100%;
        border: 0 !important;
        border-radius: 22px;
        padding: 5px 17px;
        background-color: #e8d896;
        outline: 0px solid transparent !important;
        &:focus {
            border: 0px;
        }
    }
}
</style>