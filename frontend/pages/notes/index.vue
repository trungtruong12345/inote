<template lang="">
	<div class="note_list d-flex justify-content-start flex-wrap align-items-start">
		<Note v-for="(item, index) in notes" :key="index" />
	</div>
</template>
<script>
export default {
	layout: "notes",	
	data() {
		return {
			notes: [1,2,3,43,46,7,8,8,34,5,324,23,423,432,34,34,3,423,4,234,234,5,415,3465,346,534]
		}
	},
}
</script>
<style lang="">
	
</style>