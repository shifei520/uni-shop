<template>
	<view class="goods-list-page">
		<goods-list @go-goods-detail="goGoodsDetail" :goods="goodsListArr"></goods-list>
		<div class="load-all" v-if="visible">----我是有底线的----</div>
	</view>
</template>

<script>
	import { getHotList } from '@/api/home.js'
	import GoodsList from '@/components/GoodsList/GoodsList.vue'
	export default {
		components: {
			GoodsList
		},
		data() {
			return {
				pageNum: 1, // 当前商品列表页数
				goodsListArr: [], // 商品列表数组数据
				visible: false // 控制加载完成提示的显示与隐藏
			}
		},
		onLoad() {
			this.getGoodsList()
		},
		methods: {
			// 获取商品列表
			async getGoodsList(callback) {
				const { message } = await getHotList(this.pageNum)
				this.goodsListArr = [...this.goodsListArr, ...message]
				callback && callback()
			},
			// 跳转到商品详情
			goGoodsDetail(id) {
				uni.navigateTo({
					url: `/pages/goods-detail/goods-detail?id=${id}`
				})
			}
		},
		onReachBottom() {
			if(this.goodsListArr.length < this.pageNum * 10) return this.visible = true
			this.pageNum++
			this.getGoodsList()
		},
		onPullDownRefresh() {
			this.pageNum = 1
			this.goodsListArr = []
			this.getGoodsList(() => {
				uni.stopPullDownRefresh()
			})
		}
	}
</script>

<style lang="scss">
.load-all {
	height: 100rpx;
	line-height: 100rpx;
	font-size: 28rpx;
	color: #ccc;
	text-align: center;
}
</style>
