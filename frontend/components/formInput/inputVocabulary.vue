<template>
    <div class='inputVocabulary'>
        <img :src="image" id="input-vocabolary-image" />
        <form>
            <input type="file" hidden id="input-image">
        </form>
        <div class="word">
            <div contenteditable="true" spellcheck="false" id="input-vocabolary-word" v-html="word">
                <!-- {{ word }} -->
            </div>
    
            <div contenteditable="true" spellcheck="false" id='input-vocabolary-pronounce' v-html="pronounce">
                <!-- {{ pronounce }} -->
            </div>
        </div>
    
        <div class="translate" contenteditable="true" spellcheck="false" id='input-vocabolary-translate' v-html="translate">
            <!-- {{ translate }} -->
        </div>
    
        <div class="example" contenteditable="true" spellcheck="false" id='input-vocabolary-example' v-html="example">
            <!-- {{ example }} -->
        </div>

        <div id="btn-submit">
            <button type="button" class="btn btn-outline-secondary" id="btn-destroy" v-if="id" @click="onDestroy">
                <img src="@/assets/images/header/cancel.png" />
            </button>

            <button type="button" class="btn btn-secondary">
                <img src="@/assets/images/header/Group.png" />
            </button>
        </div>
    </div>
</template>

<script>
const TAG_INPUT_WORD = '.inputVocabulary #input-vocabolary-word'
const TAG_INPUT_PRONOUNCE = '.inputVocabulary #input-vocabolary-pronounce'
const TAG_INPUT_TRANSLATE = '.inputVocabulary #input-vocabolary-translate'
const TAG_INPUT_EXAMPLE = '.inputVocabulary #input-vocabolary-example'
const TAG_INPUT_IMAGE = '.inputVocabulary #input-vocabolary-image'


import { mapActions, mapGetters } from 'vuex';
import $ from 'jquery'
import {show_image_after_input, DataURIToBlob, isBase64} from '../../util/lib.js'

export default {
    computed: {
        ...mapGetters('vocabularyWord', ['id', 'image', 'word', 'pronounce', 'translate', 'example', 'information']),
    },
    methods: {
        ...mapActions('vocabularyWord', ['onUpdateOrCreate', 'onDestroy']),
    },
    mounted() {
        var id = this.id
        var onUpdateOrCreate = this.onUpdateOrCreate

        $(".inputVocabulary > #btn-submit").click(function() {
            var word = $(TAG_INPUT_WORD).html()
            var pronounce = $(TAG_INPUT_PRONOUNCE).html()
            var translate = $(TAG_INPUT_TRANSLATE).html()
            var example = $(TAG_INPUT_EXAMPLE).html()
            var formData = new FormData()

            formData.append('vocabulary_word[word]', word)
            formData.append('vocabulary_word[pronounce]', pronounce)
            formData.append('vocabulary_word[translate]', translate)
            formData.append('vocabulary_word[example]', example)
            
            if(id){
                formData.append('vocabulary_word[id]', id)
            }

            var base64Image = $(TAG_INPUT_IMAGE).attr("src")
            
            if (isBase64(base64Image) == true){
                formData.append('vocabulary_word[image]', DataURIToBlob(base64Image))
            }

            onUpdateOrCreate({vocabulary_word: formData}).then(res=>{
               if(res.data.status == 422){
                   alert(res.data.message)
               }
            })
        })

        $(TAG_INPUT_IMAGE).click(function() {
            const input_image = ".inputVocabulary > form > #input-image"
            $(input_image).click()
        })
        show_image_after_input({idImg: TAG_INPUT_IMAGE, idInput: ".inputVocabulary > form > #input-image"})
    }
}
</script>

<style lang="css" scoped>
#btn-destroy{
    margin-right: 12px;
}
</style>>