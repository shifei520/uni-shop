<template>
	<view class="goods-list">
		<view class="goods-item" v-for="item in goods" :key="item.id" @click="navigateToGoods(item.id)">
			<image src="~@/static/phone.jpg"></image>
			<view class="goods-price">
				<text>￥{{ item.sell_price }}</text>
				<text>￥{{ item.market_price }}</text>
			</view>
			<view class="goods-name">{{ item.title }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['goods'],
		methods: {
			// 跳转到商品详情
			navigateToGoods(id) {
				this.$emit('goGoodsDetail', id)
			}
		}
	}
</script>

<style lang="scss">
	.goods-list {
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.goods-item {
			margin-top: 10rpx;
			padding: 0 10rpx;
			width: 355rpx;
			background-color: #fff;
			box-sizing: border-box;
			image {
				display: block;
				margin: 0 auto;
				width: 80%;
				height: 300rpx;
			}
			.goods-price {
				color: $shop-color;
				font-size: 36rpx;
				text:nth-of-type(2) {
					margin-left: 15rpx;
					color: #ccc;
					font-size: 28rpx;
					text-decoration: line-through;
				}
			}
			.goods-name {
				font-size: 28rpx;
				line-height: 50rpx;
			}
		}
	}
</style>