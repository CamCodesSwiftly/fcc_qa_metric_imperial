"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
	let convertHandler = new ConvertHandler();
	app.get("/api/convert", (req, res) => {
		console.log("reqqueryinput: " + req.query.input);
		const inputNum = convertHandler.getNum(req.query.input);
		console.log("inputNum: " + inputNum);
		const inputUnit = convertHandler.getUnit(req.query.input);
		console.log("inputUnit: " + inputUnit);
		const returnUnit = convertHandler.getReturnUnit(inputUnit);
		console.log("returnUnit: " + returnUnit);
		const returnNum = convertHandler.convert(inputNum, inputUnit);
		console.log("returnNum: " + returnNum);
		const returnString = convertHandler.getString(
			inputNum,
			inputUnit,
			returnNum,
			returnUnit
		);
		console.log("returnString: " + returnString);
		console.log("-------------------------------------------");
		console.log(" ");

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
