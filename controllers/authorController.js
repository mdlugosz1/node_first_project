const Author = require("../models/author");

//Display list of all authors
exports.author_list = function (req, res) {
	res.send("TO BE IMPLEMENTED");
};

//Display detail page for specific author
exports.author_detail = function (req, res) {
	res.send("TO BE IMPLEMENTED" + req.params.id);
};

//Display author create form on GET
exports.author_create_get = function (req, res) {
	res.send("TO BE IMPLEMENTED");
};

//Handle author create on POST
exports.author_create_post = function (req, res) {
	res.send("TO BE IMPLEMENTED");
};

//Display author delete form on GET
exports.author_delete_get = function (req, res) {
	res.send("TO BE IMPLEMENTED");
};

//Handle author delete on POST
exports.author_delete_post = function (req, res) {
	res.send("TO BE IMPLEMENTED");
};

//Display author update form on GET
exports.author_update_get = function (req, res) {
	res.send("TO BE IMPLEMENTED");
};

//Handle author update on POST
exports.author_update_post = function (req, res) {
	res.send("TO BE IMPLEMENTED");
};
