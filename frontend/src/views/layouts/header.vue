<template lang="">
    <div class='container-fluid'>
        <div id='base-header'>
            <div class='header'>
                <div id='menu'>
                    <i class="material-icons md-dark hvr-grow">menu</i>
                </div>
                <div class='header-form-seach'>
                    <form-search></form-search>
                </div>
                <!-- search -->
                <div class='header-btn-search'>
                    <i class="material-icons md-dark">search</i>
                </div>
                <!-- add -->
                <div class='header-btn-add' data-target="#form-dialog" data-toggle="modal">
                    <i class="material-icons md-dark">library_add</i>
                </div>
                <!-- User -->
                <div class='header-btn-user'>
                    <i class="material-icons md-dark">mood</i>
                </div>
            </div>
            <div class='form-search-mobile'>
                <div>
                    <form-search></form-search>
                    <div class='header-btn-close'>
                        <i class="material-icons md-dark">cancel</i>
                    </div>
                </div>
            </div>
            <div class="" id='header-close'></div>
        </div>
    </div>
</template>

<script>
import FormSearch from './formSearch.vue'
import $ from "jquery"
import 'hover.css'

export default {
    components: { FormSearch },

    mounted() {
        $('.header-btn-search').click(function() {
            $('.header').hide()
            $('.form-search-mobile').show()
        })

        $('.header-btn-close').click(function() {
            $('.header').show()
            $('.form-search-mobile').hide()
        })

    }

}
</script>

<style lang="scss" scoped>
.container-fluid {
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-close {
    position: absolute;
    background-color: RGB(0 0 0 / 15%);
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
    transition: 0.5s;
}

.unset-bg {
    background-color: unset;
    transition: 0.5s;
}

.header {
    box-shadow: 0px 1px 3px RGB(0 0 0 / 18%);
    width: 100%;
    display: flex;
    align-items: center;
    background-color: white;
    padding: 4px;
    padding-left: 12px;
}

@media all and (max-width: 595px) {
    .container-fluid {
        padding-left: 2px;
        padding-right: 2px;
    }
}

@media all and (min-width: 812px) {
    .header-btn-search {
        display: none !important;
    }
    #menu {
        order: 1;
    }
    .header-btn-add {
        order: 2;
    }
    .header-form-seach {
        order: 3;
    }
    .header-btn-user {
        order: 4;
    }
}

@media all and (max-width: 811px) {
    .header {
        padding-top: 11px;
        padding-bottom: 11px;
    }
    .header-form-seach {
        display: none;
    }
    #menu {
        flex-grow: 1;
    }
    .container-fluid {
        padding-left: 0;
        padding-right: 0;
    }
}

.header-form-seach {
    margin-left: 12px;
    flex-grow: 1;
    &>div:nth-child(1) {
        width: 500px;
    }
}

.header-btn-user {
    margin-right: 16px;
    margin-left: 21px
}

.header-btn-search {
    margin-left: 16px;
}

.header-btn-add {
    margin-left: 21px;
}

.header-btn-add,
.header-btn-search,
.header-btn-user,
#menu {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 26px !important;
    i {
        color: #757575;
    }
}

.header-btn-add,
.header-btn-search,
.header-btn-user {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    justify-content: center;
    transform: scale(1.65);
    i {
        font-size: 18.5px;
    }
    &:hover {
        background-color: #f1f3f4;
    }
}

.form-search-mobile {
    i {
        color: #757575;
    }
    display: none;
    background-color: white;
    box-shadow: 0px 1px 3px RGB(0 0 0 / 18%);
    padding: 4px;
    &>div:nth-child(1) {
        display: flex;
        align-items: center;
        &>div:nth-child(1) {
            flex-grow: 1;
            margin-left: 12px;
        }
    }
    .header-btn-close {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 12px;
        i {
            font-size: 33px;
        }
        cursor: pointer;
    }
}
</style>