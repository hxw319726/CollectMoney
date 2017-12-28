/**
 * New DeviceOne File
 */
var d1 = require("deviceone");
var app = d1.sm("do_App");
var page = d1.sm("do_Page");

// 打开页面
module.exports.openPage = function(source, data) {
	if (!data)
		data = "";
	app.openPage({
		"source" : source,
		"data" : data,
		"animationType" : "slide_l2r",
		"statusBarFgColor" : "white",
		"statusBarBgColor" : "414959FF"
	});
}

// back返回的封装
module.exports.backPage = function() {
	// 关闭页面
	page.on("back", "", 200, function() {
		page.hideKeyboard();
		app.closePage();
	});
}

// 判断子组件是否存在
module.exports.isChildUI = function(rootview, id) {
	if (rootview.getChildren().indexOf(id) != -1) {
		// 存在子ui
		return true;
	} else {
		// 不存在子ui
		return false;
	}
}