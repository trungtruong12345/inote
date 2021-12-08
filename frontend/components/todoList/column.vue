<template lang="">
	<div class="todo-column" :index="index">
		<p class="column-title sticky-top">{{column.title}}</p>
		<Todo v-for="(task) in column.tasks" :key="task.id" :title="task.title" :bgColor="task.color" :est="task.est" :id="task.id" :time="task.time" />
	</div>
</template>

<script>
import $ from "jquery";
import { mapActions, mapGetters } from "vuex";

export default {
	props: ["column", "index"],
	data() {
		return {
			cangetmore: true
		}
	},
	methods: {
		...mapActions("todoList", ["getmore"])
	},
	mounted() {
		var column = $(`.todo-column[index='${this.index}']`)
		var getmore = this.getmore

		column.scroll(() => {
			if(this.cangetmore == false) return;

			var lastChil = column.children(".todo:last")
			var offset = lastChil.offset()
			if (offset.top <= column.offset().top + column.height()) {
				var status = parseInt(column.attr("index"))
				var lastId = parseInt(lastChil.attr("id-todo"))
				getmore({ status, lastId }).then(res => {
					if(res.data.length <= 0){
						this.cangetmore = false
						return
					}
					res.data.forEach(todo => {
						this.$emit('update-column', { columnIndex: status, todo: todo})
					});
				})
			}
		});
	},
}
</script>

<style lang="css" scoped>

</style>