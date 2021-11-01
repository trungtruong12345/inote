import Cookies from "js-cookie"

// {store, route, redirect}
const routes = ['/sign-in', '/sign-up', '/reset-password', '/confirmation-code']

export default async function ({ route, store, redirect }) {
	if (!process.server) {
		var res = await store.dispatch('auth/auth')
		if (!routes.includes(route.path)) {
			if (res.data.status != 200) {
				redirect('/sign-in')
			}
		}
		else if (res.data.status == 200) {
			redirect('/words')
		}

		// Check by route
		switch (route.path) {
			case '/reset-password':
				if (!store.state.auth.email) {
					redirect('/sign-in')
				}
				break;
			case '/confirmation-code':
				if (!store.state.auth.user_id && !Cookies.get('user_id')) {
					redirect('/sign-in')
				}
				break;
			default:
				break;
		}
	}
}