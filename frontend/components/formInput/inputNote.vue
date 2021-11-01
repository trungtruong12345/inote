<template lang="">
    <div class='input-note' :style="`background-color: ${bg_color}`">
        <div class='note-group-btn'>
            <div class='bg-color'>
                <div class='color-1' @click="() => onChangeBg('#FFE8A5')"></div>
                <div class='color-2' @click="() => onChangeBg('#CBF0F8')"></div>
                <div class='color-3' @click="() => onChangeBg('#E8EAED')"></div>
                <div class='color-4' @click="() => onChangeBg('#D7AEFB')"></div>
            </div>
    
            <div class='note-btn'>
                <div class='btn-destroy' v-if="id" @click='onDestroy'></div>

                <div class='btn-add'></div>
            </div>
        </div>
    
        <div class='content'>
            <div class='note-title' id='title' contenteditable="true" spellcheck="false" v-html="title"></div>
    
            <div class='note-content' id='content' contenteditable="true" spellcheck="false" v-html="content"></div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import $ from "jquery";
// import { beforePaste } from "../../util/lib.js";

const TAG_INPUT_TITLE = ".input-note .content #title";
const TAG_INPUT_CONTENT = ".input-note .content #content";
const BTN_ADD = ".input-note .btn-add";

export default {
  methods: {
    ...mapActions("note", ["onDestroy", "onUpdateOrCreate"]),
    onChangeBg(color) {
      $(".input-note").css("background-color", color);
    },
  },
  computed: {
    ...mapGetters("note", ["id", "title", "content", "bg_color"]),
  },
  mounted() {
    var onUpdateOrCreate = this.onUpdateOrCreate;
    var id = this.id;

    async function onClickBtnAdd() {
      var title = $(TAG_INPUT_TITLE).html();
      var content = $(TAG_INPUT_CONTENT).html();
      var note = {
        id: id,
        title,
        content,
        bg_color: $(".input-note").css("background-color"),
      };
      var res = await onUpdateOrCreate({ note: { note } });
      if (res.data.status === 422) {
        alert(res.data.message);
      }
    }
    $(BTN_ADD).click(function () {
      onClickBtnAdd();
    });

    // beforePaste(TAG_INPUT_TITLE)
    // beforePaste(TAG_INPUT_CONTENT)
  },
};
</script>

<style lang="css" scoped>
</style>