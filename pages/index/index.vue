<template>
	<view class="home">
		<swiper>
			<swiper-item>1</swiper-item>
			<swiper-item>1</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers: ""
			}
		},
		onLoad() {
			this.getSwipers()
		},
		methods: {
			getSwipers(){
				uni.request({
					url: '/data/banner.json',
					success(res) {
						if(res.data.code!==1){
							return uni.showToast({
								title: "获取数据失败"
							})
						}
						this.swipers=res.data.data
					}
				})
			}
		}
	}
</script>

<style>
	

	
</style>
