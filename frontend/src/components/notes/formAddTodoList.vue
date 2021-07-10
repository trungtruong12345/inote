<template lang="">
    <div id='form-todo'>
        <div id='add'>
            <input type='text' v-model="val" autocomplete="off" spellcheck="false" />
            <button type="button" class="btn pmd-btn-raised pmd-ripple-effect btn-primary" @click='()=>{onAdd({val: this.val })}'>
                        <i class="material-icons md-dark pmd-md">add</i>
            </button>
        </div>
        <!--List containing links -->
        <div class="list-group pmd-z-depth pmd-list pmd-card-list">
            <a class="list-group-item slide-in-fwd-center" href="javascript:void(0);" v-for="(todo, index) in todo_list" :key="index">
                <div v-if="todo.done == true" class='todo done' @click='changeStatus({id: todo.id})'>
                    {{ todo.content }}
                </div>
    
                <div v-else-if="todo.done != true" class='todo' @click='changeStatus({id: todo.id})'>
                    {{ todo.content }}
                </div>
    
                <div class='delete' @click='onDelete({id: todo.id})'>
                    <i class="material-icons md-dark pmd-md">clear</i>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    data() {
        return {
            val: '',
        }
    },
    computed: {
        ...mapState('new_todo_list', ['todo_list'])
    },
    methods: {
        ...mapMutations('new_todo_list', ['onAdd', 'onDelete', 'changeStatus'])
    },
}
</script>

<style lang="scss" scoped>
.done {
    text-decoration: line-through;
}

div#add {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3498db;
    height: 68px;
    input {
        height: 40px;
        min-width: 61%;
        border: 0;
        outline: unset;
    }
    @media all and (max-width: 500px) {
        input {
            min-width: 81% !important;
        }
    }
    button {
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        box-shadow: unset;
        i {
            color: white;
        }
    }
}

.pmd-list .list-group-item {
    padding: 0.75rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.list-group.pmd-z-depth.pmd-list.pmd-card-list {
    padding-bottom: 0 !important;
}

.delete {
    display: flex;
    justify-content: center;
    align-items: center;
    i {
        font-size: 18px;
        font-weight: 600;
        color: #b1a5a5;
    }
}
</style>