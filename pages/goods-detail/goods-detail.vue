<template>
	<view class="goods-detail">
		<swiper indicator-dots>
			<swiper-item v-for="(item, index) in swiperImgs" :key="index">
				<image :src="item.src"></image>
			</swiper-item>
		</swiper>
		<div class="box1">
			<view class="price">
				<text>￥{{goodsInfo.sell_price}}</text>
				<text>￥{{goodsInfo.market_price}}</text>
			</view>
			<view class="goods-name">{{ goodsInfo.title }}</view>
		</div>
		<div class="line"></div>
		<view class="box2">
			<view>货号：{{ goodsInfo.goods_no }}</view>
			<view>库存：{{ goodsInfo.stock_quantity }}</view>
		</view>
		<div class="line"></div>
		<div class="box3">
			<view class="tit">
				详情介绍
			</view>
			<view class="content">
				<rich-text :nodes="content.content"></rich-text>
			</view>
		</div>
		<view class="cart-nav">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import { getGoodsDetailSwiper, getGoodsDetailInfo, getGoodsDetailContent } from '@/api/goods.js'
	export default {
		data() {
			return {
				id: 0,
				swiperImgs: [],
				goodsInfo: null,
				content: null,
				options: [
					{
						icon: 'headphones',
						text: '客服'
					}, {
						icon: 'shop',
						text: '店铺',
						info: 2,
						infoBackgroundColor:'#007aff',
						infoColor:"red"
					}, {
						icon: 'cart',
						text: '购物车',
						info: 2
					}],
					buttonGroup: [{
					  text: '加入购物车',
					  backgroundColor: '#ff0000',
					  color: '#fff'
					},
					{
					  text: '立即购买',
					  backgroundColor: '#ffa200',
					  color: '#fff'
					}
					]
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getGoodsDetailSwiper()
		},
		methods: {
			async getGoodsDetailSwiper() {
				const { message } = await getGoodsDetailSwiper(this.id)
				this.swiperImgs = message
			},
			async getGoodsDetailInfo() {
				const { message } = await getGoodsDetailInfo(this.id)
				this.goodsInfo = message
			},
			async getGoodsDetailContent() {
				const { message } = await getGoodsDetailContent(this.id)
				this.content = message[0]
			},
			onClick (e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick (e) {
				console.log(e)
				this.options[2].info++
			}
		}
	}
</script>

<style lang="scss">
.goods-detail {
	swiper {
		height: 700rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.box1 {
		padding: 10px;
		.price {
			font-size: 35rpx;
			color: $shop-color;
			line-height: 80rpx;
			text:nth-child(2) {
				margin-left: 20rpx;
				color: #ccc;
				font-size: 28rpx;
				text-decoration: line-through;
			}
		}
		.goods-name {
			font-size: 32rpx;
			line-height: 60rpx;
		}
	}
	.box2 {
		padding: 0 20rpx;
		font-size: 32rpx;
		line-height: 70rpx;
	}
	.box3 {
		.tit {
			padding-left: 20rpx;
			font-size: 32rpx;
			line-height: 40rpx;
			border-bottom: 1px soild #eee;
		}
		.content {
			padding: 20rpx;
			color: #333;
			font-size: 28rpx;
		}
	}
	.cart-nav {
		position: fixed;
		bottom: 0;
		width: 100%;
	}
}

</style>
