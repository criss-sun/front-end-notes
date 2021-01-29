<template>
	<view class="box">
		<view v-for="item in list" :key="item.id">{{item.name}}</view>
	</view>
</template>

<script>
	export default {
		onPullDownRefresh() {
			const list = [
				{
				id: 0,
				name: '猴子',
				age: 27
			}, {
				id: 1,
				name: '猩猩',
				age: 27
			}, {
				id: 2,
				name: '狒狒',
				age: 26
			}, {
				id: 3,
				name: '狒狒',
				age: 26
			}, {
				id: 4,
				name: '狒狒',
				age: 26
			}, {
				id: 5,
				name: '狒狒',
				age: 26
			}, {
				id: 6,
				name: '狒狒',
				age: 26
			}, {
				id: 7,
				name: '狒狒',
				age: 26
			}, {
				id: 8,
				name: '狒狒',
				age: 26
			}]
			setTimeout(function() {
				this.list = list
				uni.stopPullDownRefresh()
			}.bind(this), 500)
		},
		onReachBottom() {
			this.list = [...this.list, ...this.list]
			console.log('触底了')
		},
		data() {
			return {
				list: [{
					id: 0,
					name: '徐毅叶',
					age: 27
				}, {
					id: 1,
					name: '郭懿妮',
					age: 27
				}, {
					id: 2,
					name: '吴佳瑛',
					age: 26
				}, ]
			}
		}
	}
</script>

<style scoped>
	.box {
		height: 200rpx;
		line-height: 200rpx;
	}
</style>
