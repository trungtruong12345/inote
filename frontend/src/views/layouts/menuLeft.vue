<template lang="">
    <div class='list-menu-left'>
        <div class="list-group pmd-list">
            <router-link to="/notes" class="list-group-item" active-class="active">
                <div>
                    <img src='https://i.pinimg.com/originals/52/8e/29/528e2946f76a74030660b231c7ff1dc1.png' />
                </div>
                <div>
                    Notes
                </div>
            </router-link>
    
            <a class="list-group-item" href="javascript:void(0);">
                <div>
                    <img src='https://www.pngkey.com/png/full/527-5275898_dictionary-clipart-glossary-glossary-icon.png' />
                </div>
                <div>
                    Vocabulaies
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import $ from "jquery"
import 'hover.css'

export default {
    mounted() {
        $('#menu').click(function() {
            $('.list-menu-left').toggleClass('set_shadow');
            $('.list-group ').toggleClass('show');
        })

        $('.list-group-item').hover(function() {
            if (!$(this).hasClass('active')) {
                $(this).addClass('on_hover');
            }

        }, function() {
            $(this).removeClass('on_hover');
        });

    },
}
</script>

<style lang="scss" scoped>
.active {
    background-color: #feefc3;
    border-radius: 0px 33px 33px 0px;
}

.show {
    width: 200px !important;
}

.set_shadow {
    box-shadow: 4px 0px 9px 0px #7776;
}

img {
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
}

.list-menu-left {
    margin-right: 13px;
}

.list-group {
    width: 63px;
    position: sticky;
    z-index: 2;
    top: 58px;
    transition: 0.4s;
}

.list-group-item {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: end;
    &>div:nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;
        i {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 7px;
            border-radius: 50%;
            color: #5f6368;
        }
    }
    &>div:nth-child(2) {
        flex-grow: 1;
        font-weight: 500;
        padding-left: 34px;
        padding-top: 12px;
        padding-bottom: 12px;
    }
    padding-top: 0;
    padding-bottom: 0;
}

.on_hover {
    background-color: RGB(241 243 244);
    border-radius: 0px 33px 33px 0px;
}

.list-group-item.active:hover,
.list-group-item.active:focus {
    z-index: 2;
    background-color: RGB(241 243 244);
}
</style>