<template lang="">
    <div>
        <Header></Header>
        <div id='content' class='container-fluid fade-in the_note'>
            <menu-left></menu-left>
            <div class='notes'>
                <div class='' v-for="(item) in notes" :key="item.id">
                    <show-todo-list :note='item' v-if="item.title == 'todo_list'"></show-todo-list>
                    <show :note='item' v-else-if="item.title != 'todo_list'"></show>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MenuLeft from '../../layouts/menuLeft.vue'
import Header from '../../layouts/header.vue'
import ShowTodoList from '../../../components/notes/showTodoList.vue'
import Show from '../../../components/notes/show.vue'
import $ from "jquery";
import { mapState, mapActions } from 'vuex'



export default {
    components: { Show, ShowTodoList, Header, MenuLeft},

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
    display: flex;

    .notes {
        margin-top: 12px;
        columns: 5;
        &>div {
            display: inline-block;
            width: 100%;
            position: relative;
        }
    }
    @media only screen and (max-width: 595px) and (min-width: 0px) {
        .notes {
            columns: 1
        }
    }
    @media only screen and (max-width: 991px) and (min-width: 596px) {
        .notes {
            columns: 2
        }
    }
    @media only screen and (max-width: 1190px) and (min-width: 992px) {
        .notes {
            columns: 3
        }
    }
    @media only screen and (max-width: 1551px) and (min-width: 1191px) {
        .notes {
            columns: 4
        }
    }
}
</style>