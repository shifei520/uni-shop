<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info">
			<view @click="makeCall">联系电话：400-618-9090（点击拨打）</view>
			<view>校区地址：浙江省杭州市下沙经济开发区4号大街187号盛泰时代山</view>
		</view>
		<map class="map" :latitude="latitude" :longitude="longitude" :scale="17"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude: 24.609429,
				longitude: 118.039668,
			}
		},
		onLoad() {
			uni.getLocation({
				isHighAccuracy: true,
				success: options => {
					this.latitude = options.latitude
					this.longitude = options.longitude
				},
				fail(err) {
					uni.showToast({
						title: "位置信息获取失败",
						icon: "none"
					})
				}
			})
		},
		methods: {
			makeCall() {
				uni.makePhoneCall({
					phoneNumber: '400-618-9090'
				})
			}
		}
	}
</script>

<style lang="scss">
.img {
	width: 750rpx;
	height: 320rpx;
}
.info {
	padding: 10rpx 20rpx;
	font-size: 30rpx;
	view {
		line-height: 80rpx;
		border-bottom: 1px solid #eee;
	}
}
.map {
	height: 750rpx;
	width: 750rpx;
}
</style>
