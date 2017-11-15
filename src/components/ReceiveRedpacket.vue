<template>
	<section class="receiveRedpacket">
		<div class="share" v-if="showShare" @click="close">
			<div class="bg"></div>
		</div>
		<div class="main_rp">
			<p class="text">恭喜您抢到</p>
			<p class="money">￥{{main_RP}}</p>
			<div class="rule">
				<p>想要更大红包，</p>
				<p>赶紧分享给好友吧！</p>
			</div>
			<div class="btnGroup">
				<div class="btn" @click="toMyProgress">我的进度</div>
				<div class="btn" @click="share">找人合体</div>
			</div>
		</div>
	</section>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				showShare: false,
				main_RP: '???',
			}
		},
		mounted() {
			document.title = '红包领取';

			if(!localStorage.phone || localStorage.phone === null) {
				this.$router.push('/login');
			}else {
				this.bindEvent();
			}
		},
		methods: {
			bindEvent() {
				hts_bus.$on('setMain_RP', (data) => {
					this.main_RP = data.main_RP;
				});
			},
			toMyProgress() {
				this.$router.push('myRedpacket');
			},
			share() {
				this.showShare = true;
			},
			close() {
				this.showShare = false;
			},
			login() {
				if(this.name === '' || this.phone === '') {
					hts_bus.$emit('openMsg', '请填写完整信息');

					return;
				}

				let reg = /^1[0-9]{10}$/;
				if(!reg.test(this.phone)) {
					hts_bus.$emit('openMsg', '请填写正确的手机号码');

					return;
				}

				let from = null;
				let option = {
					url: 'api/luckymoney/mainpacket/get',
					type: 'POST',
					data: {
						name: this.name,
						phone: this.phone,
						from_user: sessionStorage.from
					},
					success: function(result, status, xhr) {
						if(result.status_code === 0) {
							this.main_RP = result.data.total_money;

							setTimeout(() => {
								localStorage.userName = this.name;
								localStorage.phone = this.phone;
								this.$router.push('myRedpacket');
							}, 6000);
						}else if(result.status_code === 15) {
							localStorage.userName = this.name;
							localStorage.phone = this.phone;
							this.$router.push('myRedpacket');
						}else {
							hts_bus.$emit('openMsg', result.message);
						}
					}.bind(this),
					error() {
						hts_bus.$emit('openMsg', '抢红包失败');
					}
				}

				myAjax(option);
			}
		}
	}
</script>

<style scoped lang="less"> 
	.receiveRedpacket {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('~@/assets/4-01.png');
		background-size: 100% 110%;
		color: #000;
		font-size: 1rem;
		text-align: left;

		.main_rp {
			width: 70%;
			height: 35rem;
			margin: 20% auto 0 auto;
			background-image: url('~@/assets/rp_bg.png');
			background-size: 100% 100%;
			text-align: center;
			color: rgb(255, 232, 216);
			font-size: 1.7rem;

			p {
				margin: 0;
				position: relative;
				color: rgb(255, 195, 0);
			}

			.text {
				font-weight: 600;
				top: 13rem;
			}

			.money {
				top: 15.5rem;
				font-size: 3.5rem;
			}

			.rule {
				position: relative;
				top: 17rem;
				font-size: 1.3rem;
				line-height: 2.2rem;
			}

			.btnGroup {
				position: relative;
				top: 18rem;
				font-size: 0;

				.btn {
					display: inline-block;
					width: 9rem;
					height: 3.6rem;
					line-height: 3.6rem;
					background: rgb(255, 141, 26);
					border: 1px solid rgba(0, 0, 0, 0.2);
					border-radius: 5px;
					font-size: 1.5rem;
					margin-left: 0.5rem;
					margin-right: 0.5rem;
				}
			}

		}

		.share {
			position: absolute;
			z-index: 10;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.8);

			.bg {
				width: 70%;
				height: 28rem;
				margin: 3rem auto;
				background-image: url('~@/assets/share.png');
				background-size: contain;
				background-repeat: no-repeat;
				background-position: center center;
			}
		}
	}
</style>