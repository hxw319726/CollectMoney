/**
 * @Author : 1140480831@qq.com
 * @Timestamp : 2017-12-17
 */
var d1 = require("deviceone");
var app = d1.sm("do_App");

app.on("loaded", function () {
	app.openPage("source://view/index.ui");
});
