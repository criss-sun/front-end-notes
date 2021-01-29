<template>
	<view>
		<!-- 默认宽度 300px、高度 225px -->
		<!-- mode默认值scaleToFill, 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素 -->
		<image src="../../static/titan.jpg" mode="scaleToFill"></image>
		<!-- 保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。 -->
		<image src="../../static/titan.jpg" mode="aspectFit"></image>
		<!-- 保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。 -->
		<image src="../../static/titan.jpg" mode="aspectFill"></image>
		<!-- 宽度不变，高度自动变化，保持原图宽高比不变 -->
		<image src="../../static/titan.jpg" mode="widthFix"></image>
		<!-- 高度不变，宽度自动变化，保持原图宽高比不变 App 和 H5 平台 HBuilderX 2.9.3+ 支持、微信小程序需要基础库 2.10.3 -->
		<image src="../../static/titan.jpg" mode="heightFix"></image>
		<!-- 不缩放图片，只显示图片的顶部区域 -->
		<image src="../../static/titan.jpg" mode="top"></image>
	</view>
</template>

<script>
</script>

<style scoped>
</style>
