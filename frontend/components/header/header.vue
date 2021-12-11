<template lang="">
	<div id="header" class="sticky-top">
		<div class="container-lg">

			<!-- web app -->
			<div class="menu-left">
				<div id="icon" @click="showSidebar = !showSidebar">
					<i class="bi bi-list"></i>
				</div>
				<div id="menu-left" :class="showSidebar ? 'slide-in-left' : 'slide-out-left'">
					<div id="menu">
						<nuxt-link to="/" class="link">
							<span><i class="bi bi-house-door-fill"></i></span>Home
						</nuxt-link>
						<nuxt-link to="/todoList" class="link">
							<span><i class="bi bi-stickies-fill"></i></span>Todo-list
						</nuxt-link>
						<nuxt-link to="/notes" class="link">
							<span><i class="bi bi-journal-bookmark-fill"></i></span>Note
						</nuxt-link>
						<nuxt-link to="/words" class="link">
							<span><i class="bi bi-file-word-fill"></i></span>Words
						</nuxt-link>
					</div>
				</div>
			</div>
			<!-- web app -->

			<div class="user">
				<div class="user-icon">
					<img src='@/assets/images/user.png' />
				</div>
	
				<div class="username">trung truong</div>
			</div>
	
			<div class="menu">
				<nuxt-link to="/words">Wordes</nuxt-link>
				<nuxt-link to="/notes">Notes</nuxt-link>
				<nuxt-link to="/todoList">Todo-list</nuxt-link>
			</div>
	
			<div class="functions">
				<div class="search-icon">
					<img src='@/assets/images/search.png' />
				</div>
	
				<div class="icon-add" @click="onadd">
					<img src='@/assets/images/add.png' />
				</div>
			</div>
	
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showSidebar: false
		}
	},
	methods: {
		onadd() {
			var routeName = this.$route.name
			if (["todoList", "todoList-id", "todoList-new"].includes(routeName)) {
				this.$router.push(`/todoList/new`)
			}
		}
	},
}
</script>

<style lang="">

</style>