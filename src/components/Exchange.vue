<template>
	<section class="exchange">
		<div class="bg">
			
		</div>
	</section>
</template>

<script type="text/javascript">
	export default {

	}
</script>

<style scoped lang="less">
	.exchange {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		color: #000;
		background-color: #1e2b55;
		font-size: 1rem;
		text-align: left;
		overflow: hidden;

		.bg {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 85%;
			background-image: url('~@/assets/exchange_bg.jpg');
			background-size: 100% 110%;
			color: #000;
			font-size: 1rem;
			text-align: left;
			overflow: hidden;
		}
	}
</style>