export const state = () => ({
	modelFade: false,
	showMenuLeft: false,
	showFormInput: false,
	showFormSearch: false,
	showBtnLogout: false,
})

export const mutations = {
	TOGGLE_MODEL_FADE(state, payload = true) {
		if (payload == false) {
			state.modelFade = false
		}
		else {
			state.modelFade = !state.modelFade
		}
	},
	TOGGLE_MENU_LEFT(state, payload = true) {
		if (payload == false) {
			state.showMenuLeft = false
		}
		else {
			state.showMenuLeft = !state.showMenuLeft
		}
	},
	TOGGLE_FORM_INPUT(state, payload = true) {
		if (payload == false) {
			state.showFormInput = false
		}
		else {
			state.showFormInput = !state.showFormInput
		}
	},
	TOGGLE_FORM_SEARCH(state, payload = true) {
		if (payload == false) {
			state.showFormSearch = false
		}
		else {
			state.showFormSearch = !state.showFormSearch
		}
	},
	TOGGLE_BTN_LOGOUT(state, payload = true) {
		if (payload == false) {
			state.showBtnLogout = false
		}
		else {
			state.showBtnLogout = !state.showBtnLogout
		}
	}
}

export const actions = {
	toggleModelFade({ dispatch, commit, state }) {
		commit('TOGGLE_MODEL_FADE')
		if (state.modelFade == false) {
			switch ($nuxt.$route.path) {
				case '/todo':
					dispatch("formTodoList/createTodoList", {}, { root: true })
					break;

				default:
					break;
			}
			commit('TOGGLE_MENU_LEFT', false)
			commit('TOGGLE_FORM_INPUT', false)
			commit('TOGGLE_BTN_LOGOUT', false)
		}
	},
	toggleMenuLeft({ dispatch, commit, state }) {
		commit('TOGGLE_MENU_LEFT')
		if (state.showMenuLeft == false) {
			commit('TOGGLE_MODEL_FADE', false)
		}
		else {
			commit('TOGGLE_MODEL_FADE')
		}
	},
	toggleFormInput({ dispatch, commit, state }) {
		commit('TOGGLE_FORM_INPUT')
		if (state.showFormInput == false) {
			commit('TOGGLE_MODEL_FADE', false)
		}
		else {
			commit('TOGGLE_MODEL_FADE')
		}
	},
	toggleFormSearch({ dispatch, commit, state }) {
		commit('TOGGLE_FORM_SEARCH')
	},
	toggleBtnLogout({ dispatch, commit, state }) {
		commit('TOGGLE_BTN_LOGOUT')
	}
}

export const getters = {
	modelFade: state => state.modelFade,
	showMenuLeft: state => state.showMenuLeft,
	showFormInput: state => state.showFormInput,
	showFormSearch: state => state.showFormSearch,
	showBtnLogout: state => state.showBtnLogout
}