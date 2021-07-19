<template lang="">
    <div id='footer'>
        <div tabindex="-1" class="modal fade" id="form-dialog" style="display: none;" aria-hidden="true">
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
                    <!--without background tab example -->
                    <div class="pmd-card pmd-z-depth" :style="`background-color: ${bgColor}`">
                        <div class="pmd-tabs">
                            <ul class="nav nav-tabs" role="tablist">
                                <li role="presentation" class="active"><a href="#default" aria-controls="default" role="tab" data-toggle="tab">Note</a></li>
                                <li role="presentation"><a href="#fixed" aria-controls="fixed" role="tab" data-toggle="tab">Todo List</a></li>
                            </ul>
                        </div>
                        <div class="pmd-card-body">
                            <div class="tab-content" id='form-add'>
                                <div role="tabpanel" class="tab-pane active" id="default">
                                    <!-- Start form-input -->
                                    <div class="">
                                        <div class="modal-body">
                                            <form-input></form-input>
                                        </div>
    
                                    </div>
                                    <!-- End form-input -->
                                </div>
                                <div role="tabpanel" class="tab-pane" id="fixed">
                                    <!-- Start form-checkbox -->
                                    <div class="">
                                        <div class="modal-body" style='min-height: 306px;'>
                                            <form-checkbox></form-checkbox>
                                        </div>
                                    </div>
                                    <!-- End form-checkbox -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pmd-modal-action">
                        <button data-dismiss="modal" class="btn pmd-btn-fab pmd-ripple-effect btn-info" type="button" @click='submit'>
                                                                            <i class="material-icons md-dark pmd-md">add</i>
                                                </button>
                    </div>
                    <!--without background tab example end -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FormCheckbox from './formInputTodoList.vue'
import FormInput from './formInputNote.vue'
import $ from "jquery"
export default {
    components: { FormInput, FormCheckbox },
    data() {
        return {
            bgColor: '#e6c9a8'
        }
    },
    methods: {
        setBg(value) {
            this.bgColor = value
        },
        submit() {
            $('#form-search .form-control').val("")
            if ($('#default').hasClass('active')) {
                var title = $('#form-add .form-input').val()
                var content = $('#form-add .form-text').html()
                this.$store.dispatch('notes/createNote', { title: title, bgColor: this.bgColor, content: content })
            } else {
                let todo_list = this.$store.state.new_todo_list.todo_list
                this.$store.dispatch('new_todo_list/createTodoList', { content: todo_list, bgColor: this.bgColor })
            }
        }
    },

}
</script>

<style lang="scss" scoped>
ul.nav.nav-tabs {
    width: unset !important;
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
    }
    .btn.pmd-btn-fab {
        padding: 0;
        border-radius: 50%;
        width: 43px;
        height: 43px;
        min-width: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: unset;
        font-size: 34.6px;
        .material-icons {
            color: white;
        }
    }
}

.pmd-card-body {
    padding-left: 0px !important;
    padding-right: 0px !important;
}

.modal-body {
    min-height: 216px;
}
</style>