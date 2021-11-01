<template lang="">
	<div id="todo_list">
		<div class="group_by_date" v-for="(date, index) in Object.keys(todoList)" :key="index">
			<div class='date'>
				{{ date }}
			</div>
			<div class='related_group_by_date scale-in-hor-left'>
				<div class="table_todo" v-for="(item, index) in todoList[date]" :key="todoList[date].id">
					<todo v-for="(todo, index) in item.todos" :key="todo.id" :todo='todo' :idTodoList="item.id" :date="date"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
	layout: "home",
	middleware: "auth",
	methods: {
		...mapActions('todoList', ['fetchTodoList'])
	},
	computed: {
		...mapGetters('todoList', ['todoList'])
	},
	async created(){
		await this.fetchTodoList()
	}
};
</script>

<style lang="css" scoped>

</style>