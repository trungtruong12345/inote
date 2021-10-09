export const state = () => ({
    status_code: null,
    data: []
})

export const mutations = {
    SET_DATA(state, { data, status_code }) {
        state.data = data
        state.status_code = status_code
    }
}

export const actions = {
    async fetchVocabularyWords({ dispatch, commit }) {
        var router = 'vocabulary_words'
        const res = await dispatch('api/get', { router }, { root: true })
        commit("SET_DATA", { data: res.data, status_code: res.status })
    }
}

export const getters = {
    vocabularyWords: state => state,
    status_code: state => state.status_code,
    data: state => state.data,
}