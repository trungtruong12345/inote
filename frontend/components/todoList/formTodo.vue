<template lang="">
	<div class="form-todo">
		<form class="d-flex flex-column justify-content-start" @submit.prevent>
			<input type="text" class="input-title" aria-describedby="helpId" placeholder="Title" spellcheck=false v-model="title">
	
			<div class="dropdown">
				<button @click="myFunction" :class="'dropbtn ' + (color == 'rgb(255, 255, 255)' ? 'box-shadow' : '') " :style="`background-color: ${color}`"></button>
				<div id="myDropdown" class="dropdown-content">
					<a @click="()=>setColor('rgb(228, 193, 255)')" style="background-color: rgb(228, 193, 255)"></a>
					<a @click="()=>setColor('rgb(193, 244, 255)')" style="background-color: rgb(193, 244, 255)"></a>
					<a @click="()=>setColor('rgb(255, 193, 193)')" style="background-color: rgb(255, 193, 193)"></a>
					<a @click="()=>setColor('rgb(255, 255, 255)')" style="background-color: rgb(255, 255, 255)"></a>
					<a @click="()=>setColor('rgb(255, 230, 193)')" style="background-color: rgb(255, 230, 193)"></a>
					<a @click="()=>setColor('rgb(193, 255, 207)')" style="background-color: rgb(193, 255, 207)"></a>
				</div>
			</div>
	
			<div class="d-flex btn-select">
				<div @click="()=>getReview(false)" :class="'p-2 ' + (review ? '' : 'active')">Edit</div>
				<div @click="()=>getReview(true)" :class="'p-2 ' + (review ? 'active' : '')">Review</div>
			</div>
	
			<textarea :class="'input-content ' + (review ? 'd-none' : '')" placeholder="Content" spellcheck='false' v-model="content"></textarea>
	
			<div :class="'review input-content ' + (!review ? 'd-none' : '')" v-html="markdownToHtml"> </div>
	
			<date-picker v-model="est" format="DD-MM-YYYY  HH:mm a" type="datetime" lang="en" placeholder="Select datetime"></date-picker>
	
			<select class="select-status" v-model="status">
				<option value="0">Ideas</option>
				<option value="1">Todo</option>
				<option value="2">Doing</option>
				<option value="3">Done</option>
			</select>
	
			<button class="align-self-center btn-update" @click="onsubmit">
				{{ this.id ? "UPDATE" : "CREATE" }}
			</button>
		</form>
	</div>
</template>

<script>
import { marked } from 'marked';
import { mapActions, mapGetters } from "vuex";

export default {
	props: ["id"],
	data() {
		return {
			est: '',
			title: '',
			content: '',
			status: 0,
			color: 'rgb(255, 255, 255)',
			review: false
		}
	},
	methods: {
		...mapActions("todoList", ["createTodoList", "show", "updateTodoList"]),
		getReview(val) {
			this.review = val
		},
		setColor(val) {
			this.color = val
		},
		myFunction() {
			document.getElementById("myDropdown").classList.toggle("show");
		},
		async onsubmit() {
			var res
			if (this.id) {
				res = await this.updateTodoList({
					id: this.id,
					est: this.est,
					title: this.title,
					content: this.content,
					status: parseInt(this.status),
					color: this.color
				})
			} else {
				res = await this.createTodoList({
					est: this.est,
					title: this.title,
					content: this.content,
					status: parseInt(this.status),
					color: this.color
				})
			}
			if(parseInt(res.status) == 422){
				alert("Errors")
			}
			else {
				this.$router.push(`/todoList`)
			}
		}
	},
	computed: {
		markdownToHtml() {
			return marked(this.content)
		}
	},
	async created() {
		if (this.id) {
			var res = await this.show({ id: this.id })
			var { title, est, content, status, color } = res.data
			this.title = title
			this.est = est
			this.content = content
			this.status = status
			this.color = color
			this.review = true
		} else {
			this.review = false
		}
	},
	mounted() {
		window.onclick = function(event) {
			if (!event.target.matches('.dropbtn')) {
				var dropdowns = document.getElementsByClassName("dropdown-content");
				var i;
				for (i = 0; i < dropdowns.length; i++) {
					var openDropdown = dropdowns[i];
					if (openDropdown.classList.contains('show')) {
						openDropdown.classList.remove('show');
					}
				}
			}
		}
	},
}
</script>

<style lang="css" scoped>
.box-shadow {
	border: 1px solid #dee1e3 !important;
}
</style>
