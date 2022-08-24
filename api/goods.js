import request from '@/utils/request.js'

/**
  * @Description: 获取商品详情的轮播图数据
  * 
  * @author fei shi
  * @param 
  * @return 
  * @createTime: 2022-08-03 15:57:12
  */
function getGoodsDetailSwiper(imgid) {
	return request({
		url: `/api/getthumimages/${imgid}`,
		method: 'GET'
	})
}

/**
  * @Description: 获取商品详情的基本数据
  * 
  * @author fei shi
  * @param 
  * @return 
  * @createTime: 2022-08-03 17:28:27
  */
function getGoodsDetailInfo(id) {
	return request({
		url: `/api/goods/getinfo/${id}`,
		method: 'GET'
	})
}

/**
  * @Description: 获取商品详情的内容数据
  * 
  * @author fei shi
  * @param 
  * @return 
  * @createTime: 2022-08-03 17:28:48
  */
function getGoodsDetailContent(id) {
	return request({
		url: `/api/goods/getdesc/${id}`,
		method: 'GET'
	})
}