<template>
	<section class="redPacketExchangeRule">
		<h2 class="header">1.红包兑换代金券说明</h2>
		<p class="main_text">成功合体1118元红包后，即可在万达西安one积分商城品牌商城兑换即可在万达西安one积分商城品牌商城兑换电子代金券，在11月18日-11日月19日（10：00-19：00）前往万达西安one销售中心激活。</p>
		<h2 class="header">2.积分兑换商品说明</h2>
		<p class="main_text">
			凡在万达西安one积分商城注册网友，在11月18日-11月19日，高新万达广场消费满1118元后，即可在万达西安one销售中心，将消费现金额兑换积分，换取大奖！
		</p>
		<!-- <div class="toExchange">
			通往兑换
		</div> -->
		<div class="bottom">
			<p class="back"><span><a href="/#/myRedpacket">返回首页</a></span></p>
			<div class="footer">
				<p class="text">
					<span>游戏规则</span>
					<span class="vertical_line"></span>
					<span>常见问题</span>
				</p>
				<p class="text_footer">西安万达one出品</p>
			</div>
		</div>
	</section>
</template>

<script type="text/javascript">
	export default {

	}
</script>

<style scoped lang="less"> 
	.redPacketExchangeRule {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #fff;

		p {
			margin: 0;
		}

		.header {
			margin-top: 2.5rem;
			font-size: 1.8rem;
		}

		.main_text {
			color: rgb(80, 80, 80);
			font-size: 1.4rem;
			line-height: 2rem;
			margin: 2.5rem 2rem;
			text-align: left;
		}

		.toExchange {
			height: 4rem;
			line-height: 4rem;
			margin: 2.5rem 2rem 0 2rem;
			font-size: 1.7rem;
			color: #fff;
			border-radius: 0.5rem;
			background: rgb(255, 153, 0);
			border: 3px solid rgba(0, 0, 0, 0.2);
		}

		.bottom {
			position: absolute;
			width: 100%;
			height: 9rem;
			bottom: 0;
			left: 0;

			.back {
				font-size: 1.5rem;
				text-align: center;

				a {
					text-decoration: none;
				}

				a:hover, a:visited, a:link, a:active {
					color: rgb(42, 130, 228);
				}
			}

			.footer {
				margin-top: 1rem;
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
					margin-top: 1rem;
				}
			}
		}
	}
</style>