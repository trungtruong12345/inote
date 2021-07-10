<template lang="">
    <div>
        <form class="form-horizontal" @submit.prevent=''>
            <div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label form-group-lg">
                    <label for="Large" class="control-label">word</label>
                    <input type="Large" id="regular1" class="form-control input-group-lg" autocomplete='off' :value='word' spellcheck="false">
                </div>
    
                <div class="form-group pmd-textfield pmd-textfield-floating-label form-group-lg">
                    <label for="Large" class="control-label ">vocalize</label>
                    <input type="Large" id="regular1" class="form-control input-group-lg" autocomplete='off' :value='vocalize' spellcheck="false">
                </div>
            </div>
    
            <div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="Default" class="control-label">translate</label>
                    <input id="Default" class="form-control" type="text" autocomplete='off' :value='translate' spellcheck="false">
                </div>
            </div>
    
            <div class="form-group pmd-textfield pmd-textfield-floating-label">
                <label class="control-label" style='padding-top: 0px'>example</label>
                <textarea required class="form-control" autocomplete="off" :value="example" spellcheck="false"></textarea>
            </div>
    
        </form>
    </div>
</template>

<script>
export default {
    props: ["vocabulary"],
    computed: {
        word() {
            if (this.vocabulary) {
                return this.vocabulary.word
            } else {
                return ''
            }
        },
        vocalize() {
            if (this.vocabulary) {
                return this.vocabulary.vocalize
            } else {
                return ''
            }
        },
        translate() {
            if (this.vocabulary) {
                return this.vocabulary.translate
            } else {
                return ''
            }
        },
        example() {
            if (this.vocabulary) {
                return this.vocabulary.example
            } else {
                return ''
            }
        },
    }
};
</script>

<style lang="scss" scoped>
form {
    &>div:nth-child(1) {
        display: flex;
        justify-content: space-around;
    }
}
</style>