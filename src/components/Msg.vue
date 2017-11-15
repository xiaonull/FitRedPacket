<template>
	<section class="msg" v-if="display">
		<p class="text">{{msg}}</p>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				msg: '',
				display: false
			}
		},
		mounted() {
			this.bindEvent();
		},
		methods: {
			bindEvent() {
				hts_bus.$on('openMsg', (msg) => {
					this.msg = msg;
					this.display = true;

					let t = setTimeout(() => {
						this.msg = '';
						this.display = false;

						clearTimeout(t);
					}, 2000);
				});
			}
		}
	}
</script>

<style scoped lang="less">
	.msg {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.3);
		z-index: 50;
		text-align: center;

		.text {
			display: inline-block;
			position: relative;
			top: 35%;
			background-color: rgba(0, 0, 0, 0.5);
			width: 80%;
			min-height: 6rem;
			padding: 0.5rem;
			line-height: 6rem;
			font-size: 1.6rem;
			color: #fff;
			border-radius: 0.5rem;
		}
	}
</style>