"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
	let convertHandler = new ConvertHandler();
	app.get("/api/convert", (req, res) => {
		console.log(req.query.input);
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
		console.log("------");
		
    
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
