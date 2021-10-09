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
        document.querySelector('body').style.backgroundColor = '#F0F2F5'
    }
};
</script>

<style lang="css">
#header {
    width: 100vw;
    height: 53px;
    left: 0;
    top: 0;
    background-color: #224957;
}
</style>