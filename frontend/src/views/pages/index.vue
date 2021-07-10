<template lang="">
    <div>
        <!-- <transition name="slide" model="out-in"> -->
            <router-view></router-view>
        <!-- </transition> -->
    
        <!-- <component :is='footer'></component> -->
    
    </div>
</template>

<script>
// import Notes from '../layouts/notes/theFooter.vue'
// import Vocabularies from '../layouts/vocabularies/theFooter.vue'

// export default {
//     components: { Notes, Vocabularies },
// }
</script>

<style lang="scss" scoped>
// .slide-enter-active,
// .slide-leave-active {
//     transition: opacity 1s, transform 0.5s;
//     position: absolute;
//     width: 100%;
//     height: 100%;
// }

// .slide-enter,
// .slide-leave-to {
//     opacity: 0;
//     position: absolute;
//     transform: translateX(-100%);
//     widows: 100%;
//     height: 100%;
// }

[contenteditable] {
    outline: 0px solid transparent;
}

.modal-backdrop.in {
    opacity: 0.4;
}
</style>