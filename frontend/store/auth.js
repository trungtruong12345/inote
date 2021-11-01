import Cookies from "js-cookie"

export const state = () => ({
	user_id: null,
	name: null,
	email: null,
	password: null,
	enterThePassword: null,
	remember: false,
	confirmationCode: null,
	newPassword: null,
	token: (Cookies.get('Authorization') || null),
})

export const mutations = {
	RESET_VALUE(state, { key }) {
		state[key] = null
	},
	CHANGE_VALUE(state, { key, value }) {
		state[key] = value
	},
	SET_TOKEN(state, { token }) {
		state.token = token
	}
}

export const actions = {
	setToken({ commit, state }, { token }) {
		if (token) {
			if (state.remember) {
				Cookies.set('Authorization', token, { expires: 7, })
			}
			else {
				Cookies.set('Authorization', token, {})
			}
			commit('SET_TOKEN', { token })
		}
		else {
			commit('SET_TOKEN', { token: (Cookies.get('Authorization') || null) })
		}
	},
	reset_value({ commit }, { key }) {
		commit("RESET_VALUE", { key: key })
	},
	change_value({ commit }, { key, value }) {
		commit("CHANGE_VALUE", { key: key, value: value })
	},

	async signUp({ dispatch, state }) {
		var router = 'sign_up'
		return await dispatch('api/post', { router, data: { email: state.email, password: state.password, password_confirmation: state.enterThePassword } }, { root: true })
	},
	async signIn({ dispatch, state }) {
		var router = 'sign_in'
		return await dispatch('api/post', { router, data: { email: state.email, password: state.password } }, { root: true })
	},
	async verifyEmailConfirmationCode({ dispatch, state }) {
		var user_id = Cookies.get('user_id')
		var router = `verify_email_confirmation_code?user_id=${user_id}&confirmation_code=${state.confirmationCode}`
		return await dispatch('api/get', { router }, { root: true })
	},
	signOut({ commit }) {
		Cookies.remove("Authorization")
		Cookies.remove("user_id")
		commit('SET_TOKEN', { token: null })
	},
	async auth({ dispatch, commit }) {
		var router = 'auth'
		var res = await dispatch('api/get', { router }, { root: true })
		if (res.data.status == 200) {
			var { user_id, name, email } = res.data
			commit('CHANGE_VALUE', { key: "user_id", value: user_id })
			commit('CHANGE_VALUE', { key: "name", value: name })
			commit('CHANGE_VALUE', { key: "email", value: email })
		}
		return res
	},
	async resendEmailConfirmationCode({ state, dispatch }) {
		var user_id = Cookies.get('user_id')
		var router = `resend_email_confirmation_code?email=${state.email}`
		if (user_id) {
			router += `&user_id=${user_id}`
		}
		if (!state.email) {
			return alert("Enter your email")
		}
		return await dispatch('api/get', { router }, { root: true })
	},
	async changePassword({ dispatch, state }) {
		var router = 'change_password'
		return await dispatch('api/post', { router: router, data: { email: state.email, password: state.newPassword, email_confirmation_code: state.confirmationCode } }, { root: true })
	}
}

export const getters = {
	user_id: state => { state.user_id || Cookies.get('user_id') },
	name: state => state.name,
	email: state => state.email,
	password: state => state.password,
	enterThePassword: state => state.enterThePassword,
	remember: state => state.remember,
	confirmationCode: state => state.confirmationCode,
	newPassword: state => state.newPassword,
	token: state => state.token
}