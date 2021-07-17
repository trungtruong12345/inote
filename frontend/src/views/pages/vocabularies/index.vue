<template lang="">
    <div>
        <!-- <the-header title='VOCABULARIES'></the-header> -->
        <div id='content' class='container fade-in the_vocabulry'>
            <div class='row'>
                <div class='col-lg-4 col-md-4 col-sm-6 col-12' v-for="(item, index) in vocabularies" :key="index">
                    <show :vocabulary='item'></show>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Show from '../../../components/vocabularies/show.vue'
import { mapState, mapActions } from 'vuex'
import $ from "jquery";

export default {
    components: { Show },

    computed: {
        ...mapState('vocabularies', ['vocabularies']),
    },

    mounted() {
        this.getVocabularies()

        $(".the_vocabulry").bind('oanimationend animationend webkitAnimationEnd', function() {
            $(".the_vocabulry").removeClass('fade-in')
        })

    },
    methods: {
        ...mapActions('vocabularies', ['getVocabularies']),
    }
    
}
</script>

<style lang="scss">
#content {
    // margin-bottom: 69px;
    @media all and (max-width: 554px) {
        .col-lg-4.col-md-4.col-sm-6.col-12 {
            padding-left: 8px !important;
            padding-right: 8px !important;
        }
    }
}
</style>