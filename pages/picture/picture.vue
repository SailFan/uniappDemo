<template>
	<view class="picture">
		<!-- :class="active===index?'active':''" -->
		<scroll-view class="left" scroll-y>
			<view 
			:class="active===index?'active':''"  v-for="(item,index) in navs" :key="item.id"
			@click="leftClick(index,item.id)">
				{{ item.title }}
			</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="item in images" :key="item.id">
				<image @click="preview(item.img_url)" :src="item.img_url"></image>
				<text>{{ item.title }}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navs:[],
				active:0,
				images:[]
			}
		},
		onLoad() {
			this.getNav()
		},
		methods: {
			preview (index_iamge){
				const urls = this.images.map(item=>{
					return item.img_url
				})
				uni.previewImage({
					urls:urls,
					current:index_iamge
				})
				
			},
			leftClick(index,id){
				this.active = index
				uni.request({
					url:'/data/image.json',
					success: (res) => {
						if(res.data.code!==1){
							return uni.showToast({
								title: "获取数据失败"
							})
						}
						this.images=res.data.message
						console.log(this.images)
					}
				})
			},
			getNav(){
				uni.request({
					url: '/data/type.json',
					success: (res) => {
						if(res.data.code!==1){
							return uni.showToast({
								title: "获取数据失败"
							})
						}
						this.navs=res.data.message
					}
				})
			},
		}
	}
</script >
	
<style lang="scss">
	.active {
		background:#b50e03;
		color: #fff;
	}
	page{
		height: 100%;
	}
	.picture{
		display: flex;
		.right {
			height: 100%;
			width: 520rpx;
			margin: 10px auto;
			.item{
				image{
				width: 520rpx;
				height: 520rpx;
				border-radius: 5px;
				}
				
				text {
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}
		}
		.left {
			height: 100%;
			width: 200rpx;
			border-radius: 1px solid #eee;
			view{
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}
		}
	}
	
</style>
