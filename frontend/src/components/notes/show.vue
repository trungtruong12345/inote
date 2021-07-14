<template lang="">
    <div class='ttt'>
        <div class='btn-dele' @click='onDelete'>
            <i class="material-icons">clear</i>
        </div>
    
        <div class='note pmd-z-depth shadow-demo' :data-target="`#form-dialog${note.id}`" data-toggle="modal" :style="`background-color: ${bgColor}`">
            <div class='title'>
                {{ note.title }}
            </div>
    
            <div class='content' v-html="note.content">
            </div>
        </div>
    
        <!-- Dialog with Form Elements -->
        <div tabindex="-1" class="modal fade" :id="`form-dialog${note.id}`" style="display: none;" aria-hidden="true">
            <div class="modal-dialog ">
                <div class="modal-content" :style="`background-color: ${bgColor}`">
                    <div>
                        <div class="pmd-card-title-text">
                            <button class="btn  pmd-btn-raised pmd-ripple-effect btn-warning" type="button" v-on:click="setBg('#fef175')"></button>
    
                            <button class="btn  pmd-btn-raised pmd-ripple-effect btn-danger" type="button" v-on:click="setBg('#f28b82')"></button>
    
                            <button class="btn  pmd-btn-raised pmd-ripple-effect btn-primary" type="button" v-on:click="setBg('#e6c9a8')" style='background-color: #d8b995;'></button>
    
                            <button class="btn  pmd-btn-raised pmd-ripple-effect btn-default" type="button" v-on:click="setBg('white')"></button>
                        </div>
    
                        <div>
                            <button aria-hidden="true" data-dismiss="modal" class="" type="button">×</button>
                        </div>
                    </div>
                    <div class="modal-body">
                        <form-input :note='note'></form-input>
                    </div>
                    <div class="pmd-modal-action">
                        <button data-dismiss="modal" class="btn pmd-btn-fab pmd-ripple-effect btn-info" type="button" @click='onDelete'><i class="material-icons pmd-sm">clear</i></button>
                        <button data-dismiss="modal" class="btn pmd-btn-fab pmd-ripple-effect btn-info" type="button" @click='onSubmit'><i class="material-icons pmd-sm">check</i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FormInput from "./formInput.vue";
import $ from "jquery";
export default {
    components: { FormInput },
    props: {
        note: Object,
    },
    computed: {
        bgColor: function() {
            if (this.note.bgColor) {
                return this.note.bgColor
            } else {
                return 'white'
            }
        }
    },
    methods: {
        setBg(value) {
            this.note.bgColor = value
        },
        onSubmit() {
            var title = document.querySelector(`#form-dialog${this.note.id} .modal-body input`).value
            var content = $(`#form-dialog${this.note.id} .modal-body .form-text`).html()
            this.$store.dispatch('notes/updateNote', { title: title, bgColor: this.bgColor, content: content, id: this.note.id })
        },
        onDelete() {
            var action = confirm("Are you sure ?")
            if (action) {
                this.$store.dispatch('notes/deleteNote', { id: this.note.id })
            }
        }
    },
};
</script>

<style lang="scss" scoped>
$color: #f1c433;
.note {
    // background-color: #f1c433;
    margin-top: 7px;
    margin-bottom: 7px;
    border-radius: 12px;
    padding: 14px;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 2px 9px 0px #b6aeaeba;
    }
    .content {
        width: 100%;
        word-break: break-word;
        margin-top: 4px;
    }
    .title {
        font-size: 22px;
        min-height: 30px;
        word-break: break-word;
    }
}

.btn-dele {
    cursor: pointer;
    position: absolute;
    right: 3px;
    top: 9px;
    display: none;
    i {
        font-size: 21px;
        color: #5a000047;
    }
}

@media all and (min-width: 772px) {
    .ttt:hover {
        .btn-dele {
            display: block;
        }
    }
}

@media all and (max-width: 771px) {
    .modal-dialog {
        // min-width: 94%;
        width: 600px;
    }
}

@media all and (max-width: 620px) {
    .modal-dialog {
        min-width: 94%;
        max-width: -webkit-fill-available;
    }
}

@media all and (max-width: 547px) {
    .ttt {
        .btn-dele {
            display: block;
        }
    }
}

.modal-body {
    min-height: 339px;
    box-shadow: 0px 1.8px #7777771c
}

.modal-content {
    box-shadow: unset !important;
    border: 0px !important;
    &>div:nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 9px;
        .pmd-card-title-text {
            display: flex;
            align-items: center;
            button {
                padding: 0;
                display: flex;
                align-items: center;
                margin-right: 7px;
                justify-content: center;
                border-radius: 50%;
                width: 25px;
                height: 25px;
                i {
                    font-size: 33px;
                }
            }
        }
        div:nth-child(2) {
            button {
                border: 0px;
                font-size: 20px;
                background-color: unset;
            }
        }
    }
    .pmd-modal-action {
        display: flex;
        justify-content: flex-end;
        button:nth-child(1) {
            padding: 0px 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f16b41 !important;
            i {
                font-size: 30px;
                color: white;
            }
        }
    }
    .btn.pmd-btn-fab {
        padding: 0;
        border-radius: 50%;
        width: 42px;
        height: 42px;
        min-width: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: unset;
    }
}
</style>