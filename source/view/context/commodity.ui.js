/**
 * related to commodity.ui
 * 商品管理
 * @Author : 1140480831@qq.com
 * @Timestamp : 2017-12-17
 */
var utils = require("utils");
var app = sm("do_App");
var do_ALayout_back = ui("do_ALayout_back");
var do_ALayout_right = ui("do_ALayout_right");


//分类管理
do_ALayout_right.on("touch",200,function(){
	utils.openPage("source://view/context/classify.ui");
});

// 关闭页面
utils.backPage();
do_ALayout_back.on("touch", 200, function() {
	app.closePage();
});
