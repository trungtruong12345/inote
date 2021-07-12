<template lang="">
    <div id='footer'>
        <div class='pmd-z-depth shadow-demo'>
            <div id='user-option'>
                <!--Dropdown Menu Top Right-->
                <span class="dropdown dropup pmd-dropdown clearfix ">
                                                                                                <button class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-primary " type="button" id="dropdownMenuTopRight" data-toggle="dropdown" aria-expanded="true">
                                                                                                    <i class="material-icons md-dark pmd-md">account_box</i>
                                                                                                </button>
                                                                                                <div id="user" aria-labelledby="dropdownMenu3" role="menu" class="dropdown-menu pmd-dropdown-menu-top-left list-group pmd-z-depth pmd-list pmd-card-list">
                                                                                                    <div class="list-group-item" @click='logout'>logout</div>
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
                                                                                                    <div class="list-group-item" style='background-color: RGB(54 116 197); font-weight: 600;'>
                                                                                                        <router-link :to="{path: 'vocabularies'}" style='color: white'>vocabularies</router-link>
                                                                                                    </div>
                                                                                                    <div class="list-group-item" style='background-color: #fef175'>
                                                                                                        <router-link :to="{path: 'notes'}">notes</router-link>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </span>
            </div>
        </div>
    
    
    
        <div tabindex="-1" class="modal fade" id="form-dialog" style="display: none;" aria-hidden="true">
            <div class="modal-dialog ">
                <div class="modal-content">
                    <div>
                        <div class="pmd-card-title-text">
                        </div>
    
                        <div>
                            <button aria-hidden="true" data-dismiss="modal" class="" type="button">×</button>
                        </div>
                    </div>
                    <div class="modal-body">
                        <form-input></form-input>
                    </div>
                    <div class="pmd-modal-action">
                        <button data-dismiss="modal" class="btn pmd-btn-fab pmd-ripple-effect btn-info" type="button" @click='submit'>
                            <i class="material-icons md-dark pmd-md">add</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FormInput from '../../../components/vocabularies/formInput.vue'
import { logout } from '../../../helpers/lib.js'

export default {
    components: { FormInput },
    methods: {
        submit() {
            if (document.querySelector('a.drd').getAttribute('aria-expanded') == "true") {
                document.querySelector('a.drd').click();
            }
            document.querySelector('#form-search input').value = ''
            var element = document.querySelectorAll(`#form-dialog .modal-body input`)
            var word = element[0].value
            var vocalize = element[1].value
            var translate = element[2].value
            var example = document.querySelector(`#form-dialog .modal-body textarea`).value
            this.$store.dispatch('vocabularies/createVocabulary', { word, vocalize, translate, example })
        },
        logout
    },

}
</script>

<style lang="scss" scoped>
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
        background-color: #3674c5;
        padding: 4px; // box-shadow: 1px -0.1px 6px #0000007a;
        &>div {
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: aliceblue;
            display: flex;
            align-items: center;
            justify-content: center;
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
    .modal-dialog {
        max-width: 417px;
        .modal-body {
            margin-top: 0 !important;
        }
    }
    @media all and (max-width: 771px) {
        .modal-dialog {
            min-width: 94%;
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
            .material-icons{
                color: white;
            }
        }
    }
    .dropdown-menu.pmd-dropdown-menu-top-right.list-group.pmd-z-depth.pmd-list.pmd-card-list.pm-ini {
        padding: 0;
    }
}
</style>