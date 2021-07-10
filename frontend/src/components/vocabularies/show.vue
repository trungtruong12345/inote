<template lang="">
    <div class='ttt'>
        <div class='btn-dele' @click='onDelete'>
            <i class="material-icons">clear</i>
        </div>
    
        <div class='note' :data-target="`#form-dialog${vocabulary.id}`" data-toggle="modal">
            <div class='title'>
                <div>
                    {{ vocabulary.word }}
                </div>
                <div>
                    {{ vocabulary.vocalize }}
                </div>
            </div>
    
            <div class='content'>
                {{ vocabulary.translate }}
            </div>
        </div>
    
        <!-- Dialog with Form Elements -->
        <div tabindex="-1" class="modal fade" :id="`form-dialog${vocabulary.id}`" style="display: none;" aria-hidden="true">
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
                        <form-input :vocabulary='vocabulary'></form-input>
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

export default {
    components: { FormInput },
    props: {
        vocabulary: Object,
    },
    methods: {
        onSubmit() {
            var element = document.querySelectorAll(
                `#form-dialog${this.vocabulary.id} .modal-body input`
            );
            var word = element[0].value;
            var vocalize = element[1].value;
            var translate = element[2].value;
            var example = document.querySelector(
                `#form-dialog${this.vocabulary.id} .modal-body textarea`
            ).value;

            this.$store.dispatch("vocabularies/updateVocabulary", {
                word,
                vocalize,
                translate,
                example,
                id: this.vocabulary.id,
            });
        },
        onDelete() {
            this.$store.dispatch("vocabularies/deleteVocabulary", {
                id: this.vocabulary.id,
            });
        },
    },
};
</script>

<style lang="scss" scoped>
$color: #ffffff;
.note {
    box-shadow: 0px 1px 7px RGB(0 0 0 / 16%), 0 3px 6px RGB(0 0 0 / 10%);
    background-color: $color;
    margin-top: 16px;
    border-radius: 12px;
    padding: 14px; // height: 155px;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 2px 9px 0px #000000ba;
    }
    .content {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        color: #2980b9;
        font-weight: 500;
        font-size: large;
        margin-top: 4.4px;
    }
    .title {
        font-size: 22px;
        min-height: 30px;
        display: flex; // color: #2c3e50e0;
        // font-weight: 500;
        &>div:nth-child(1) {
            min-width: 58px;
        }
        &>div:nth-child(2) {
            margin-left: 18px;
        }
    }
}

.btn-dele {
    cursor: pointer;
    position: absolute;
    right: 17px;
    top: 16px;
    display: none;
    i {
        font-size: 20px;
        color: #5a00002e;
    }
}

.modal-dialog {
    max-width: 417px;
    .modal-body {
        margin-top: 0 !important;
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
        min-width: 94%;
    }
    .note {
        margin-left: 5px;
        margin-right: 5px;
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
        width: 41px;
        height: 41px;
        min-width: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: unset;
    }
}
</style>