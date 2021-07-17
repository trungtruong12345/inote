<template lang="">
    <div>
        <form class="form-horizontal" @submit.prevent=''>
            <div class="form-group pmd-textfield pmd-textfield-floating-label form-group-lg">
                <label for="first-name">Title</label>
                <input type="text" class="mat-input form-control" autocomplete="off" :value="title" spellcheck="false">
            </div>
            <div class="form-group pmd-textfield pmd-textfield-floating-label">
                <div contenteditable class='form-text' autocomplete="off" spellcheck="false" data-placeholder="Content" v-html='content'>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: ["note"],
    computed: {
        title() {
            if (this.note) {
                return this.note.title
            } else {
                return ''
            }
        },
        content() {
            if (this.note) {
                return this.note.content
            } else {
                return ''
            }
        }
    },
};
</script>

<style lang="scss" scoped>
.pmd-textfield textarea.form-control {
    height: 219px;
}

textarea {
    color: #262124;
}

.form-text {
    color: #262124;
    border: 0px;
    outline: unset;
    min-height: 233px;
}

input {
    color: #262124;
}
</style>