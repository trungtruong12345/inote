export const state = () => ({
    status_code: null,
    data: []
})

export const mutations = {
    FETCH_DATA(state, { data, status }) {
        state.status_code = status
        state.data = data
    }
}

export const actions = {
    async fetchNotes({ dispatch, commit },) {
        var router = 'notes'
        var res = await dispatch('api/get', { router }, { root: true })
        await commit("FETCH_DATA", { data: res.data, status: res.status })
    }
}

export const getters = {
    status_code: state => state.status_code,
    notes: state => state.data
}