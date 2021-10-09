const dataDefault = {
    id: null,
    image: '/images/no_image.jpeg',
    word: 'new word',
    translate: 'từ mới',
    example: 'Example',
    pronounce: "/kə'mju:nikeit/"
}

export const state = () => ({
    id: null,
    image: '',
    word: '',
    translate: '',
    example: '',
    pronounce: ''
})

export const mutations = {
    SET_DEFAULT(state) {
        state.id = dataDefault.id
        state.image = dataDefault.image
        state.word = dataDefault.word
        state.translate = dataDefault.translate
        state.example = dataDefault.example
        state.pronounce = dataDefault.pronounce
    },
    ON_CHANGE(state, { id, image, word, translate, example, pronounce }) {
        state.id = id
        state.image = image
        state.word = word
        state.translate = translate
        state.example = example
        state.pronounce = pronounce
    },
}

export const actions = {
    resetData({ commit }) {
        commit('SET_DEFAULT')
    },

    onUpdateData({ commit }, { id, image, word, translate, example, pronounce }) {
        commit('ON_CHANGE', { id, image, word, translate, example, pronounce })
    },

    async onUpdateOrCreate({ dispatch, state }, { vocabulary_word }) {
        var router = 'vocabulary_words'
        if (state.id) {
            var res = await dispatch('api/put', { router: `${router}/${state.id}`, data: vocabulary_word }, { root: true })
        } else {
            var res = await dispatch('api/post', { router: router, data: vocabulary_word }, { root: true })
        }
        await dispatch('vocabularyWords/fetchVocabularyWords', null, { root: true })
        dispatch('headerDefault/toggleModelFade', null, { root: true })
        return res
    },

    async onDestroy({ dispatch, state }) {
        var router = `vocabulary_words/${state.id}`
        await dispatch('api/delete', { router }, { root: true })
        await dispatch('vocabularyWords/fetchVocabularyWords', null, { root: true })
    }
}

export const getters = {
    information: state => state,
    id: state => state.id,
    image: state => state.image,
    word: state => state.word,
    translate: state => state.translate,
    example: state => state.example,
    pronounce: state => state.pronounce
}