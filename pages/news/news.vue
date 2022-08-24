<template>
	<view class="news-page">
		<news-list @to-detail-page="toDetailPage" :newsList="newsList"></news-list>
	</view>
</template>

<script>
	import { getNewsList } from '@/api/news.js'
	import NewsList from '@/components/NewsItem/NewsItem.vue'
	export default {
		components: {
			NewsList
		},
		data() {
			return {
				newsList: []
			}
		},
		onLoad() {
			this.getNewsList() // 获取资讯列表
		},
		methods: {
			// 获取资讯列表
			async getNewsList() {
				const { message } = await getNewsList()
				this.newsList = message
			},
			toDetailPage(id) {
				uni.navigateTo({
					url: `/pages/news-detail/news-detail?id=${id}`
				})
			}
		}
	}
</script>

<style lang="scss">
.news-item {
	display: flex;
	padding: 10rpx 20rpx;
	border-bottom: 1px solid $shop-color;
	image {
		min-width: 200rpx;
		max-width: 200rpx;
		height: 150rpx;
	}
	.news-item-right {
		margin-left: 15rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.tit {
			font-size: 30rpx;
		}
		.info {
			font-size: 24rpx;
		}
	}
}
</style>
