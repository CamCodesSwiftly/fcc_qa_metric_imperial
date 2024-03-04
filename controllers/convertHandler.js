function ConvertHandler() {
	this.initNum = 0;
	this.initUnit = "";
	this.returnNum = 0;
	this.returnUnit = "";

	this.setNum = function (input) {
		this.initNum = Number(input);
	};

	this.setUnit = function (input) {
		this.initUnit = input;
	};

	this.getNum = function () {
		return this.initNum;
	};

	this.getUnit = function () {
		return this.initUnit;
	};

	this.getReturnUnit = function (initUnit) {
		const switchUnit = this.initUnit ? this.initUnit : initUnit;

		switch (switchUnit) {
			case "gal":
				return "L"; // Gallons to Liters
			case "L":
				return "gal"; // Liters to Gallons
			case "mi":
				return "km"; // Miles to Kilometers
			case "km":
				return "mi"; // Kilometers to Miles
			case "lbs":
				return "kg"; // Pounds to Kilograms
			case "kg":
				return "lbs"; // Kilograms to Pounds
			default:
				return null; // Handle unsupported units or return an error
		}
	};

	//TODO ALL
	this.spellOutUnit = function (unit) {
		switch (unit) {
			case "gal":
				return "gallons";
			case "L":
				return "liters";
			case "mi":
				return "miles";
			case "km":
				return "kilometers";
			case "lbs":
				return "pounds";
			case "kg":
				return "kilograms";
			default:
				return null; // Handle unsupported units or return an error
		}
	};

	this.convert = function (initNum, initUnit) {
		const galToL = 3.78541;
		const lbsToKg = 0.453592;
		const miToKm = 1.60934;
		let result;

		return result;
	};

	this.getString = function (initNum, initUnit, returnNum, returnUnit) {
		let result;

		return result;
	};
}

module.exports = ConvertHandler;
