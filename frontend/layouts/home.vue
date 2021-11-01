<template lang="">
    <div class='container'>
        <div class='position-fixed' id='header'></div>
        <Header />
        <Nuxt />
    </div>
</template>

<script>

export default {
    mounted(){
        document.querySelector('body').style.backgroundColor = '#FFFFFF'
    }
};
</script>

<style lang="css">
#header {
    width: 100vw;
    height: 46px;
    left: 0;
    top: 0;
    background-color: white;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.09);
    z-index: 1;
}
</style>