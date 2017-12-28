/**
 * related to message.ui
 * 消息
 * 
 * @Author : 1140480831@qq.com
 * @Timestamp : 2017-12-17
 */
var utils = require("utils");
var app = sm("do_App");
var do_ALayout_back = ui("do_ALayout_back");

// 关闭页面
utils.backPage();
do_ALayout_back.on("touch", 200, function() {
	app.closePage();
});