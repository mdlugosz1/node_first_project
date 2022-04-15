const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookInstaceSchema = new Schema({
	book: { type: Schema.Types.ObjectId, reqired: true, ref: "Book" },
	imprint: { type: String, required: true },
	status: {
		type: String,
		required: true,
		enum: ["Available", "Maintenance", "Loaned", "Reserved"],
		default: "Maintenance",
	},
	due_back: { type: Date, default: Date.now() },
});

BookInstaceSchema.virtual("url").get(function () {
	return "/catalog/bookinstance/" + this._id;
});

module.exports = mongoose.model("BookInstance", BookInstaceSchema);
