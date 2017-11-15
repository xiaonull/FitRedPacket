<template>
	<section class="redPacketFit">
		<div class="header"></div>
		<div class="bottom">
			<div class="ex">
				<!-- <p><a href="/#/FitErr">失败示例1</a></p>
				<p><a href="">终极示例</a></p> -->
			</div>
			<div class="startFit">
				<div class="btn" @click="startFit"></div>
			</div>
			<p class="back"><span><a href="/#/myRedpacket">返回首页</a></span></p>
			<div class="footer" @click="toInstruction">
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
		mounted() {
			document.title = '红包合体';
		},
		methods: {
			startFit() {
				let option = {
					url: 'api/luckymoney/compound?phone=' + localStorage.phone,
					type: 'GET',
					success: function(result, status, xhr) {
						if(result.status_code === 0) {
							if(result.data.is_ultimate === false) {
								this.$router.push('/FitSuc');
								setTimeout(() => {
									// console.log('00')
									hts_bus.$emit('setFitSuc', {
										main_rp: result.data.total_money,
										friend_count: result.data.friend_count,
										compound_count: result.data.compound_count,
									});
								}, 0)
								

							}else {
								this.$router.push('/FitFinally');
							}
						}else if(result.status_code === 16) {
							this.$router.push('/FitErr');

							setTimeout(() => {
								hts_bus.$emit('setFitErr', {
									main_rp: result.data.total_money,
								});
							}, 0);

						}else {
							hts_bus.$emit('openMsg', result.message);
						}
					}.bind(this),
					error() {
					}
				}

				myAjax(option);
			},
			toInstruction () {
				this.$router.push("/InstructionMerge")
			}
		}
	}
</script>

<style scoped lang="less"> 
	.redPacketFit {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('~@/assets/bg2.png');
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

		.bottom {
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 20rem;

			p {
				margin: 0;
			}

			.ex {
				float: right;
				text-align: center;
				color: rgb(255, 87, 51);
				font-size: 1.4rem;
				margin-right: 1.8rem;
				line-height: 2.5rem;

				a {
					text-decoration: none;
				}

				a:hover, a:visited, a:link, a:active {
					color: rgb(255, 87, 51);
				}
			}

			.startFit {
				width: 80%;
				margin: 7rem auto 0 auto;
				overflow: hidden;

				.btn {
					width: 102%;
					height: 2.7rem;
					margin-left: -1%;
					position: relative;
					background-image: url('~@/assets/bg4.png');
					background-size: 100% 100%;
				}
			}

			.back {
				margin-top: 1.5rem;
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
				margin-top: 1.3rem;
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