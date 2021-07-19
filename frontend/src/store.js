import Vue from 'vue'
import Vuex from 'vuex'
import { createNote, notes, updateNote, deleteNote } from './api/notes.js'
import { vocabularies, createVocabulary, updateVocabulary, deleteVocabulary } from './api/vocabularies.js'

Vue.use(Vuex)


const module_new_todo_list = {
    namespaced: true,
    state: {
        todo_list: []
    },
    mutations: {
        onAdd(state, { val }) {
            if (val) {
                var id = Math.floor(Math.random() * 1000)
                state.todo_list.push({ id: id, content: val, done: false })
            }
        },
        onDelete(state, { id }) {
            var filtered = state.todo_list.filter(function (value) {
                return value.id != id
            });
            state.todo_list = filtered
        },
        changeStatus(state, { id }) {
            for (let i = 0; i < state.todo_list.length; i++) {
                if (state.todo_list[i].id == id) {
                    state.todo_list[i].done = !state.todo_list[i].done
                    break;
                }
            }
        }
    },
    actions: {
        createTodoList(context, {content, bgColor}) {
            context.state.todo_list = []
            context.rootState.notes.search = ''
            createNote('todo_list', JSON.stringify(content), bgColor)
            .then(() => {
                this.dispatch('notes/getNotes')
            })
        }
    }
}


const module_notes = {
    namespaced: true,
    state: {
        notes: [],
        search: '',
        todo_list: [],
    },
    mutations: {
        get(state, { data }) {
            state.notes = data
        },
        search(state, { value }) {
            state.search = value
        },
        // Todo list
        setNewTodo(state, { data }) {
            state.tudoList = data
        }
    },
    actions: {
        getNotes(context) {
            notes(context.state.search).then((res) => {
                context.commit('get', { data: res.data })
            })
        },
        createNote(context, { title, bgColor, content }) {
            context.state.search = ''
            createNote(title, content, bgColor)
                .then(() => {
                    this.dispatch('notes/getNotes')
                })
        },
        updateNote(context, { title, bgColor, content, id }) {
            if(title == null){
                title = 'todo_list'
            }
            updateNote(title, content, bgColor, id)
                .then(() => {
                    this.dispatch('notes/getNotes')
                })
        },
        deleteNote(context, { id }) {
            deleteNote(id)
                .then(() => {
                    this.dispatch('notes/getNotes')
                })
        },
    }
}




const module_vocabularies = {
    namespaced: true,
    state: {
        vocabularies: [],
        search: '',
    },
    mutations: {
        get(state, { data }) {
            state.vocabularies = data
        },
        search(state, { value }) {
            state.search = value
        }
    },
    actions: {
        getVocabularies(context) {
            vocabularies(context.state.search).then((res) => {
                context.commit('get', { data: res.data })
            })
        },
        createVocabulary(context, { word, vocalize, translate, example }) {
            context.commit('search', { value: '' })
            createVocabulary(word, vocalize, translate, example)
                .then(() => {
                    this.dispatch('vocabularies/getVocabularies')
                })
        },
        updateVocabulary(context, { word, vocalize, translate, example, id }) {
            updateVocabulary(word, vocalize, translate, example, id)
                .then(() => {
                    this.dispatch('vocabularies/getVocabularies')
                })
        },
        deleteVocabulary(context, { id }) {
            deleteVocabulary(id)
                .then(() => {
                    this.dispatch('vocabularies/getVocabularies')
                })
        }
    }
}

export default new Vuex.Store({
    modules: {
        notes: module_notes,
        vocabularies: module_vocabularies,
        new_todo_list: module_new_todo_list,
    }
})