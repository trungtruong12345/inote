<template lang="">
    <div class="vocabulary">
        <div class="image" @click="onClick">
            <img :src="image" />
        </div>
        <div class="word">{{ word }}</div>
        <div class="pronounce">{{ pronounce }}</div>
        <div class="translate">{{ translate }}</div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import $ from "jquery";

export default {
  props: ["id", "image", "word", "pronounce", "translate", "example"],
  methods: {
    ...mapActions("headerDefault", ["toggleFormInput"]),
    ...mapActions("vocabularyWord", ["onUpdateData"]),
    async onClick() {
      await this.onUpdateData({
        id: this.id,
        image: this.image,
        word: this.word,
        translate: this.translate,
        pronounce: this.pronounce,
        example: this.example,
      });
      await this.toggleFormInput();
    },
  },
  mounted() {
    $(".vocabulary").addClass("scale-in-ver-top");
  },
};
</script>

<style lang="css" scoped>
img {
  cursor: pointer;
}
</style>