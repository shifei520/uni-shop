(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-contact-contact"],{"08fc":function(n,t,i){"use strict";i.r(t);var e=i("cd02"),a=i("3169");for(var r in a)"default"!==r&&function(n){i.d(t,n,(function(){return a[n]}))}(r);i("7652");var c,u=i("f0c5"),o=Object(u["a"])(a["default"],e["b"],e["c"],!1,null,"3074c62e",null,!1,e["a"],c);t["default"]=o.exports},"1be5":function(n,t,i){var e=i("6c08");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var a=i("4f06").default;a("1559d436",e,!0,{sourceMap:!1,shadowMode:!1})},3169:function(n,t,i){"use strict";i.r(t);var e=i("bedc"),a=i.n(e);for(var r in e)"default"!==r&&function(n){i.d(t,n,(function(){return e[n]}))}(r);t["default"]=a.a},"6c08":function(n,t,i){var e=i("24fb");t=e(!1),t.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.img[data-v-3074c62e]{width:%?750?%;height:%?320?%}.info[data-v-3074c62e]{padding:%?10?% %?20?%;font-size:%?30?%}.info uni-view[data-v-3074c62e]{line-height:%?80?%;border-bottom:1px solid #eee}.map[data-v-3074c62e]{height:%?750?%;width:%?750?%}',""]),n.exports=t},7652:function(n,t,i){"use strict";var e=i("1be5"),a=i.n(e);a.a},bedc:function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{latitude:24.609429,longitude:118.039668}},onLoad:function(){var n=this;uni.getLocation({isHighAccuracy:!0,success:function(t){n.latitude=t.latitude,n.longitude=t.longitude},fail:function(n){uni.showToast({title:"位置信息获取失败",icon:"none"})}})},methods:{makeCall:function(){uni.makePhoneCall({phoneNumber:"400-618-9090"})}}};t.default=e},cd02:function(n,t,i){"use strict";var e;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return e}));var a=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",{staticClass:"contact"},[i("v-uni-image",{staticClass:"img",attrs:{src:"http://www.itcast.cn/2018czydz/images/gywmban.jpg"}}),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.makeCall.apply(void 0,arguments)}}},[n._v("联系电话：400-618-9090（点击拨打）")]),i("v-uni-view",[n._v("校区地址：浙江省杭州市下沙经济开发区4号大街187号盛泰时代山")])],1),i("v-uni-map",{staticClass:"map",attrs:{latitude:n.latitude,longitude:n.longitude,scale:17}})],1)},r=[]}}]);