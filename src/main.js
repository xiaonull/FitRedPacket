// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vue from 'vue';

Vue.use(VueResource)


Vue.config.productionTip = false

window.hts_bus = new Vue();

window.myAjax = function(option) {
	let domainName = 'https://packet.uniteonline.cn/';

	$.ajax({
		url: domainName + option.url,
		type: option.type || 'GET',
		data: option.data,
		dataType: option.dataType,
		contentType: option.contentType,
		processData: option.processData,
		cache: option.cache,
		success: function(result, status, xhr) {
			option.success(result, status, xhr);  	
		},
		beforeSend: function(xhr) {
			if(option.beforeSend) {
				option.beforeSend(xhr);
			}
		},
		complete : function(xhr){
			if(option.complete) {
				option.complete(xhr);
			}
		},
		error: function() {
			if(option.error) {
				option.error();
			}
		}
	});
};

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App },
})
