"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
	let convertHandler = new ConvertHandler();
	app.get("/api/convert", (req, res) => {
		const inputNum = convertHandler.getNum(req.query.input);
		const inputUnit = convertHandler.getUnit(req.query.input);
		const returnUnit = convertHandler.getReturnUnit(inputUnit);
		const returnNum = convertHandler.convert(inputNum, inputUnit);
		const returnString = convertHandler.getString(
			inputNum,
			inputUnit,
			returnNum,
			returnUnit
		);

		// return invalid if necessary
		if (inputNum === "invalid number" && returnUnit === "invalid unit") {
			res.send("invalid number and unit");
		}
		if (inputNum === "invalid number") {
			res.send("invalid number");
		}
		if (returnUnit === "invalid unit") {
			res.send("invalid unit");
		}

		res.json({
			initNum: inputNum,
			initUnit: inputUnit,
			returnNum: returnNum,
			returnUnit: returnUnit,
			string: returnString,
		});
	});
};
