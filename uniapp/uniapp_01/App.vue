<script>
	export default {
		// 应用生命周期仅可在App.vue中监听，在其它页面监听无效
		onLaunch: function() {
			console.log('onLaunch 当uni-app 初始化完成时触发（全局只触发一次）')
		},
		onShow: function() {
			console.log('onShow 当 uni-app 启动，或从后台进入前台显示')
		},
		onHide: function() {
			console.log('onHide 当 uni-app 从前台进入后台')
		},
		onError: function() {
			console.log('onError 当 uni-app 报错时触发')
		}
	}
</script>

<style>
	/* 每个页面公共css */
</style>
