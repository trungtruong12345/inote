const dataDefault = {
    id: null,
    title: "Title",
    content: "Content",
    bg_color: "#FFE8A5"
}

export const state = () => ({
    id: null,
    title: null,
    content: null,
    bg_color: null,
})


export const mutations = {
    ON_CHANGE(state, { id, title, content, bg_color }) {
        state.title = title
        state.content = content
        state.bg_color = bg_color
        state.id = id
    },
    SET_DEFAULT(state) {
        state.title = dataDefault.title
        state.content = dataDefault.content
        state.bg_color = dataDefault.bg_color
        state.id = dataDefault.id
    }
}

export const actions = {
    resetData({ commit }) {
        commit('SET_DEFAULT')
    },

    async onUpdateData({ commit }, { id, title, content, bg_color }) {
        await commit('ON_CHANGE', { id, title, content, bg_color })
    },

    async onUpdateOrCreate({ dispatch, state }, { note }) {
        var router = 'notes'
        if (state.id) {
            var res = await dispatch('api/put', { router: `${router}/${state.id}`, data: note }, { root: true })
        } else {
            var res = await dispatch('api/post', { router: router, data: note }, { root: true })
        }
        await dispatch('notes/fetchNotes', null, {root: true})
        dispatch('headerDefault/toggleModelFade', null, { root: true })
        return res
    },

    async onDestroy({ state, dispatch }, {id}) {
        var router = 'notes/'
        if (id) {
            router += id
        }
        else {
            router += state.id
        }
        await dispatch('api/delete', { router }, { root: true })
        await dispatch('notes/fetchNotes', null, { root: true })
        if(!id){
            dispatch('headerDefault/toggleModelFade', null, { root: true })
        }
    }
}

export const getters = {
    id: state => state.id,
    title: state => state.title,
    content: state => state.content,
    bg_color: state => state.bg_color
}