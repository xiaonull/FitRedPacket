<template>
	<section class="login">
		<div class="main_rp" v-if="main_RP !== '???'">
			<p class="text">恭喜获得</p>
			<p>{{main_RP}}元</p>
			<p>红包</p>
		</div>
		<div class="main_rp_empty" v-else></div>
		<div class="rule">
			<p class="text">留下信息快去抢红包吧！</p>
		</div>
		<div class="form">
			<input type="text" name="name" placeholder="名称" v-model="name">
			<input type="number" name="phone" placeholder="电话" v-model="phone">
		</div>
		<div class="toLogin" @click="login">立即抢红包</div>
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

	function changeURLPar(destiny, par, par_value) { 
		var pattern = par+'=([^&]*)'; 
		var replaceText = par+'='+par_value; 
		if (destiny.match(pattern)) { 
			var tmp = '/\\'+par+'=[^&]*/'; 
			tmp = destiny.replace(eval(tmp), replaceText); 
			return (tmp); 
		}else { 
			if (destiny.match('[\?]')) { 
				return destiny+'&'+ replaceText; 
			}else { 
				return destiny+'?'+replaceText; 
			} 
		} 
		return destiny+'\n'+par+'\n'+par_value; 
	} 

	function set_param(param,value){
		var query = location.search.substring(1);
		var p = new RegExp("(^|&"+param+")=[^&]*");
		if(p.test(query)){
			query = query.replace(p,"$1="+value);
			location.search = '?'+query;
		}else{
			if(query == ''){
				location.search = '?'+param+'='+value;
			}else{
				location.search = '?'+query+'&'+param+'='+value;
			}
		}    
	}

	function changeUrlArg(url, arg, val){
		var pattern = arg+'=([^&]*)';
		var replaceText = arg+'='+val;
		return url.match(pattern) ? url.replace(eval('/('+ arg+'=)([^&]*)/gi'), replaceText) : (url.match('[\?]') ? url+'&'+replaceText : url+'?'+replaceText);
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
		data () {
			return {
				main_RP: '???',
				name: '',
				phone: ''
			}
		},
		mounted() {
			if(this.$router.history.current.fullPath === '/ReceiveRedpacket') {
				document.title = '红包领取';
			}

			if(localStorage.userName && localStorage.userName !== null) {
				this.name = localStorage.userName;
			}

			if(localStorage.phone && localStorage.phone !== null) {
				this.phone = localStorage.phone;

				// this.$router.push('myRedpacket');

				var targetUrl = funcUrlDel('from');
				if(targetUrl) {
					if(GetQueryString("isappinstalled")) {
						targetUrl = funcUrlDel('isappinstalled');
						window.location.assign(targetUrl + '#/myRedpacket');
					}
					window.location.assign(targetUrl + '#/myRedpacket');
				}else {
					this.$router.push('/myRedpacket');
				}
			}
		},
		methods: {
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

				// localStorage.userName = this.name;
				// localStorage.phone = this.phone;
				// this.$router.push('/ReceiveRedpacket');

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

							localStorage.userName = this.name;
							localStorage.phone = this.phone;

							//解决苹果分享问题
							// let from_phone = GetQueryString("from_user");
							// if(from_phone && from_phone != localStorage.phone) {
							// 	// window.location.assign(changeUrlArg(location.href, 'from_user', localStorage.phone));
							// 	history.pushState({}, '', changeUrlArg(location.href, 'from_user', localStorage.phone));
							// }

							this.setWX_share();

							this.$router.push('ReceiveRedpacket');

							setTimeout(() => {
								hts_bus.$emit('setMain_RP', {
									main_RP: result.data.total_money.toFixed(2)
								});
								// var targetUrl = funcUrlDel('from');
								// window.location.assign(targetUrl + '#/ReceiveRedpacket');
							}, 0);
						}else if(result.status_code === 15) {
							localStorage.userName = this.name;
							localStorage.phone = this.phone;
							
							// let from_phone = GetQueryString("from_user");
							// if(from_phone && from_phone != localStorage.phone) {
							// 	// window.location.assign(changeUrlArg(location.href, 'from_user', localStorage.phone));
							// 	history.pushState({}, '', changeUrlArg(location.href, 'from_user', localStorage.phone));
							// }

							this.setWX_share();

							this.$router.push('myRedpacket');

							// setTimeout(() => {
							// 	var targetUrl = funcUrlDel('from');
							// 	window.location.assign(targetUrl + '#/ReceiveRedpacket');
							// }, 0);
						}else {
							hts_bus.$emit('openMsg', result.message);
						}
					}.bind(this),
					error() {
						hts_bus.$emit('openMsg', '抢红包失败');
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
	.login {
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
			width: 12.5rem;
			height: 19rem;
			margin: 15% auto 0 auto;
			background-image: url('~@/assets/rp_bg.png');
			background-size: 100% 100%;
			text-align: center;
			color: rgb(255, 232, 216);
			font-size: 1.7rem;

			p {
				margin: 0;
				position: relative;
				top: 8.8rem;
			}

		}

		.main_rp_empty {
			width: 16rem;
			height: 22rem;
			margin: 10% auto -6% auto;
			background-image: url('~@/assets/rp_empty.png');
			background-size: 100% 100%;
			text-align: center;
			color: rgb(255, 232, 216);
			font-size: 1.7rem;
		}

		.rule {
			margin-top: 3rem;
			height: 4rem;

			.text {
				color: rgb(255, 195, 0);
				text-align: center;
				font-size: 1.2rem;
				margin: 0;
				line-height: 2.5rem;
			}
		}

		.form {
			margin-top: 1rem;
			text-align: center;

			input{
				background: #fff;
				width: 20rem;
				height: 3.8rem;
				border:0;
				border-radius: 0.3rem;
				padding: 1rem;
				box-sizing: border-box;
				margin-top: 1.5rem;
			}
		}

		.toLogin {
			width: 20rem;
			height: 3rem;
			line-height: 3rem;
			margin: 2rem auto;
			background: rgb(212, 48, 48);
			border:0px;
			color: #fff;
			font-size: 1.4rem;
			border-radius: 5rem;
			text-align: center;
		}
	}
</style>