<template lang="">
	<div>
		<div id="list-word">
			<p>All</p>
	
			<div v-for="(date, index) in words" :key="index" class="group-by-date">
				<div class="date">{{ date.constructor.name }}</div>
	
				<div v-for="(word, index) in date" :key="index" class='word'>
					<img src="https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg" />
					<div class="related-word">
						<div>{{ word.word }}<span>{{ word.pronounce }}</span></div>
						<div>{{ word.translate }}</div>
					</div>	
				</div>
			</div>
	
		</div>
		<div id="change-word">
			<FormWord />
		</div>
	</div>
</template>

<script>
export default {
	layout: 'words',
	data() {
		return {
			words: {
				"Today": [{
						image: null,
						word: "dfdfsdjf",
						pronounce: '/dfdfdsđ/',
						translate: "dfdsfsdfd"
					},
					{
						image: null,
						word: "dfdfsdjf",
						pronounce: '/dfdfdsđ/',
						translate: "dfdsfsdfd"
					},
					{
						image: null,
						word: "dfdfsdjf",
						pronounce: '/dfdfdsđ/',
						translate: "dfdsfsdfd"
					},
					{
						image: null,
						word: "dfdfsdjf",
						pronounce: '/dfdfdsđ/',
						translate: "dfdsfsdfd"
					},
					{
						image: null,
						word: "dfdfsdjf",
						pronounce: '/dfdfdsđ/',
						translate: "dfdsfsdfd"
					},
					{
						image: null,
						word: "dfdfsdjf",
						pronounce: '/dfdfdsđ/',
						translate: "dfdsfsdfd"
					},
				],
				"Todayddd": [{
						image: null,
						word: "dfdfsdjf",
						pronounce: '/dfdfdsđ/',
						translate: "dfdsfsdfd"
					},
					{
						image: null,
						word: "dfdfsdjf",
						pronounce: '/dfdfdsđ/',
						translate: "dfdsfsdfd"
					},
					{
						image: null,
						word: "dfdfsdjf",
						pronounce: '/dfdfdsđ/',
						translate: "dfdsfsdfd"
					},
					{
						image: null,
						word: "dfdfsdjf",
						pronounce: '/dfdfdsđ/',
						translate: "dfdsfsdfd"
					},
					{
						image: null,
						word: "dfdfsdjf",
						pronounce: '/dfdfdsđ/',
						translate: "dfdsfsdfd"
					},
					{
						image: null,
						word: "dfdfsdjf",
						pronounce: '/dfdfdsđ/',
						translate: "dfdsfsdfd"
					},
				]
			}
		}
	},
	methods: {
		
	}
}
</script>

<style lang="css" scoped>

</style>