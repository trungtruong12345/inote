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
            this.$store.commit('vocabularies/search', { value: e.target.value })
            this.$store.dispatch('vocabularies/getVocabularies')
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
        background-color: #ecf0f1;
        outline: 0px solid transparent !important;
        &:focus {
            border: 0px;
        }
    }
}
</style>