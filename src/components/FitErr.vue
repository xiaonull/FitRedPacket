<template>
	<section class="fitErr">
		<div class="header"></div>
		<div class="main">
			<p class="money">{{main_rp}}元</p>
			<p class="text">主红包</p>
		</div>
		<div class="bottom">
			<div class="continueFit">
				<div class="btn" @click="toRedPacketFit"></div>
			</div>
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
		data() {
			return {
				main_rp: 0
			}
		},
		mounted() {
			document.title = '红包合体';

			this.bindEvent();
		},
		methods: {
			bindEvent() {
				hts_bus.$on('setFitErr', (data) => {
					// console.log(data)
					this.main_rp = data.main_rp;
				});
			},
			toRedPacketFit() {
				this.$router.push('/RedPacketFit');
			}
		}
	}
</script>

<style scoped lang="less"> 
	.fitErr {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('~@/assets/bg7.png');
		background-size: 100% 113%;
		background-position: 0 80%;
		color: #000;
		font-size: 1rem;
		text-align: left;

		p {
			margin: 0;
		}

		.header {
			width: 52%;
			margin: 2.5rem auto;
			height: 3.6rem;
			background-image: url('~@/assets/bg3.png');
			background-size: 100% 100%;
		}

		.main {
			position: absolute;
			top: 40%;
			left: 50%;
			width: 14rem;
			height: 8rem;
			margin-left: -6.5rem;
			margin-top: -1.5rem;
			text-align: center;
			font-size: 2.2rem;
			color: rgb(255, 232, 216);

			.money {
				
			}
		}

		.bottom {
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 20rem;

			p {
				margin: 0;
			}

			.continueFit {
				width: 80%;
				margin: 9rem auto 0 auto;
				overflow: hidden;

				.btn {
					width: 102%;
					height: 2.7rem;
					margin-left: -1%;
					position: relative;
					background-image: url('~@/assets/bg6.png');
					background-size: 100% 100%;
				}
			}

			.back {
				margin-top: 1rem;
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
	}
</style>