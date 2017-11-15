<template>
	<section class="fitFinally">
		<div class="header"></div>
		<div class="bottom">
			<div class="toExchange">
				<div class="btn" @click="toExchange"></div>
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

<script>
	export default {
		mounted() {
			if(this.$router.history.current.fullPath === '/FitFinally') {
				document.title = '红包合体';
			}
		},
		methods: {
			toExchange() {
				this.$router.push('/ScanCodeToast');
			 }
		}
	}
</script>

<style scoped lang="less"> 
	.fitFinally {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('~@/assets/bg10.png');
		background-size: 100% 115%;
		background-position: 0 60%;
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
			height: 17rem;

			p {
				margin: 0;
			}

			.toExchange {
				width: 80%;
				margin: 6rem auto 0 auto;
				overflow: hidden;

				.btn {
					width: 102%;
					height: 2.7rem;
					margin-left: -1%;
					position: relative;
					background-image: url('~@/assets/bg11.png');
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
				margin-top: 0.5rem;
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
					margin-top: 0.5rem;
				}
			}
		}
	}
</style>

