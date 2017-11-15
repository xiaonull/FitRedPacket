<template>
	<section class="fitSuc">
		<div class="header"></div>
		<div class="main">
			<span ref="money" class="money">{{main_rp}}元</span>
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
				main_rp: 0,
				friend_count: 0,
				compound_count: 0

			}
		},
		mounted() {
			document.title = '红包合体';

			this.bindEvent();
		},
		methods: {
			bindEvent() {
				let that = this;
				hts_bus.$on('setFitSuc', (data) => {
						// $('.money').html(data.main_rp + '元');
						that.main_rp = data.main_rp;
						that.friend_count = data.friend_count;
						that.compound_count = data.compound_count;
					// console.log(data.main_rp + '元')
				});
			},
			toRedPacketFit() {
				this.$router.push('/RedPacketFit');
			},
		}
	}
</script>

<style scoped lang="less"> 
	.fitSuc {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('~@/assets/bg5.png');
		background-size: 100% 100%;
		color: #000;
		font-size: 1rem;
		text-align: left;

		.header {
			width: 52%;
			margin: 2.5rem auto;
			height: 3.6rem;
			background-image: url('~@/assets/bg3.png');
			background-size: 100% 100%;
		}

		.main {
			position: absolute;
			top: 50%;
			left: 50%;
			width: 14rem;
			height: 8rem;
			margin-left: -6.5rem;
			margin-top: -4.8rem;
			text-align: center;
			line-height: 8rem;

			.money {
				font-size: 3.8rem;
				color: rgb(227, 60, 100);
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
				margin: 6.5rem auto 0 auto;
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
				margin-top: 2rem;
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