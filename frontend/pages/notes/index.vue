<template lang="">
    <div class='notes row'>
        <div class='col-xl-4 col-lg-4 col-md-6 col-sm-12' v-for="(note, index) in notes" :key="note.id">
            <Note :title='note.title' :id='note.id' :content='note.content' :bg_color='note.bg_color' />
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    layout: 'home',
    middleware: 'auth',
    methods: {
        ...mapActions('notes', ['fetchNotes'])
    },
    computed: {
        ...mapGetters('notes', ['notes'])
    },
    async created() {
        this.fetchNotes()
    }
}
</script>

<style lang="css">
</style>