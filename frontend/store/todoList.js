export const state = () => ({})

export const mutations = {}

export const actions = {
	async fetchTodoList({ dispatch, commit }) {
		const router = 'todo_lists'
		const res = await dispatch('api/get', { router }, { root: true })
		return res
	},

	async updateOrder({ dispatch }, { id, beforeId, afterId, status }) {
		const router = `todo_lists/${id}/order`
		const res = await dispatch('api/put', {
			router: router, data: {
				before: beforeId,
				after: afterId,
				status: status
			}
		}, { root: true })
		return res.data
	},

	async createTodoList({ dispatch }, { status, title, color, content, est }) {
		const router = "todo_lists"
		const res = await dispatch("api/post", { router: router, data: { todo_list: { status, title, color, content, est } } }, { root: true })
		return res.data
	},

	async updateTodoList({ dispatch }, {id, status, title, color, content, est }){
		const router = `todo_lists/${id}`
		const res = await dispatch("api/put", { router: router, data: { todo_list: { status, title, color, content, est } } }, { root: true })
		return res.data
	},

	async show({dispatch}, {id: id}){
		const router = `todo_lists/${id}`
		const res = await dispatch("api/get", {router: router}, {root: true})
		return res.data
	},

	async getmore({dispatch}, {status, lastId}){
		const router = `get_more_todo?status=${status}&last_id=${lastId}`
		const res = await dispatch("api/get", {router: router}, {root: true})
		return res.data
	}
}

export const getters = {}
