const Author = require("../models/author");
const Book = require("../models/book");
const async = require("async");

//Display list of all authors
exports.author_list = function (req, res, next) {
	Author.find()
		.sort([["family_name"], ["ascending"]])
		.exec(function (err, list_author) {
			if (err) {
				return next(err);
			}
			res.render("author_list", { title: "Authors list", author_list: list_author });
		});
};

//Display detail page for specific author
exports.author_detail = function (req, res, next) {
	async.parallel(
		{
			author: function (callback) {
				Author.findById(req.params.id).exec(callback);
			},
			author_books: function (callback) {
				Book.find({ author: req.params.id }, "title summary").exec(callback);
			},
		},
		function (err, results) {
			if (err) {
				return next(err);
			}
			if (results.author === null) {
				const err = new Error("No author found");
				err.status = 404;
				return next(err);
			}

			res.render("author_details", {
				title: "Author detail",
				author: results.author,
				author_books: results.author_books,
			});
		}
	);
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
