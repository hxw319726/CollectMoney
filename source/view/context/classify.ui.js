/**
 * related to commodity.ui 分类管理
 * 
 * @Author : 1140480831@qq.com
 * @Timestamp : 2017-12-17
 */
var utils = require("utils");
var components = require("components");

var app = sm("do_App");
var nf = sm("do_Notification");
var do_ListData_classifyList = mm("do_ListData");// 分类列表数据

var rootview = ui("$");
var do_ALayout_back = ui("do_ALayout_back");
var do_ListView_classifyList = ui("do_ListView_classifyList");// 分类列表视图

var defClassifyData = [ {
	template : 0,
	classifyName : "默认分类"
} ];

// 添加分类数据
do_ListData_classifyList.addData(defClassifyData);
// 绑定分类数据
do_ListView_classifyList.bindItems(do_ListData_classifyList);

// 新增分類
var do_ALayout_addClassify = ui("do_ALayout_addClassify");
do_ALayout_addClassify.on("touch", function() {
	components.prompt(rootview, function(value) {
		do_ListData_classifyList.addOne({
			template : 0,
			classifyName : value
		});
		do_ListView_classifyList.refreshItems();
	});
});

// 编辑
var do_ALayout_right = ui("do_ALayout_right");
var do_Label_right = ui("do_Label_right");
do_ALayout_right.on("touch", function() {
	if (defClassifyData[0].template == 0) {
		do_Label_right.text = "取消";
		defClassifyData.map(function(item) {
			item.template = 1;
		});
		do_ALayout_addClassify.visible = false;
	} else {
		do_Label_right.text = "编辑";
		defClassifyData.map(function(item) {
			item.template = 0;
		});
		do_ALayout_addClassify.visible = true;
	}
	do_ListData_classifyList.removeAll();
	do_ListData_classifyList.addData(defClassifyData);
	do_ListView_classifyList.bindItems(do_ListData_classifyList);
});
// 关闭页面
utils.backPage();
do_ALayout_back.on("touch", 200, function() {
	app.closePage();
});
