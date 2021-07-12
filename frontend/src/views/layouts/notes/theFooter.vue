<template lang="">
    <div id='footer'>
        <div class='pmd-z-depth shadow-demo'>
            <div id='user-option'>
                <!--Dropdown Menu Top Right-->
                <span class="dropdown dropup pmd-dropdown clearfix ">
                        <button class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-primary" type="button" id="dropdownMenuTopRight" data-toggle="dropdown" aria-expanded="true">
                            <i class="material-icons md-dark pmd-md">account_box</i>
                        </button>
                        <div id="user" aria-labelledby="dropdownMenu3" role="menu" class="dropdown-menu pmd-dropdown-menu-top-left list-group pmd-z-depth pmd-list pmd-card-list">
                            <div class="list-group-item" @click="logout">logout</div>
                            <div class="list-group-item" >change password</div>
                        </div>
                    </span>
            </div>
    
            <div id='form-action'>
                <!-- Dialog with Form Elements -->
                <i class="material-icons md-dark pmd-md " data-target="#form-dialog" data-toggle="modal">library_add</i>
    
            </div>
    
            <div id='menu'>
                <!--Dropdown Menu Top Right-->
                <span class="dropdown dropup pmd-dropdown clearfix ">
                        <button class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-primary " type="button" id="dropdownMenuTopRight" data-toggle="dropdown" aria-expanded="true">
                            <i class="material-icons md-dark pmd-md">menu</i>
                        </button>
                        <div aria-labelledby="dropdownMenu3" role="menu" class="dropdown-menu pmd-dropdown-menu-top-right list-group pmd-z-depth pmd-list pmd-card-list">
                            
                            <div class="list-group-item" style='background-color: RGB(54 116 197)'>
                                <router-link :to="{path: 'vocabularies'}" style='color: white'>vocabularies</router-link>
                            </div>
                            <div class="list-group-item" style='background-color: #fef175; font-weight: 600;'>
                                <router-link :to="{path: 'notes'}">notes</router-link>
                            </div>
                        </div>
                    </span>
            </div>
        </div>
    
    
    
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
                            <div class="tab-content">
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
import FormCheckbox from '../../../components/notes/formAddTodoList.vue'
import FormInput from '../../../components/notes/formInput.vue'
import $ from "jquery";
import { logout } from '../../../helpers/lib.js'

export default {
    components: { FormInput, FormCheckbox },
    data() {
        return {
            bgColor: 'white'
        }
    },
    methods: {
        setBg(value) {
            this.bgColor = value
        },
        submit() {
            if (document.querySelector('a.drd').getAttribute('aria-expanded') == "true") {
                document.querySelector('a.drd').click();
            }
            document.querySelector('#form-search input').value = ''
            if ($('#default').hasClass('active')) {
                var title = document.querySelector('#form-dialog .modal-body input').value
                var content = $('#form-dialog .modal-body .form-text').html()
                this.$store.dispatch('notes/createNote', { title: title, bgColor: this.bgColor, content: content })
            } else {
                let todo_list = this.$store.state.new_todo_list.todo_list
                this.$store.dispatch('new_todo_list/createTodoList', { content: todo_list, bgColor: this.bgColor })
                // location.reload()
            }

        },
        logout
    },

}
</script>

<style lang="scss" scoped>
ul.nav.nav-tabs {
    width: 100% !important;
}

#user {
    font-size: 15px;
}

#footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 1041;
    &>div:nth-child(1) {
        margin: 0 auto;
        max-width: 962px;
        border-radius: 22px 22px 0px 0px;
        display: flex;
        justify-content: space-around;
        background-color: #ecdd5c;
        padding: 4px;
        &>div {
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: aliceblue;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0px 0.6px 2px 0px #7777777d;
            i {
                font-size: 28px;
            }
        }
        .dropdown-menu {
            border: 0.5px solid RGB(0 0 0 / 43%);
            overflow: hidden;
            text-align: center;
            div {
                border: 0;
            }
            a {
                color: #635e4d;
                font-size: initial;
            }
            a:hover {
                background-color: unset;
                text-decoration: none;
                color: #635e4d;
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
    .dropdown-menu.pmd-dropdown-menu-top-right.list-group.pmd-z-depth.pmd-list.pmd-card-list.pm-ini {
        padding: 0;
    }
}
</style>