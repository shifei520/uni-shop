<template>
	<view class="pics">
		<scroll-view class="left" scroll-y="true">
			<view @click="changeCate(index, item.id)" :class="curActive === index ? 'active' : ''" v-for="(item, index) in picsCateArr" :key="item.id">{{ item.title }}</view>
		</scroll-view>
		<scroll-view class="imgs-right" scroll-y="true">
			<view class="img-item" v-for="(item, index) in picsUrlArr" :key="item.id">
				<image :src="item.img_url" @click="previewImg(index)"></image>
				<text>{{ item.title }}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import { getPicsCate, getPicsById } from '@/api/home.js'
	export default {
		data() {
			return {
				picsCateArr: [],
				curActive: 0,
				curPicId: 0,
				picsUrlArr: []
			}
		},
		onLoad() {
			this.getPicsCate()
		},
		methods: {
			// 获取图片分类数据
			async getPicsCate() {
				const { message } = await getPicsCate()
				this.picsCateArr = message
				if(!!message.length) {
					this.curPicId = message[0].id
				}
				this.getPicsById()
			},
			changeCate(index, id) {
				this.curActive = index
				this.curPicId = id
				this.getPicsById()
			},
			// 根据id获取图片列表
			async getPicsById() {
				const { message } = await getPicsById(this.curPicId)
				this.picsUrlArr = message
			},
			previewImg(index) {
				const urls = this.picsUrlArr.map(item => item.img_url)
				uni.previewImage({
					current: index,
					urls
				})
			}
		}
	}
</script>

<style lang="scss">
page {
	height: 100%;
}
.pics {
	display: flex;
	height: 100%;
	.left {
		width: 200rpx;
		height: 100%;
		border-right: 1px solid #eee;
		view {
			height: 120rpx;
			line-height: 120rpx;
			text-align: center;
			font-size: 30rpx;
			border-top: 1px solid #eee;
			&.active {
				color: #fff;
				background-color: $shop-color;
			}
		}
	}
	.imgs-right {
		flex: 1;
		padding: 10rpx;
		box-sizing: border-box;
		image {
			width: 100%;
			height: 520rpx;
			border-radius: 10rpx;
		}
		text {
			font-size: 30rpx;
			line-height: 60rpx;
		}
	}
}
</style>
