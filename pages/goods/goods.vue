<template>
	<view class="good_list">
		<goods_list :goods="goods"></goods_list>
		<view class="isOver" v-if="flag">more</view>
	</view>
</template>

<script>
	import goods_list from '../../component/goods_list/goods_list.vue'
	export default {
		components: {"goods_list": goods_list},
		data() {
			return {
				goods:[],
				flag: true
			}
		},
		onReachBottom() {
			console.log("触底了")
			// this.pageIndex++
			
		},
		onPullDownRefresh() {
			uni.stopPullDownRefresh()
		},
		onLoad() {
			this.getHotGoods()
		},
		methods: { 
			getHotGoods() {
				uni.request({
					url:'/data/hot.json',
					success: (res) => {
						if(res.data.code!==1){
							return uni.showToast({
								title: "获取数据失败"
							})
						}
						this.goods = res.data.data.product_list
					}
				})
			}
		}
	}
</script>
<style lang="scss">
	.good_list {
		background: #eee;
	}
	.isOver{
		width: 100%;
		height: 50%;
		line-height: 50rpx;
		text-align: center;
		background: #fff;
		font-size: 28rpx;
	}
</style>
