<template lang="">
    <div class='ttt'>
        <div class='btn-dele' @click='onDelete'>
            <i class="material-icons">clear</i>
        </div>
    
        <div class='note pmd-z-depth shadow-demo' :style="`background-color: ${note.bgColor}`">
    
            <div class='content'>
                <table>
                    <tr v-for="(todo, index) in todo_list" :key="index">
                        <td @click="onDone(todo.id)" :class="todo.done ? 'done': ''">
                            {{ todo.content }}
                        </td>
                        <td class='clear'>
                            <div @click="onClose(todo.id)">
                                <i data-v-70186325="" class="material-icons md-dark pmd-md">clear</i>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
    
        </div>
    </div>
</template>

<script>
export default {
    props: {
        note: Object,
    },
    data() {
        return {
            todo_list: JSON.parse(this.note.content)
        }
    },
    methods: {
        onchange() {
            this.$store.dispatch('notes/updateNote', { title: null, bgColor: this.bgColor, content: JSON.stringify(this.todo_list), id: this.note.id })
        },
        onDone(id) {
            new Promise((resolve) => {
                    for (let i = 0; i < this.todo_list.length; i++) {
                        if (this.todo_list[i].id == id) {
                            this.todo_list[i].done = !this.todo_list[i].done
                            resolve(true)
                            break;
                        }
                    }
                })
                .then(this.onchange())
        },
        onClose(id) {
            new Promise((resolve) => {
                    var filtered = this.todo_list.filter(function(value) {
                        return value.id != id
                    });
                    this.todo_list = filtered
                    resolve(true)
                })
                .then(this.onchange())
        },
        onDelete() {
            var action = confirm('Are you sure ?')
            if(action == true) {
                this.$store.dispatch('notes/deleteNote', { id: this.note.id })
            }
        },
    },
};
</script>

<style lang="scss" scoped>
$color: #f1c433;
.done {
    text-decoration: line-through;
}

table {
    width: 100%;
}

.clear {
    div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        i {
            font-size: 16px;
            color: #00000063;
        }
    }
}

.done {
    text-decoration: line-through;
}

.note {
    margin-top: 7px;
    margin-bottom: 7px;
    border-radius: 12px;
    padding: 14px;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 2px 9px 0px #b6aeaeba;
    }
    .content {
        width: 100%;
        word-break: break-word;
        margin-top: 8px;
    }
}

.btn-dele {
    cursor: pointer;
    position: absolute;
    right: 3px;
    top: 9px;
    display: none;
    i {
        font-size: 21px;
        color: #5a000047;
    }
}

@media all and (min-width: 772px) {
    .ttt:hover {
        .btn-dele {
            display: block;
        }
    }
}

@media all and (max-width: 771px) {
    .modal-dialog {
        width: 600px;
    }
}

@media all and (max-width: 620px) {
    .modal-dialog {
        min-width: 94%;
        max-width: -webkit-fill-available;
    }
}

@media all and (max-width: 547px) { 
    .ttt {
        .btn-dele {
            display: block;
        }
    }
}

.modal-body {
    min-height: 339px;
}

.modal-content {
    box-shadow: unset !important;
    border: 0px !important;
    &>div:nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 9px;
        .pmd-card-title-text {
            display: flex;
            align-items: center;
            button {
                padding: 0;
                display: flex;
                align-items: center;
                margin-right: 7px;
                justify-content: center;
                border-radius: 50%;
                width: 25px;
                height: 25px;
                i {
                    font-size: 33px;
                }
            }
        }
        div:nth-child(2) {
            button {
                border: 0px;
                font-size: 20px;
                background-color: unset;
            }
        }
    }
    .pmd-modal-action {
        display: flex;
        justify-content: flex-end;
        button:nth-child(1) {
            padding: 0px 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f16b41 !important;
            i {
                font-size: 30px;
                color: white;
            }
        }
    }
    .btn.pmd-btn-fab {
        padding: 0;
        border-radius: 50%;
        width: 42px;
        height: 42px;
        min-width: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: unset;
    }
}

.btn-edit {
    right: 38px !important;
}
</style>