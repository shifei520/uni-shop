import request from '@/utils/request.js'

/**
  * @Description: 获取轮播图数据
  * 
  * @author fei shi
  * @param 
  * @return 
  * @createTime: 2022-08-00 08:54:33
  */
export function getSwipers() {
	return request({
		url: '/api/getlunbo',
		method: 'GET'
	})
}
/**
  * @Description: 获取推荐商品数据
  * 
  * @author fei shi
  * @param
  * pageNum 当前页数
  * @return 
  * @createTime: 2022-08-00 10:13:20
  */
export function getHotList(pageNum) {
	return request({
		url: `/api/getgoods?pageindex=${pageNum}`,
		method: 'GET'
	})
}
 /**
   * @Description: 获取社区图片页面左侧分类数据
   * 
   * @author fei shi
   * @param 
   * @return 
   * @createTime: 2022-08-01 17:18:00
   */
export function getPicsCate() {
	return request({
		url: '/api/getimgcategory',
		method: 'GET'
	})
}
/**
  * @Description: 根据分类id获取图片数据
  * 
  * @author fei shi
  * @param 
  * @return 
  * @createTime: 2022-08-01 17:20:41
  */
export function getPicsById(cateid) {
	return request({
		url: `/api/getimages/${cateid}`,
		method: 'GET'
	})
}