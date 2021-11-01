export const state = () => ({
  status_code: null,
  data: []
})

export const mutations = {
  SET_DATA(state, { data, status_code }) {
    state.data = data
    state.status_code = status_code
  },

  CHANGE_TODO(state, { date, idTodoList, idTodo, key, value }) {
    state.data[date].filter((item) => item.id === idTodoList)[0].todos.filter((item) => item.id === idTodo)[0][key] = value
  },

  DELETE_TODO_LIST(state, { date, idTodoList }) {
    state.data[date] = state.data[date].filter(item => item.id != idTodoList)
  },

  DELETE_TODO(state, { date, idTodoList }) {
    state.data[date].filter((item) => item.id === idTodoList)[0].todos = state.data[date].filter((item) => item.id === idTodoList)[0].todos.filter(item => item.title != null && item.title != '')
  }
}

export const actions = {
  async fetchTodoList({ dispatch, commit }) {
    var router = 'todo_lists'
    const res = await dispatch('api/get', { router }, { root: true })
    commit("SET_DATA", { data: res.data, status_code: res.status })
  },

  async changeTodo({ commit, dispatch, state }, { date, idTodoList, idTodo, key, value }) {
    commit("CHANGE_TODO", { date, idTodoList, idTodo, key, value })
    var router = `todo_lists/${idTodoList}/todos/${idTodo}`
    if ((value == null || value == '') && key == 'title') {
      await dispatch(`api/delete`, { router: router }, { root: true })
      commit("DELETE_TODO", { date, idTodoList })
    }
    else {
      await dispatch('api/put', { router: router, data: { todo: { [key]: value } } }, { root: true })
    }

    var todos = state.data[date].filter((item) => item.id === idTodoList)[0].todos.filter((item) => item.title != "" && item.title != null)
    if (todos.length < 1) {
      router = `todo_lists/${idTodoList}`
      // await dispatch(`api/delete`, { router: router }, { root: true })
      commit("DELETE_TODO_LIST", { date, idTodoList })
    }

  },
}

export const getters = {
  data: state => state,
  status_code: state => state.status_code,
  todoList: state => state.data,
}
