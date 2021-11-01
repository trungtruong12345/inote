import axios from "axios"

export const state = () => ({
    headers: {
        Authorization: null
    }
})

export const mutations = {
    UPDATE_HEADERS(state, token) {
        state.headers['Authorization'] = token || null
    }
}

export const actions = {
    async refreshToken({ commit, dispatch, rootState }) {
        await dispatch('auth/setToken', {}, { root: true })
        commit('UPDATE_HEADERS', rootState.auth.token)
    },

    async post({ dispatch, state }, { router, data }) {
        await dispatch('refreshToken')
        return await axios.post(`${process.env.URL_BACKEND}${router}`, data, state)
    },
    async get({ dispatch, state }, { router }) {
        await dispatch('refreshToken')
        return await axios.get(`${process.env.URL_BACKEND}${router}`, state)
    },
    async put({ dispatch, state }, { router, data }) {
        await dispatch('refreshToken')
        return await axios.put(`${process.env.URL_BACKEND}${router}`, data, state)
    },
    async delete({ dispatch, state }, { router }) {
        await dispatch('refreshToken')
        return await axios.delete(`${process.env.URL_BACKEND}${router}`, state)
    }
}