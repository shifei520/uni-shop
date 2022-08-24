import request from '@/utils/request.js'

/**
  * @Description: 获取资讯列表
  * 
  * @author fei shi
  * @param 
  * @return 
  * @createTime: 2022-08-02 15:49:55
  */
export function getNewsList() {
	return request({
		url: '/api/getnewslist',
		method: 'GET'
	})
}

/**
  * @Description: 获取资讯详情
  * 
  * @author fei shi
  * @param 
  * @return 
  * @createTime: 2022-08-02 20:47:40
  */
export function getNewsDetail(newid) {
	return request({
		url: `/api/getnew/${newid}`,
		method: 'GET'
	})
}