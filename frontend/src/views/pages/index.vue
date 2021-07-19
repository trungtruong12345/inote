<template lang="">
    <div>
        <div class='content'>
            <div id='content'>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
[contenteditable] {
    outline: 0px solid transparent;
}

.modal-backdrop.in {
    opacity: 0.4;
}

@media all and (max-width: 595px) {
    .container-fluid {
        padding-left: 2px;
        padding-right: 2px;
    }
}
</style>