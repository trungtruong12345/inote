<template lang="">
	<div>
		<FormTodo :id="id" />
	</div>
</template>
<script>
export default {
	layout: "todoList",
	data() {
		return {
			id: null
		}
	},
	created() {
		this.id = this.$route.params.id
	},
}
</script>
<style lang="">
	
</style>