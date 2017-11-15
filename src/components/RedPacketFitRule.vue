<template>
	<section class="redPacketFitRule">
		<h2 class="header">红包合体玩法说明</h2>
		<p class="main_text">在抢到主红包后，邀请好友合体助力，金额随机翻倍，合体朋友越多，红包累计金额越大。</p>
		<div class="footer">
			<p class="text">
				<span>游戏规则</span>
				<span class="vertical_line"></span>
				<span>常见问题</span>
			</p>
			<p class="text_footer">微信游戏出品</p>
		</div>
	</section>
</template>

<script type="text/javascript">
	export default {

	}
</script>

<style scoped lang="less"> 
	.redPacketFitRule {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('~@/assets/bg8.png');
		background-size: 100% 113%;
		background-position: 0 80%;
		color: #000;
		font-size: 1rem;
		text-align: left;

		.header {
			color: #fff;
			text-align: center;
			font-size: 2rem;
			margin-top: 3rem;
		}

		.main_text {
			color: #fff;
			font-size: 1.5rem;
			margin: 4rem 3rem;
			line-height: 2.5rem;
		}

		.footer {
			position:absolute;
			width: 100%;
			height: 6.5rem;
			bottom: 0;
			left: 0;
			margin-top: 0.3rem;
			font-size: 1rem;
			text-align: center;
			color: rgb(80, 80, 80);

			.text {
				.vertical_line {
					display: inline-block;
					width: 1px;
					height: 1.7rem;
					position: relative;
					top: 0.5rem;
					margin: 0 1rem 0 1rem;
					background-color: rgb(80, 80, 80);
				}
			}

			.text_footer {
				margin-top: 0.8rem;
			}
		}
	}
</style>