<template>
	<view>
		<view class="news-item" v-for="item in newsList" :key="item.id" @click="navigateToDetail(item.id)">
			<image src="~@/static/phone.jpg"></image>
			<view class="news-item-right">
				<view class="tit">
					{{ item.title }}
				</view>
				<view class="info">
					<text>发表时间：{{ item.add_time | formatDate }}</text>
					<text>浏览：{{ item.click }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['newsList'],
		filters: {
			formatDate(date) {
				const fDate = new Date(date)
				const year = fDate.getFullYear()
				const month = fDate.getMonth().toString().padStart(2, 0)
				const day = fDate.getDate().toString().padStart(2, 0)
				return year + '-' + month + '-' + day
			}
		},
		methods: {
			navigateToDetail(id) {
				this.$emit('toDetailPage', id)
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