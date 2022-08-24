<template>
	<view class="news-detail">
		<h5 class="title">{{ newsInfo.title }}</h5>
		<view class="info">
			<text>发表时间：{{ newsInfo.add_time | formatDate }}</text>
			<text>浏览：{{ newsInfo.click }}</text>
		</view>
		<view class="content">
			<rich-text :nodes="newsInfo.content"></rich-text>
		</view>
	</view>
</template>

<script>
	import { getNewsDetail } from '@/api/news.js'
	export default {
		data() {
			return {
				newsId: 0,
				newsInfo: {}
			}
		},
		onLoad(options) {
			this.newsId = options.id && options.id
			this.getNewsDetail()
		},
		methods: {
			async getNewsDetail() {
				const { message } = await getNewsDetail(this.newsId)
				this.newsInfo = message[0]
			}
		}
	}
</script>

<style lang="scss">
.news-detail {
	padding: 0 15rpx;
	font-size: 30rpx;
	
	.title {
		margin: 20rpx;
		font-weight: 600;
		text-align: center;
	}
	.info {
		display: flex;
		justify-content: space-between;
	}
}
</style>
