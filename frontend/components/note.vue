<template lang="">
    <div class='notes-note' :style="`background-color: ${bg_color}`">
        <div class="btn-delete" @click="onDelete"></div>
        <div class="note-title" :id="`title-id-${id}`" v-html="title" @click='onClick'></div>
        <div class="note-content" :id="`content-id-${id}`" v-html="content" @click='onClick'></div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import $ from "jquery";

export default {
  props: ["id", "title", "content", "bg_color"],
  methods: {
    ...mapActions("headerDefault", ["toggleFormInput"]),
    ...mapActions("note", ["onUpdateData", "onDestroy"]),
    onDelete(){
        this.onDestroy({id: this.id})
    },
    async onClick() {
      await this.onUpdateData({
        id: this.id,
        title: this.title,
        content: this.content,
        bg_color: this.bg_color,
      });
      await this.toggleFormInput();
    },
  },
  updated() {
    var heightOfTitle = $(`.notes-note #title-id-${this.id}`).height();
    if (heightOfTitle < 40 && heightOfTitle > 5) {
      $(`.notes-note #content-id-${this.id}`).height("83px");
    } else if (heightOfTitle <= 5) {
      $(`.notes-note #content-id-${this.id}`).height("104px");
    } else {
      $(`.notes-note #content-id-${this.id}`).height("61px");
    }
  },
  mounted() {
    var heightOfTitle = $(`.notes-note #title-id-${this.id}`).height();
    if (heightOfTitle < 40 && heightOfTitle > 5) {
      $(`.notes-note #content-id-${this.id}`).height("83px");
    } else if (heightOfTitle <= 5) {
      $(`.notes-note #content-id-${this.id}`).height("104px");
    } else {
      $(`.notes-note #content-id-${this.id}`).height("61px");
    }
  }
};
</script>

<style lang="">
</style>