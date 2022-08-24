<template>
	<view class="home">
		<!-- 轮播图区域 -->
		<swiper :indicator-dots="true" indicator-active-color="#ffffff" circular :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in swiperImgs" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<nav class="nav">
			<view class="nav-item" v-for="item in navArys" @click="navigateToPage(item.path)">
				<view :class="['iconfont', item.iconfont]"></view>
				<text>{{ item.iname }}</text>
			</view>
		</nav>
		<!-- 推荐商品区域 -->
		<view class="hot-goods">
			<view class="hot-goods-title">
				推荐商品
			</view>
			<goods-list @go-goods-detail="goGoodsDetail" :goods="hotGoods"></goods-list>
		</view>
	</view>
</template>

<script>
	import { getSwipers, getHotList } from '@/api/home.js'
	import GoodsList from '@/components/GoodsList/GoodsList.vue'
	export default {
		components: {
			GoodsList
		},
		data() {
			return {
				swiperImgs: [], // 轮播图数据
				hotGoods: [], // 推荐商品数据
				navArys: [ // 导航数据
					{
						iname: '黑马超市',
						iconfont: 'icon-ziyuan',
						path: '/pages/goods/goods'
					},
					{
						iname: '联系我们',
						iconfont: 'icon-guanyuwomen',
						path: '/pages/contact/contact'
					},
					{
						iname: '社区图片',
						iconfont: 'icon-tupian',
						path: '/pages/pics/pics'
					},
					{
						iname: '学习视频',
						iconfont: 'icon-shipin',
						path: '/pages/goods/goods'
					}
				]
			}
		},
		onLoad() {
			// 获取轮播图数据
			this.getSwipers()
			// 获取推荐商品数据
			this.getHotList()
		},
		methods: {
			// 获取轮播图数据
			async getSwipers() {
				const { message } = await getSwipers()
				this.swiperImgs = message
			},
			// 获取推荐商品数据
			async getHotList() {
				const { message } = await getHotList(1)
				this.hotGoods = message
			},
			// nav导航区域跳转
			navigateToPage(url) {
				uni.navigateTo({
					url
				})
			},
			// 跳转到商品详情
			goGoodsDetail(id) {
				uni.navigateTo({
					url: `/pages/goods-detail/goods-detail?id=${id}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			width: 750rpx;
			height: 380rpx;
			image {
				height: 100%;
				width: 100%;
			}
		}
		.nav {
			display: flex;
			.nav-item {
				flex: 1;
				text-align: center;
				view {
					margin: 20rpx auto;
					width: 120rpx;
					height: 120rpx;
					background-color: $shop-color;
					color: #fff;
					line-height: 120rpx;
					font-size: 50rpx;
					border-radius: 50%;
					&.icon-tupian {
						font-size: 45rpx;
					}
				}
				text {
					font-size: 30rpx;
				}
			}
		}
		.hot-goods {
			margin-top: 40rpx;
			background-color: #eee;
			overflow: hidden;
			.hot-goods-title {
				margin-top: 10rpx;
				height: 100rpx;
				line-height: 100rpx;
				color: $shop-color;
				background-color: #fff;
				text-align: center;
				letter-spacing: 30rpx;
			}
		}
	}
</style>
