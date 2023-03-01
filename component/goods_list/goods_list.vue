<template>
			<view class="commodity_list">
				<view class="commodity_item" v-for="item in goods" :key="item.id">
					<image :src="item.imageUrl"></image>
					<view class="price">
						<text>$ {{item.sell_price}}</text>
						<text>$ {{item.stock_quantity}}</text>
					</view>
					<view class="name">
						{{item.title}}
					</view>
				</view>
			</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		props: ['goods']
	}
</script>

<style lang="scss">
	.recommend{
		background: #eee;
		overflow: hidden;
		margin-top: 10rpx;
		.title {
			height: 50px;
			line-height: 50px;
			color:#b50e03;
			text-align: center;
			background: #fff;
			letter-spacing: 20rpx;
			margin: 7rpx 0;		}
		}
		.commodity_list{
			padding: 0 15rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.commodity_item{
				background: #fff;
				width: 355rpx;
				margin: 10rpx 0;
				padding: 15rpx;
				box-sizing: border-box;
				image{
					width: 80%;
					height: 150rpx;
					margin: 0 auto;
				}
				.price {
					color: #b50e03;
					font-size: 30rpx;
					margin: 15rpx 0;
					text:nth-child(2){
						color: #ccc;
						font-size: 25rpx;
						margin-left: 17rpx;
						text-decoration: line-through;
					}
				}
				.name {
					overflow: hidden;
					word-break: break-all;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					white-space: nowrap;
					font-size: 30rpx;
					height: 50rpx;
					padding-top: 15rpx;
					padding-bottom: 15rpx;
				}
			}
		}
	
</style>
