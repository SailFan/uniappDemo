<template>
	<view class="contact">
		<image class="img" src="../../static/me.png"></image>
		<view class="info">
			<view class=""> 联系电话： 17600576666 （点击拨打）</view>
			<view @click="phone"> 联系地址： 北京朝阳区光华路禾桥大厦B座3楼325</view>
		</view>
		<map class="map" :longitude="longitude" :latitude="latitude" :scale="scale" :markers="covers"></map>
	</view>
</template>
<!-- https://uniapp.dcloud.net.cn/api/system/phone.html -->
<script>
	export default {
		data() {
			return {
				scale: 10,
				longitude: 116.326575,
				latitude: 39.922213,
				covers: [
					{
						longitude: 116.326575,
						latitude: 39.922213,
						iconPath: "../../static/product/2.png",
						width: 30,
						height: 30,
					}
				]
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber: '17600576201' //仅为示例
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact  {
		.img {
			width: 750rpx;
			height: 360rpx;
		}
		.info {
			padding: 10rpx 20rpx;
			font-size: 30rpx;
			view{
				text-align: left;
				line-height: 50rpx;
				border-bottom: 1px solid #eee;
			}
		}
		.map {
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
