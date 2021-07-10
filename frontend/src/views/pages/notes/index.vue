<template lang="">
    <div>
        <the-header title='NOTES'></the-header>
        <div id='content' class='container fade-in the_note'>
            <div class='notes'>
                <div class='' v-for="(item) in notes" :key="item.id">
                    <show-todo-list :note='item' v-if="item.title == 'todo_list'"></show-todo-list>
                    <show :note='item' v-else-if="item.title != 'todo_list'"></show>
                </div>
            </div>
        </div>
        <the-footer></the-footer>
    </div>
</template>

<script>
import ShowTodoList from '../../../components/notes/showTodoList.vue'
import Show from '../../../components/notes/show.vue'
import TheHeader from '../../layouts/notes/theHeader.vue'
import TheFooter from '../../layouts/notes/theFooter.vue'
import $ from "jquery";

import { mapState, mapActions } from 'vuex'

export default {
    components: { TheFooter, TheHeader, Show, ShowTodoList },

    computed: {
        ...mapState('notes', ['notes']),
    },
    mounted() {
        this.getNotes()
        $(".the_note").bind('oanimationend animationend webkitAnimationEnd', function() {
            $(".the_note").removeClass('fade-in');
        })
    },
    methods: {
        ...mapActions('notes', ['getNotes']),
    },

}
</script>

<style lang="scss">
#content {
    margin-top: 16px;
    margin-bottom: 69px;
    .notes {
        columns: 3;
        &>div {
            display: inline-block;
            width: 100%;
            position: relative;
        }
    }
    @media all and (max-width: 595px) {
        .notes {
            columns: 1 !important;
        }
    }
    @media all and (max-width: 991px) {
        .notes {
            columns: 2
        }
    }
}
</style>