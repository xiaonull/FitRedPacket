<template>
	<section class="redPacketRecord">
		<div class="headImg">
			<img src="~@/assets/headImg.png" class="img">
		</div>
		<div class="main_RP">
			<p class="main_RP_header">我的主红包</p>
			<p>{{main_rp.toFixed(2)}}<span class="yuan">元</span></p>
			<p class="myRP">我得到的红包</p>
		</div>
		<div class="received">
			<p>{{num_receive}}人已领取</p>
			<p>这里只显示成功领取的红包</p>
		</div>
		<div class="record">
			<p class="title">本月</p>
			<div id="recordWrapper">
				<div class="list">
					<div class="item" v-for="item in records">
						<div class="left">
							<p>{{new Date(item.time).getMonth() + 1 + '-' + new Date(item.time).getDate()}}</p>
							<p>{{new Date(item.time).getHours() + ':' + new Date(item.time).getMinutes()}}</p>
						</div>
						<div class="right">领取中</div>
						<div class="center">
							<div class="head">
								<img src="~@/assets/headImg.png" class="img">
							</div>
							<p class="money">+{{item.money}}</p>
							<p class="text">对方正在接受红包 !</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				main_rp: 0.00,
				num_receive: 0,
				records: []
			}
		},
		mounted() {
			document.title = '我得到的红包';
			
			this.loadData();
		},
		methods: {
			loadData() {
				let option = {
					url: 'api/luckymoney/records?phone=' + localStorage.phone,
					type: 'GET',
					success: function(result, status, xhr) {
						if(result.status_code === 0) {
							this.main_rp = result.data.main_packet;
							this.num_receive = result.data.record_count;
							this.records = result.data.list;
							console.log(this.records)
							this.loadScroll();
						}
					}.bind(this),
					error() {
					}
				}

				myAjax(option);
			},
			loadScroll() {
				this.$nextTick(() => {
					if(!this.scroll) {
						this.scroll = new iScroll('recordWrapper', {
							scrollbarClass: 'myScrollbar',
							hScroll: true,
							hScrollbar: true,
							vScroll: true,
							vScrollbar: true,
							hideScrollbar: false,  
							preventDefault: false
						}); 
					}else {
						this.scroll.refresh();
					}
				})
			}
		}
	}
</script>

<style scoped lang="less"> 
	.redPacketRecord {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('~@/assets/bg.png');
		background-size: 100% 110%;
		color: #000;
		font-size: 1rem;
		text-align: left;

		p {
			margin: 0;
		}

		.headImg {
			position: absolute;
			width: 6.5rem;
			height: 6.5rem;
			left: 4.5rem;
			top: 8%;

			.img {
				width: 100%;
				height: 100%;
			}
		}

		.main_RP {
			position: absolute;
			right: 6rem;
			top: 8%;
			color: #e60d11;
			font-size: 4rem; 
			font-weight: 600;
			line-height: 2.5rem;

			.main_RP_header {
				font-size: 2rem;
				margin-bottom: 0.5rem;
			}

			.yuan {
				font-size: 2rem;
				position: relative;
				left: 0.5rem;
				top: -0.3rem;
			}

			.myRP {
				font-size: 1.5rem;
				position: relative;
				left: -3rem;
			}
		}

		.received {
			margin-top: 47%;
			margin-left: 4rem;
			line-height: 2rem;

			p {
				margin: 0;
			}
		}

		.record {
			margin-top: 0.5rem;
			margin-left: 4rem;
			height: 35%;

			p {
				margin: 0;
			}

			.item {
				margin-top: 1rem;
				line-height: 1.8rem;
				overflow: hidden;

				.left {
					float: left;
					width: 3rem;
				}

				.center {
					margin-left: 4rem;
					margin-right: 5rem;
					line-height: 2rem;

					.head {
						width: 3.5rem;
						height: 3.5rem;
						background-color: #b5b5b5;
						border-radius: 50%;
						float: left;
						margin-right: 0.8rem;

						.img {
							width: 100%;
							height: 100%;
						}
					}

					.money {
						margin-top: -0.3rem;
						font-size: 1.45rem;
						color: rgb(80, 80, 80);
						text-align: left;
						float: left;
					}

					.text {
						text-align: left;
						float: left;
					}
				}

				.right {
					width: 5rem;
					float: right;
					margin-right: 0;
					margin-top: -0.4rem;
				}
			}
		}
	}

	#recordWrapper {
		position: relative;
		height: 95%;
		margin-right: 3rem;

		.list {
			padding-bottom: 1.8rem;
		}
	}
</style>