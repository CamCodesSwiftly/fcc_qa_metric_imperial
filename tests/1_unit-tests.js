const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
	//#1
	test("#is whole number", () => {
		assert.strictEqual(
			Number.isInteger(convertHandler.getNum("20")),
			true,
			"This string has to be converted to a number"
		);
	});
	// #2
	test("#is decimal number", () => {
		assert.strictEqual(
			typeof convertHandler.getNum("20.5") === "number" &&
				!Number.isInteger(convertHandler.getNum("20.5")),
			true,
			"This string has to be converted to a decimal number"
		);
	});
	// #3
	test("#is fractional number with max one slash", () => {
		assert.strictEqual(
			typeof convertHandler.getNum("2/3") === "number" &&
				!Number.isInteger(convertHandler.getNum("2/3")),
			true,
			"This string has to be converted to a fractional number with max one slash"
		);
	});
	// #4
	test("#is fractional number with decimals", () => {
		assert.strictEqual(
			typeof convertHandler.getNum("2.5/3.5") === "number" &&
				!Number.isInteger(convertHandler.getNum("2.5/3.5")),
			true,
			"This string has to be converted to a fractional number with decimals"
		);

		assert.strictEqual(
			typeof convertHandler.getNum("2.5/3") === "number" &&
				!Number.isInteger(convertHandler.getNum("2.5/3")),
			true,
			"This string has to be converted to a fractional number with decimals"
		);

		assert.strictEqual(
			typeof convertHandler.getNum("2/3.5") === "number" &&
				!Number.isInteger(convertHandler.getNum("2/3.5")),
			true,
			"This string has to be converted to a fractional number with decimals"
		);
	});
	// #5
	test("#fractionals shall not have more than one slash", () => {
		assert.strictEqual(
			convertHandler.getNum("2/3/4"),
			"invalid number",
			"This string should be considered invalid (more than one slash)"
		);
	});
	// #6
	test("#if no number is provided 1 should be default", () => {
		assert.strictEqual(
			convertHandler.getNum("kg"),
			1,
			"The string should be converted to the number 1"
		);
	});
	// #7
	test("#accept valid inputs units", () => {
		assert.strictEqual(
			convertHandler.getUnit("1gal"),
			"gal",
			"The string should return kg"
		);
		assert.strictEqual(
			convertHandler.getUnit("1L"),
			"L",
			"The string should return L"
		);
		assert.strictEqual(
			convertHandler.getUnit("1mi"),
			"mi",
			"The string should return mi"
		);
		assert.strictEqual(
			convertHandler.getUnit("1km"),
			"km",
			"The string should return km"
		);
		assert.strictEqual(
			convertHandler.getUnit("1lbs"),
			"lbs",
			"The string should return lbs"
		);
		assert.strictEqual(
			convertHandler.getUnit("1kg"),
			"kg",
			"The string should return kg"
		);
	});
	// #8
	test("#do not allow invalid input units", () => {
		assert.strictEqual(
			convertHandler.getReturnUnit("1lelele"),
			"invalid unit",
			"The string should be converted to the number 1"
		);
	});
	// #9
	test("#return the correct unit", () => {
		assert.strictEqual(
			convertHandler.getReturnUnit("gal"),
			"L",
			"The string should return L"
		);
		assert.strictEqual(
			convertHandler.getReturnUnit("L"),
			"gal",
			"The string should return gal"
		);
		assert.strictEqual(
			convertHandler.getReturnUnit("mi"),
			"km",
			"The string should return km"
		);
		assert.strictEqual(
			convertHandler.getReturnUnit("km"),
			"mi",
			"The string should return mi"
		);
		assert.strictEqual(
			convertHandler.getReturnUnit("lbs"),
			"kg",
			"The string should return kg"
		);
		assert.strictEqual(
			convertHandler.getReturnUnit("kg"),
			"lbs",
			"The string should return lbs"
		);
	});

	// #10
	test("#return the correct spelled out units", () => {
		assert.strictEqual(
			convertHandler.spellOutUnit("gal"),
			"gallons",
			"The string should return gallons"
		);
		assert.strictEqual(
			convertHandler.spellOutUnit("L"),
			"liters",
			"The string should return liters"
		);
		assert.strictEqual(
			convertHandler.spellOutUnit("mi"),
			"miles",
			"The string should return miles"
		);
		assert.strictEqual(
			convertHandler.spellOutUnit("km"),
			"kilometers",
			"The string should return kilometers"
		);
		assert.strictEqual(
			convertHandler.spellOutUnit("lbs"),
			"pounds",
			"The string should return pounds"
		);
		assert.strictEqual(
			convertHandler.spellOutUnit("kg"),
			"kilograms",
			"The string should return kilograms"
		);
	});

	// #11
	test("#convert from gallons to liters", () => {
		assert.strictEqual(
			convertHandler.convert(1, "gal"),
			3.78541,
			"The Number should be exactly 3.78541"
		);
	});

	// #12
	test("#convert from liters to gallons", () => {
		assert.strictEqual(
			convertHandler.convert(1, "l"),
			0.26417,
			"The Number should be exactly 0.26417"
		);
	});

	// #13
	test("#convert from miles to kilometers", () => {
		assert.strictEqual(
			convertHandler.convert(1, "mi"),
			1.60934,
			"The Number should be exactly 1.60934"
		);
	});

	// #14
	test("#convert from kilometers to miles", () => {
		assert.strictEqual(
			convertHandler.convert(1, "km"),
			0.62137,
			"The Number should be exactly 0.62137"
		);
	});

	// #15
	test("#convert from pounds to kilograms", () => {
		assert.strictEqual(
			convertHandler.convert(1, "lbs"),
			0.45359,
			"The Number should be exactly 0.45359"
		);
	});

	// #16
	test("#convert from kilograms to pounds", () => {
		assert.strictEqual(
			convertHandler.convert(1, "kg"),
			2.20462,
			"The Number should be exactly 2.20462"
		);
	});
});
