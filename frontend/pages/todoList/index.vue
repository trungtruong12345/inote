<template lang="">
	<div class="d-flex align-items-stretch flex-nowrap justify-content-between h-100">
		<Column v-for="(column, index) in columns" :key="column.title" :column="column" :index="index" @update-column="updateColumn" />
	</div>
</template>

<script>
import $ from "jquery";
import { mapActions } from "vuex";

const ID_TODO_LIST = '#todo-list'
const CLASS_TODO_LIST = `${ID_TODO_LIST} .todo-list`;
const CLASS_TODO_COLUMN = `${ID_TODO_LIST} .todo-column`
const CLASS_TODO = `${ID_TODO_LIST} .todo`

export default {
	layout: "todoList",
	data() {
		return {
			columns: [],

			mouseDown: false,
			timoutId: null,
			intervalId: null,
			relatedAfterElement: null
		};
	},
	methods: {
		...mapActions("todoList", ["fetchTodoList", "updateOrder"]),
		startEvents(){
			const todos = $(`${CLASS_TODO}[setted='false']`)
			$(todos).each((index, todo) => {
				$(todo).attr("setted", "true")
				$(todo).on("mousedown touchstart", (e) => {
					this.onMousedown(todo, e)
				})

				$(todo).on("mouseup touchend", (e) => {
					this.onMouseup(todo)
				})
			})
		},
		onMousedown(todo, e){
			e.preventDefault()
			this.timoutId = setTimeout(() => {
				const width = $(todo).width()
				const height = $(todo).height()
				const offset = todo.getBoundingClientRect()
				$(todo).css({
					top: `${offset.top}px`,
					left: `${offset.left}px`
				})
				$(todo).width(width)
				$(todo).height(height)
				$(todo).addClass("dragging")
				this.mouseDown = true
				this.relatedAfterElement = $("<div class='relatedAfterElement'></div>").css({
					"background-color": $(todo).css("background-color"),
					"min-height": $(todo).height()
				})
			}, 140);
		},
		onMouseup(todo){
			clearTimeout(this.timoutId)
			if (this.mouseDown == false) return

			$(todo).removeClass("dragging")
			$(".relatedAfterElement").before($(todo))
			$(".relatedAfterElement").remove()
			this.mouseDown = false

			let beforeId, afterId, status
			const beforeTodo = $(todo).prev()
			const afterTodo = $(todo).next()

			if (beforeTodo.hasClass("todo")) {
				beforeId = $(beforeTodo).attr("id-todo")
			} else {
				beforeId = null
			}

			if (afterTodo.attr("id-todo") == $(todo).attr("id-todo")) {
				afterId = null
			} else {
				afterId = afterTodo.attr("id-todo")
			}
			status = parseInt($(todo).parent().attr("index"))
			this.updateOrder({
				id: $(todo).attr("id-todo"),
				beforeId: beforeId,
				afterId: afterId,
				status: status
			})
		},
		mouseMove(){
			const columns = $(CLASS_TODO_COLUMN)

			var onMousemove = (e) => {
				if (this.mouseDown == false) return;

				const clientX = e.type == "touchmove" ? e.touches[0].clientX : e.clientX
				const clientY = e.type == "touchmove" ? e.touches[0].clientY : e.clientY
				$(".dragging").css({
					top: `${clientY - 38}px`,
					left: `${clientX - 120}px`
				})
				const column = this.getColumn(clientX)
				this.autoScrollWhenTouchmove(clientX, clientY, column)
				const afterElement = this.getTaskAfter(column, clientY)
				if (afterElement) {
					afterElement.before(this.relatedAfterElement)
				} else {
					column.append(this.relatedAfterElement);
				}
			}
			$(columns).each((index, column) => {
				$(column).on("mousemove touchmove", (e) => {
					return onMousemove(e)
				})
			})
		},
		getColumn(x){
			const columns = $(CLASS_TODO_COLUMN)
			var result = null
			for (let i = 0; i < $(columns).length; i++) {
				const column = $(columns)[i];
				const boxColumn = column.getBoundingClientRect()
				if (x <= boxColumn.right && x >= boxColumn.left) {
					result = $(column)
					break
				}
			}
			if (result) return result
			else return $($(columns)[0])
		},
		getTaskAfter(column, y){
			const todos = [...column.children(".todo:not(.dragging, .relatedAfterElement)")]
			var result = null

			for (let i = 0; i < todos.length; i++) {
				const todo = todos[i];
				const box = todo.getBoundingClientRect()
				const offset = y - box.top - box.height / 2
				if (offset < 0) {
					result = $(todo)
					break
				}
			}
			return result
		},
		autoScrollWhenTouchmove(x, y, column){
			clearInterval(this.intervalId)
			const todoList = $(CLASS_TODO_LIST)
			const width = todoList.width()
			const height = todoList.height()
			const offset = todoList.offset()
			const top = offset.top
			const left = offset.left
			if (x >= left + width - 20) {
				this.intervalId = setInterval(() => {
					todoList.scrollLeft(todoList.scrollLeft() + 5);
				}, 10)
			} else if (x <= left + 20) {
				this.intervalId = setInterval(() => {
					todoList.scrollLeft(todoList.scrollLeft() - 5);
				}, 10)
			} else if (y >= top + height - 20) {
				this.intervalId = setInterval(() => {
					column.scrollTop(column.scrollTop() + 5);
				}, 10)
			} else if (y <= top + 20) {
				this.intervalId = setInterval(() => {
					column.scrollTop(column.scrollTop() - 5);
				}, 10)
			}
		},
		updateColumn(e) {
			var { columnIndex, todo } = e
			if (this.columns[columnIndex].tasks.filter(item => item.id == todo.id).length > 0) return

			this.columns[columnIndex].tasks.push(todo)
			setTimeout(()=>{
				this.startEvents();
			}, 200)
		}
	},
	async mounted() {
		var res = await this.fetchTodoList()
		this.columns = res.data.columns
	},
	updated() {
		this.startEvents();
		this.mouseMove()
	}
}
</script>

<style lang="css" scoped>

</style>