<template lang="">
	<div id="header" class="sticky-top">
		<div class="container-lg">
			<!-- Desktop start -->
			<div class="user">
				<div class="user-icon">
					<img src='@/assets/images/user.png' />
				</div>
	
				<div class="username">trung truong</div>
			</div>
	
			<div class="menu">
				<nuxt-link to="">Wordes</nuxt-link>
				<nuxt-link to="">Notes</nuxt-link>
				<nuxt-link to="">Todo-list</nuxt-link>
			</div>
	
			<div class="functions">
				<div class="search-icon">
					<img src='@/assets/images/search.png' />
				</div>
	
				<div class="icon-add" @click="onadd">
					<img src='@/assets/images/add.png' />
				</div>
			</div>
			<!-- Desktop end -->
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		onadd(){
			var routeName = this.$route.name
			if(["todoList", "todoList-id", "todoList-new"].includes(routeName)){
				this.$router.push(`/todoList/new`)
			}
		}
	},
}
</script>

<style lang="">

</style>