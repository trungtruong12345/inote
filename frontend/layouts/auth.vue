<template lang="">
    <div class='container'>
        <Nuxt />
        <img src='@/assets/images/authentication/Vectors (1).png' class='footer'>
    </div>
</template>

<script>

export default {
    mounted(){
        document.querySelector('body').style.backgroundColor = '#e5e5e5'
    }
};
</script>

<style lang="css">
img.footer {
    width: 100%;
    max-height: 196px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
}
</style>