<template>
	<section class="instructionMerge">
		<h2 class="header">红包合体玩法说明</h2>
		<p class="main_text">1.抢到红包后与好友分享合体可使红包数额变大；</p>
		<p class="main_text">2.红包数额随即累加，与好友合体至1118即可获得1118元现金券。</p>
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
		mounted() {
			if(this.$router.history.current.fullPath === '/InstructionMerge') {
				document.title = '红包兑换说明';
			}
		},
	}
</script>

<style scoped lang="less"> 
	.instructionMerge {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('~@/assets/4-01.png');
		background-size: 100% 113%;
		background-position: 0 80%;
		color: #fff;
		font-size: 1rem;
		text-align: left;

		.header {
			text-align: center;
			font-size: 1.8rem;
			margin-top: 2.5rem;
			margin-bottom: 4rem;
		}

		.main_text {
			font-size: 1.5rem;
			margin: 1rem 3rem;
			line-height: 2.5rem;
			color: rgb(229, 229, 229);
		}

		.footer {
			position:absolute;
			width: 100%;
			height: 6.8rem;
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