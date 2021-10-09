<template>
  <div class="vocabularies row">
    <div
      v-for="vocabulary in data"
      class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6"
      :key="vocabulary.id"
    >
      <Word
        :image="vocabulary.image"
        :word="vocabulary.word"
        :pronounce="vocabulary.pronounce"
        :translate="vocabulary.translate"
        :id="vocabulary.id"
        :example="vocabulary.example"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  layout: "home",
  middleware: 'auth',
  methods: {
    ...mapActions("vocabularyWords", ["fetchVocabularyWords"]),
  },
  computed: {
    ...mapGetters("vocabularyWords", ["data"]),
  },
  async created() {
    await this.fetchVocabularyWords();
  },
};
</script>

<style lang="css" scoped>
</style>
