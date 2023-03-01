<template>
	<view class="home">
		<swiper indicator-dots circular>
			<swiper-item v-for="item in swiperList" :key="item.id">
				<image :src="item.imgUrl"></image>
			</swiper-item>
		</swiper>
		<!-- 导航 -->

		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" :key="item.index" @click="navList(item.path)">
				<view :class="item.icon"></view>
				<text>{{ item.title }}</text>
			</view>
		</view>
	<view class="recommend">
		<view class="title">推荐商品</view>
		<goods_list :goods="goods"></goods_list>
	</view>
	</view>
</template>

<script>
	import goods_list from '../../component/goods_list/goods_list.vue'
	export default {
		data() {
			return {
				swiperList: [],
				goods: [],
				navs: [
					{
						'icon': 'iconfont icon-chaoshi',
						'title':'超市',
						'path': '/pages/goods/goods'
					},
					{
						'icon': 'iconfont icon-shipin_o',
						'title':'视频',
						'path': '/goods'
					},
					{
						'icon': 'iconfont icon-shequ',
						'title':'关于我们',
						'path': '/pages/contact/contact'
					},
					{
						'icon': 'iconfont icon-guanyuwomen',
						'title':'社区',
						'path': '/pages/picture/picture'
					}
				]
			}
		},
		onLoad() {
			this.getSwipers()
			this.getHotGoods()
		},
		components: {"goods_list": goods_list},
		methods: {
			navList(url){
				uni.navigateTo({
					url:url
				})
			},
			getSwipers(){
				uni.request({
					url: '/data/banner.json',
					success: (res) => {
						if(res.data.code!==1){
							return uni.showToast({
								title: "获取数据失败"
							})
						}
						this.swiperList=res.data.data.mainPositionList
					}
				})
			},
			getHotGoods() {
				uni.request({
					url:'/data/goods.json',
					success: (res) => {
						if(res.data.code!==1){
							return uni.showToast({
								title: "获取数据失败"
							})
						}
						this.goods = res.data.data.product_list
						console.log(this.goods)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	@import url("../../static/fonts/iconfont.css");
	.home {
		swiper {
			width: 750rpx;
			height: 380rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
	.nav{
		display: flex;
		.nav_item {
			width: 25%;
			text-align: center;
			view{
				width: 120rpx;
				height: 120rpx;
				background: #b50e03;
				border-radius: 60rpx;
				margin: 10px auto;
				line-height: 120rpx;
				color: #fff;
				font-size: 50rpx;
			}
			text{
				font-size: 32rpx;
			}
		}
	}
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
