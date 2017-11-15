<template>
	<section class="index">
		<div class="toRob" @click="toRob">
		</div>
		<!-- <p class="play_rule" @click="toInstruction">玩法说明</p> -->
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
		mounted() {
			document.title = '西安万达送来的红包！';

			let from = GetQueryString("from_user");
			if(from !== null) {
				sessionStorage.from = from;
			}
			// alert(localStorage.phone)
			if(localStorage.phone && localStorage.phone !== null) {
				// alert(11)

				// this.$router.push('myRedpacket');

				var targetUrl = funcUrlDel('from');
				// alert(targetUrl)
				if(targetUrl) {
					if(GetQueryString("isappinstalled")) {
						targetUrl = funcUrlDel('isappinstalled');
						window.location.assign(targetUrl + '#/myRedpacket');
					}
					window.location.assign(targetUrl + '#/myRedpacket');
				}else {
					this.$router.push('/myRedpacket');
				}
				

				// var targetUrl = funcUrlDel('from');
				// window.location.assign(targetUrl + '#/ReceiveRedpacket');
			}
		},
		methods: {
			toRob() {
				this.$router.push('/login');
			},
			toInstruction () {
				this.$router.push('/InstructionMerge')
			}
		}
	}
</script>

<style scoped lang="less"> 
	.index {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 108%;
		background-image: url('~@/assets/bg9.jpg');
		background-size: 100% 100%;
		color: #000;
		font-size: 1rem;
		text-align: left;

		.toRob {
			position: absolute;
			bottom: 16.4%;
			left: 50%;
			margin-left: -3.2rem;
			width: 6.4rem;
			height: 6.4rem;
			border-radius: 50%;
		}

		.play_rule {
			position: absolute;
			width: 100%;
			bottom: 10.5%;
			text-align: center;
			color: #333;
			font-size: 1.2rem;
		}
	}
</style>