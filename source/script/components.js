/**
 * New DeviceOne File
 */
var d1 = require("deviceone");
var utils = require("utils");

module.exports.prompt = function(rootview, options, callback) {
	if (!rootview)
		return;
	if (typeof options == "function") {
		callback = options;
	}

	if (!utils.isChildUI(rootview, "prompt")) {
		var prompt = rootview.add("prompt",
				"source://view/component/prompt.ui", 0, 0);
		d1.ui(prompt).visible = true;
		// 关闭
		var promptClose = d1.ui(prompt + ".do_ALayout_close");
		promptClose.on("touch", function() {
			d1.ui(prompt).visible = false;
			d1.ui(prompt + ".do_TextField_context").text = "";
		});

		// 确定，保存
		var promptOk = d1.ui(prompt + ".do_ALayout_ok");
		promptOk.on("touch", function() {
			var value = d1.ui(prompt + ".do_TextField_context").text;
			callback(value);
			d1.ui(prompt).visible = false;
			d1.ui(prompt + ".do_TextField_context").text = "";
		});
	} else {
		d1.ui("prompt").visible = true;

	}

}