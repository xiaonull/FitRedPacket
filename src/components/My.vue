<template>
	<section class="my">
		<div class="share" v-if="showShare" @click="close">
			<div class="bg"></div>
		</div>
		<div class="rp">
			<div class="money">￥{{main_rp}}</div>
			<div class="text">
				<p>想要更大红包，</p>
				<p>必须分享给好友后获得红包合体！</p>
			</div>
			<div class="openShare" @click="openShare" v-if="btnState === 0">找人合体</div>
			<div class="openShare" @click="toExchange" v-if="btnState === 1">前往兑换</div>
		</div>
		<div class="info">
			<span class="l">已有{{people_count}}人抢红包</span>
			<span class="r" @click="toRule">活动说明></span>
		</div>
		<div class="records">
			<div class="tabs">
				<div class="tab_item other" :class="{active: active === 0}" @click="active = 0;">幸运大神</div>
				<div class="tab_item me" :class="{active: active === 1}" @click="active = 1;">我的进度</div>
			</div>
			<div class="tab_content content_other" v-show="active === 0">
				<div id="otherRecordWrapper">
					<div class="list">
						<div class="item" v-for="item in otherRecord" :key="item.id">
							<div class="headImg">
								<img src="~@/assets/headImg.png" class="img">
							</div>
							<div class="main">
								<p>
									<span class="name">{{item.name.length > 4 ? item.name.slice(0, 4) + '...' : item.name}}</span>
									<span class="time">{{item.time}}</span>
								</p>
								<p class="detail">{{item.message}}</p>
							</div>
							<div class="money">{{item.money}}元</div>
						</div>
					</div>
				</div>
			</div>
			<div class="tab_content content_me" v-show="active === 1">
				<div id="meRecordWrapper">
					<div class="list">
						<div class="item" v-for="item in meRecord" :key="item.id">
							<div class="headImg">
								<img src="~@/assets/headImg.png" class="img">
							</div>
							<div class="main">
								<p class="me_detail">{{item.message}}</p>
							</div>
							<div class="money">{{item.money}}元</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script type="text/javascript">
	function GetQueryString(name) {
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) {
			return unescape(r[2]);
		} 

		return null;
	}

	function funcUrlDel(name){
	    var loca = window.location;
	    var baseUrl = loca.origin + loca.pathname + "?";
	    var query = loca.search.substr(1);
	    if (query.indexOf(name)>-1) {
	        var obj = {}
	        var arr = query.split("&");
	        for (var i = 0; i < arr.length; i++) {
	            arr[i] = arr[i].split("=");
	            obj[arr[i][0]] = arr[i][1];
	        };
	        delete obj[name];
	        var url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g,"").replace(/\:/g,"=").replace(/\,/g,"&");
	        return url
	    };
	}

	export default {
		data() {
			return {
				showShare: false,
				active: 0,
				userName: '???',
				phone: '???',
				main_rp: '???',
				people_count: '???',
				otherRecord: [],
				meRecord: [],
				btnState: 0
			}
		},
		mounted() {
			document.title = '我的红包';

			if(!localStorage.phone || localStorage.phone === null) {
				this.$router.push('/login');
			}

			var targetUrl ='';
			if(GetQueryString("from")) {
				targetUrl = funcUrlDel('from');

				if(GetQueryString("isappinstalled")) {
					targetUrl = funcUrlDel('isappinstalled');
					window.location.assign(targetUrl + '#/myRedpacket');
				}
				window.location.assign(targetUrl + '#/myRedpacket');
			}

			this.setWX_share();
			this.loadUserData();
			// this.loadScroll();
		},
		methods: {
			close() {
				this.showShare = false;
			},
			openShare() {
				this.showShare = true;
			},
			toRule() {
				this.$router.push('/InstructionMerge');
			},
			loadScroll() {
				this.$nextTick(() => {
					if(!this.scroll) {
						this.scroll = new iScroll('otherRecordWrapper', {
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
			},
			toExchange() {
				this.$router.push('/exchange');
			},
			loadUserData() {
				let option = {
					url: 'api/luckymoney/mypackets?phone=' + localStorage.phone,
					type: 'GET',
					success: function(result, status, xhr) {
						if(result.status_code === 0) {
							this.main_rp = result.data.main_packet.toFixed(2);
							this.people_count = result.data.people_count;
							this.userName = result.data.name;
							this.phone = result.data.phone;
							this.otherRecord = result.data.lucky_list;
							this.meRecord = result.data.my_progress;

							if(result.data.is_ultimate !== false) {
								this.btnState = 1;
							}
						}
					}.bind(this),
					error() {
					}
				}

				myAjax(option);
			},
			setWX_share() {
				$.get("https://packet.uniteonline.cn/api/luckymoney/share?phone=" + localStorage.phone + "&url="+ window.location.href.split("#")[0] ,{},function(e){
					var data = e.data
					wx.config({
						debug: false, 
						appId: data.param.appId, 
						timestamp: data.param.timestamp, 
						nonceStr:  data.param.nonceStr, 
						signature: data.param.signature,
						jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"] 
					});
					wx.ready(function(){
						wx.onMenuShareTimeline({
							title: data.title, 
							link: data.link, 
							imgUrl: data.imgUrl, 
							success: function () { 
                            // 用户确认分享后执行的回调函数
                        },
                        cancel: function () { 
                            // 用户取消分享后执行的回调函数
                        }
                    });



						wx.onMenuShareAppMessage({
							title: data.title, 
							desc: data.desc, 
							link: data.link, 
							imgUrl: data.imgUrl, 
							type: '', 
							dataUrl: '', 
							success: function () { 
							},
							cancel: function () { 
                            // 用户取消分享后执行的回调函数
                        }
                    });

					});
				});
			}
		}
	}
</script>

<style scoped lang="less">
	.my {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('~@/assets/my_bg.png');
		background-size: 100% 110%;
		color: #000;
		font-size: 1rem;
		text-align: left;
		overflow: hidden;

		.rp {
			position: relative;
			width: 70%;
			height: 25rem;
			margin: 2rem auto 0 auto;
			background-image: url('~@/assets/rp_bg_open.png');
			background-size: 100% 100%;

			.money {
				position: relative;
				top: 4rem;
				width: 100%;
				text-align: center;
				font-size: 3rem;
				color: rgba(212, 48, 48, 1);
			}

			.text {
				p {
					margin: 0;
				}
				
				position: relative;
				top: 5.5rem;
				line-height: 1.7rem;
				text-align: center;
				color: rgba(56, 56, 56, 1);
				font-size: 1.1rem;
			}

			.openShare {
				position: absolute;
				bottom: 2rem;
				width: 80%;
				margin-left: 10%;
				height: 3rem;
				line-height: 3rem;
				font-size: 1.5rem;
				color: #fff;
				text-align: center;
				background-color: rgba(255, 141, 26, 1);
				border: 0.02rem solid rgba(0, 0, 0, 0.2);
				border-radius: 2.5rem;
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

		.info {
			width: 70%;
			margin: 0.3rem auto;
			font-size: 1.2rem;
			
			.l {
				margin-left: 0.8rem;
				color: rgba(255, 87, 51, 1); 
			}

			.r {
				margin-right: 0.8rem;
				float: right;
				color: rgba(42, 130, 228, 1);
			}
		}

		.records {
			width: 92%;
			height: 32rem;
			margin-top: 1rem;
			padding: 0 4%;
			background-color: #000;
			overflow: hidden;

			.tabs {
				padding-top: 1.5rem;
				font-size: 0;
				text-align: center;

				.tab_item {
					display: inline-block;
					width: 10.5rem;
					height: 3rem;
					line-height: 3rem;
					text-align: center;
					font-size: 1.4rem;
					background-color: rgba(153, 153, 153, 1);
				}

				.active {
					background-color: rgba(229, 229, 229, 1);
				}
			}

			.tab_content {
				padding-top: 1.5rem;

				.list {
					height: 13rem;
					padding-bottom: 2rem;
					overflow: scroll;

					.item {
						display:flex;
						padding-top: 1rem;
						padding-bottom: 0.5rem;
						border-bottom: 1px solid #ccc;
						min-height: 5rem;

						.headImg {
							flex: 1;
							height: 5rem;
							text-align: center;

							.img {
								display: inline-block;
								width: 4.8rem;
								height: 4.8rem;
							}
						}

						.main {
							flex: 3.2;
							height: 5rem;
							line-height: 2.3rem;

							p {
								margin: 0;
								margin-left: 1rem;
							}

							.name {
								color: rgba(229, 229, 229, 1);
								font-size: 1.2rem;
							}

							.time {
								color: rgba(166, 166, 166, 1);
								font-size: 1.2rem;
								margin-left: 2rem;
							}

							.detail {
								color: rgba(166, 166, 166, 1);
								font-size: 1.2rem;
							}

							.me_detail {
								color: rgba(229, 229, 229, 1);
								font-size: 1.3rem;
							}
						}

						.money {
							flex: 1.5;
							height: 5rem;
							line-height: 5rem;
							color: rgba(212, 48, 48, 1);
							font-size: 1.3rem;
							text-align: center;
						}
					}
				}
			}
		}

		#otherRecordWrapper {
			position: relative;
			height: 95%;

			.list {
				padding-bottom: 1rem;
			}
		}
	}
</style>