<template lang="">
    <div>
        <form @submit.prevent="">
            <div class="form-group">
                <input type="text" class="form-control" name="" id="" aria-describedby="helpId" :placeholder="placeholder" v-model="value" spellcheck="false" @keyup="onchange">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    },
    computed: {
        placeholder() {
            if (location.pathname == '/notes') {
                return 'Search for notes'
            } else if (location.pathname == '/vocabularies') {
                return 'Search for words'
            } else {
                return ''
            }
        },
    },
    methods: {
        onchange(e) {
            e.preventDefault();
            if (location.pathname == '/notes') {
                this.$store.commit('notes/Search', { value: e.target.value })
                this.$store.dispatch('notes/getNotes')
            } else if (location.pathname == '/vocabularies') {
                this.$store.commit('vocabularies/Search', { value: e.target.value })
                this.$store.dispatch('vocabularies/getVocabularies')
            } else {
                return
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.form-group {
    margin: 0;
}

.form-control {
    width: 100%;
    padding: 21px 12px;
    outline: 0px solid transparent !important;
    border: 0;
    font-size: 16.5px;
    box-shadow: unset;
    background-color: #f1f3f4;
    border-radius: 17.4px;
    margin-right: 12px;
}

.form-group {
    display: flex;
    flex-flow: row;
    align-items: center;
}
</style>