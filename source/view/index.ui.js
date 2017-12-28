/**
 * @Author : 1140480831@qq.com
 * @Timestamp : 2017-12-17
 */
var nf = sm("do_Notification");
var page = sm("do_Page");
var app = sm("do_App");

var utils=require("utils");

var do_ALayout_commodity=ui("do_ALayout_commodity");
var do_ALayout_income=ui("do_ALayout_income");
var do_ALayout_message=ui("do_ALayout_message");



//商品管理
do_ALayout_commodity.on("touch",200,function(){
	utils.openPage("source://view/context/commodity.ui");
});
//我的收入
do_ALayout_income.on("touch",200,function(){
	utils.openPage("source://view/context/income.ui");
});
//消息
do_ALayout_message.on("touch",200,function(){
	utils.openPage("source://view/context/message.ui");
});


//关闭页面
utils.backPage();









