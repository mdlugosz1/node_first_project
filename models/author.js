const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
	first_name: { type: String, required: true, maxLength: 100 },
	family_name: { type: String, required: true, maxLength: 100 },
	date_of_birth: { type: Date },
	date_of_death: { type: Date },
});

AuthorSchema.virtual("name").get(function () {
	let fullName = "";

	if (this.first_name && this.family_name) {
		fullName = this.first_name + ", " + this.family_name;
	}

	if (!this.first_name || !this.family_name) {
		fullName = "";
	}

	return fullName;
});

AuthorSchema.virtual("lifespan").get(function () {
	let lifespan = "";

	if (this.date_of_birth) {
		lifespan = DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_SHORT);
	}

	lifespan += " - ";

	if (this.date_of_death) {
		lifespan += DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_SHORT);
	}

	return lifespan;
});

AuthorSchema.virtual("url").get(function () {
	return "/catalog/author/" + this._id;
});

AuthorSchema.virtual("formatted_date_of_birth").get(function () {
	return this.date_of_birth
		? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED)
		: "";
});

AuthorSchema.virtual("formatted_date_of_death").get(function () {
	return this.date_of_death
		? DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED)
		: "";
});

module.exports = mongoose.model("Author", AuthorSchema);
