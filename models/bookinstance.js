const mongoose = require("mongoose");
const { DateTime } = require("luxon");

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

BookInstaceSchema.virtual("formatted_due_date").get(function () {
	return DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED);
});

module.exports = mongoose.model("BookInstance", BookInstaceSchema);
