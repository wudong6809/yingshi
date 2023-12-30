// 发布页 https://www.nmdvd.com/
var rule={
	title:'樱花动漫',
	//host:'https://www.iyhdm.com/',
	url:'/video/fyclass/fyfilter.html',
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.class}}-{{fl.area}}-{{fl.year}}----{{fl.by}}-fypage',
	filter: {"type3":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"热血","v":"热血"},{"n":"恋爱","v":"恋爱"},{"n":"科幻","v":"科幻"},{"n":"奇幻","v":"奇幻"},{"n":"百合","v":"百合"},{"n":"后宫","v":"后宫"},{"n":"励志","v":"励志"},{"n":"搞笑","v":"搞笑"},{"n":"冒险","v":"冒险"},{"n":"校园","v":"校园"},{"n":"战斗","v":"战斗"},{"n":"机战","v":"机战"},{"n":"运动","v":"运动"},{"n":"战争","v":"战争"},{"n":"萝莉","v":"萝莉"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"日本","v":"日本"},{"n":"大陆","v":"大陆"},{"n":"欧美","v":"欧美"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2010-2000","v":"20002010"},{"n":"90年代","v":"19901999"},{"n":"更早","v":"18001989"}]},{"key":"by","name":"排序","value":[{"n":"最新","v":"addtime"},{"n":"热播","v":"hits"},{"n":"评分","v":"gold"}]}]},
	filter_def:{
		type3:{by:'addtime'}
	},
	filter_def:{
		1:{cateId:'1'},
		2:{cateId:'2'},
		3:{cateId:'3'},
		4:{cateId:'4'},
		26:{cateId:'26'}
	},
	searchUrl:'/index.php?m=vod-search&wd=**',
	searchable:2,//是否启用全局搜索,
	headers:{//网站的请求头,完整支持所有的,常带ua和cookies
		'User-Agent': 'MOBILE_UA',
	},
	// class_parse: '#topnav li:lt(4);a&&Text;a&&href;.*/(.*?).html',
    class_name:'日本动漫&国产动漫&剧场版&OVA版&目录',//静态分类名称拼接
    class_url:'1&2&3&4&26',//静态分类标识拼接
	play_parse: true,
	lazy:'',
	limit:6,
	推荐:'.globalPicList .resize_list;*;img&&data-src;*;*',
	一级:'.globalPicList li;.sTit&&Text;img&&src;.sBottom--em&&Text;a&&href',
	二级:{
		"title":".title&&Text;.type-title&&Text",
		"img":".page-hd&&img&&src",
		"desc":".desc_item:eq(3)&&Text;.desc_item:eq(4)--span&&Text;;.desc_item:eq(1)--span&&Text;.desc_item:eq(2)--span&&Text",
		"content":".detail-con p&&Text",
		"tabs":".hd li",
		"lists":".numList:eq(#id) li"
	},
	搜索:'.ulPicTxt.clearfix li;*;img&&data-src;.sDes:eq(1)&&Text;*',

	// //是否启用辅助嗅探: 1,0
	// sniffer:1,
	// // 辅助嗅探规则js写法
	// isVideo:`js:
	// 	log(input);
	// 	if(/video\\/tos/.test(input)){
	// 		input = true
	// 	}else if(/\\.m3u8/.test(input)){
	// 		input = true
	// 	}else{
	// 		input = false
	// 	}
	// `,
}
