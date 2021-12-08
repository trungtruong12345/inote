<template lang="">
	<div class="todo" :id-todo="id" :style="`background-color: ${bgColor}`" @mousedown="ondown" @touchstart="ondown" @mouseup="onup" @touchend="onup" setted="false">
		<div class="title">
			{{ title }}
		</div>
	
		<div class="est" v-if="time">
			<span><i class="bi bi-clock"></i></span> {{ time }}
		</div>
	</div>
</template>

<script>
export default {
	props: ['title', 'est', 'bgColor', 'id', 'time'],
	data() {
		return {
			idTimeout: null,
			redirict: true
		}
	},
	methods: {
		ondown() {
			this.idTimeout = setTimeout(() => {
				this.redirict = false
			}, 139)
		},
		onup() {
			clearTimeout(this.idTimeout)
			if (this.redirict == false) {
				this.redirict = true
				return
			} else {
				this.$router.push(`/todoList/${this.id}`)
			}
		}
	},
}
</script>

<style lang="css" scoped>

</style>