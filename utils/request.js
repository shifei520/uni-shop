 const BASE_URL = 'http://localhost:8082'
 function request(options) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			timeout: 5000,
			success(res) {
				if(res.data.status !== 0) return uni.showToast({
					title: '获取数据失败',
					icon: 'error'
				})
				resolve(res.data)
			},
			fail(err) {
				uni.showToast({
					title: '请求接口失败',
					icon: 'error'
				})
				reject(err)
			}
		})
	})
}

export default request