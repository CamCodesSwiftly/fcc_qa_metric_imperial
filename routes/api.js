"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
	let convertHandler = new ConvertHandler();
	app.get("/api/convert", (req, res) => {
		// console.log(req.query.input);

		const { numbersString, charactersString } = splitInputString(
			req.query.input
		);

		console.log("Numbers:", numbersString);
		console.log("Characters:", charactersString);

		convertHandler.setNum(numbersString);
		convertHandler.setUnit(charactersString);

		console.log("initNum", convertHandler.getNum());
		console.log("initUnit", convertHandler.getUnit());
		console.log("returnUnit", convertHandler.getReturnUnit());
		console.log(
			"spellunit",
			convertHandler.spellOutUnit(convertHandler.getUnit())
		);

		res.json({
			initNum: 0,
			initUnit: "cm",
			returnNum: 1,
			returnUnit: "ft",
			string: `Der Retörn string`,
		});
	});
};

// TODO: Splitstring function
function splitInputString(inputString) {
	const nonNumericIndex = Array.from(inputString).findIndex((char) =>
		isNaN(Number(char))
	);

	// Extract numeric and non-numeric parts
	const numbersString = inputString.substring(0, nonNumericIndex);
	const charactersString = inputString.substring(nonNumericIndex);

	return {
		numbersString: numbersString,
		charactersString: charactersString,
	};
}
