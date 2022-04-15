const mongoose = require("mongoose");

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
		lifespan = this.date_of_birth.getYear().toString();
	}

	lifespan += " - ";

	if (this.date_of_death) {
		lifespan += this.date_of_death.getYear().toString();
	}

	return lifespan;
});

AuthorSchema.virtual("url").get(function () {
	return "/catalog/author/" + this_.id;
});

module.exports = mongoose.model("Author", AuthorSchema);
