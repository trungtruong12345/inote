<template lang="">
    <div class='header-default sticky-top'>
        <div class='menu-left-icon'>
            <img src='@/assets/images/header/menu.png' @click="toggleMenuLeft" />
        </div>
    
        <div :class="showMenuLeft ? '' : 'd-none'">
            <MenuLeft />
        </div>
    
        <div :class="'default ' + (showFormSearch ? 'd-none' : '' )">
            <div>Từ vựng</div>
            <div @click='toggleFormSearch'>
                <img src='@/assets/images/header/search.png' />
            </div>
        </div>
    
        <div :class="'form-search ' + (showFormSearch ? '' : 'd-none')">
            <FormSearch />
        </div>

        <div class='add' @click='isShowFormInput'>
            <img src='@/assets/images/header/Group.png' />
        </div>

        <!-- start model -->
        <div :class="'model ' + (showFormInput ? '' : 'd-none')">
            <InputVocabulary v-if="this.$route.path == '/words'"/>
            <InputNote v-if="this.$route.path == '/notes'"/>
        </div>    
        <!-- end model -->

        <div :class="'bg_dark ' + (modelFade ? '' : 'd-none')" @click="toggleModelFade"></div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('headerDefault', ['modelFade', 'showMenuLeft', 'showFormInput', 'showFormSearch'])
  }
  ,
  methods: {
    ...mapActions('headerDefault', ['toggleModelFade', 'toggleMenuLeft', 'toggleFormInput', 'toggleFormSearch']),
    
    ...mapActions('vocabularyWord', ['resetData']),

    async isShowFormInput(){
        await this.resetData()
        await this.toggleFormInput()
    }
  },
  created(){
      this.resetData()
  }
};
</script>

<style lang="css" scoped>
.model {
  top: 61px;
  z-index: 6;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.add, img {
    cursor: pointer;
}
</style>