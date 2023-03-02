<template>
	<view class="news">
		<view class="new_item" v-for="item in list" :key="item.id">
			<image :src="item.image_url"></image>
			<view class="right">
				<view class="title">{{item.title}}</view>
				<view class="info">
					<text> 45 </text>
					<text>20210212</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			}
		},
		onLoad() {
			this.getdetails()
		},
		methods: {
			getdetails() {
				uni.request({
					url:'/data/details.json',
					success: (res) => {
						if(res.data.code!==1){
							return uni.showToast({
								title: "获取数据失败"
							})
						}
					this.list = res.data.message
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.news {
		.new_item {
			display: flex;
			padding: 10rpx 20rpx;
			border-bottom: 1px solid #b50e03;;
			image {
				width: 200rpx;
				height: 150rpx;
				min-width: 200rpx;
				max-width: 200rpx;
			}
			.right{
				display: flex;
				flex-direction: column;
				margin-left: 15rpx;
				justify-content: space-between;
				.title {
					font-size: 33rpx;
				}
				.info {
					font-size: 24rpx;
					text:nth-child(2){
						margin-left: 30rpx;
					}
				}
			}
		}
	}
</style>
