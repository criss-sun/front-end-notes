<template>
	<view>
		<!-- text组件 -->
		<view>
			<text selectable>text标签加上selectable属性允许复制</text>
		</view>
		<view>
			<text>默认不允许复制</text>
		</view>
		<view>
			<text>默 认 打多个空格只显示一次空格</text>
		</view>
		<view>
			<!-- 
			ensp	中文字符空格一半大小
			emsp	中文字符空格大小
			nbsp	根据字体设置(font-size)的空格大小 
			-->
			<text space="nbsp" style="font-size: 16px;">加上space属性后可显示多个 空格</text>
		</view>
		<view>
			<!-- 现在默认可以解码了 -->
			<text decode="true">加上decode属性后,可以对字符进行解码&nbsp;</text>
		</view>
		<!-- view组件 -->
		<view class="box" hover-class="active"><text>点击后会添加hover-class类中的样式</text></view>
		<view class="father" hover-class="father-active">
			<!-- 如果父子都加了hover-class, 子标签默认会冒泡到父标签, 添加hover-stop-propagation可以解决 -->
			<!-- hover-start-time="1000"表示按住1秒钟后才触发对应样式 -->
			<!-- hover-stay-time="1000"表示松开1秒钟后样式才会消失 -->
			<view class="son" hover-class="son-active" hover-stop-propagation hover-start-time="1000" hover-stay-time="1000"><text>hover-stop-propagation</text></view>
		</view>
		<!-- size控制按钮大小 可选default和mini-->
		<!-- type控制颜色 可选default白色, warn红色-->
		<!-- type为primary: 微信小程序、360小程序为绿色，App、H5、百度小程序、支付宝小程序、快应用为蓝色，字节跳动小程序为红色，QQ小程序为浅蓝色。如想在多端统一颜色，请改用default，然后自行写样式 -->
		<button size="mini" type="default">点我</button>
		<!-- plain按钮只剩边框 -->
		<button size="mini" type="default" plain>点我</button>
		<!-- disabled按钮禁用 -->
		<button size="mini" type="default" disabled>点我</button>
		<!-- 名称前带loading图标 -->
		<button size="mini" type="default" loading>点我</button>
	</view>
</template>

<script>
</script>

<style scoped>
	.box {
		display: flex;
		width: 300rpx;
		height: 300rpx;
		border: 1px solid #eee;
		justify-content: center;
		align-items: center;
	}

	.active {
		background-color: #DD524D;
	}

	.father {
		width: 400rpx;
		height: 400rpx;
		border: 1px solid #333333;
	}

	.son {
		width: 200rpx;
		height: 200rpx;
		border: 1px solid #EEEEEE;
	}

	.father-active {
		background-color: #4CD964;
	}

	.son-active {
		background-color: #007AFF;
	}
</style>
