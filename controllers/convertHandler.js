function ConvertHandler() {
	this.findInvalidInput = (input) => {
		//TODO: allow decimals, allow fractionals
		// const regex = /^\d+(\.\d+)?(\/)?(\d+)?(\.\d+)?$/g;
		const regex = /^\d+(\.\d+)?(\/)?(\d+)?(\.\d+)?.*$/g;
		let matches = input.match(regex);
		return matches;
	};

	this.getNum = function (input) {
		let result;
		// check for more than one slash please
		const slashesRegex = /\//g;
		let slashes = input.match(slashesRegex);
		console.log("hey");
		if (slashes && slashes.length > 1) {
			console.log("hey2");
			return "invalid number";
		}

		// allow for decimals and fractionals
		console.log("Hey3");
		const regex = /^\d+(\.\d+)?(\/)?(\d+)?(\.\d+)?/g;
		console.log("hey4");
		if (!input.match(regex)) {
			return 1;
		}
		console.log("hey5");
		let matches = input.match(regex);
		result = matches[0];
		console.log("getNum first matching: " + result);

		// //Extract numeric part
		// const numericRegex = /\D+$/g;
		// let split = matches[0].split(numericRegex);
		// console.log("getNum second matching" + split[0]);
		try {
			result = eval(result);
		} catch (error) {
			return "invalid number";
		}
		return result;
	};

	this.getUnit = function (input) {
		// TODO: this will likely all be wrong
		let result;
		let lowerCaseInput = input.toLowerCase();

		// Extract non numeric part
		const numericRegex = /\D+$/g;
		result = lowerCaseInput.match(numericRegex)[0];

		// Make sure Liters are always "L"
		if (result == "l") {
			return "L";
		}
		return result;
	};

	this.getReturnUnit = function (initUnit) {
		let result;
		let lowerCaseInput = initUnit.toLowerCase();
		switch (lowerCaseInput) {
			case "gal":
				result = "L"; // Gallons to Liters
				return result;
			case "l":
				result = "gal"; // Liters to Gallons
				return result;
			case "mi":
				result = "km"; // Miles to Kilometers
				return result;
			case "km":
				result = "mi"; // Kilometers to Miles
				return result;
			case "lbs":
				result = "kg"; // Pounds to Kilograms
				return result;
			case "kg":
				result = "lbs"; // Kilograms to Pounds
				return result;
			default:
				result = "invalid unit"; // Handle unsupported units or return an error
				return "invalid unit";
		}
	};

	this.spellOutUnit = function (unit) {
		let lowerCaseUnit = unit.toLowerCase();
		let result;
		switch (lowerCaseUnit) {
			case "gal":
				result = "gallons";
				return result;
			case "l":
				result = "liters";
				return result;
			case "mi":
				result = "miles";
				return result;
			case "km":
				result = "kilometers";
				return result;
			case "lbs":
				result = "pounds";
				return result;
			case "kg":
				result = "kilograms";
				return result;
			default:
				result = "invalid unit"; // Handle unsupported units or return an error
				return result;
		}
	};

	this.convert = function (initNum, initUnit) {
		let lowerCaseUnit = initUnit.toLowerCase();
		const galToL = 3.78541;
		const lbsToKg = 0.453592;
		const miToKm = 1.60934;
		let result;
		switch (lowerCaseUnit) {
			case "gal":
				result = initNum * galToL;
				return parseFloat(result.toFixed(5));
			case "l":
				result = initNum / galToL;
				return parseFloat(result.toFixed(5));
			case "mi":
				result = initNum * miToKm;
				return parseFloat(result.toFixed(5));
			case "km":
				result = initNum / miToKm;
				return parseFloat(result.toFixed(5));
			case "lbs":
				result = initNum * lbsToKg;
				return parseFloat(result.toFixed(5));
			case "kg":
				result = initNum / lbsToKg;
				return parseFloat(result.toFixed(5));
			default:
				result = "invalid unit";
				return result;
		}
	};

	this.getString = function (initNum, initUnit, returnNum, returnUnit) {
		let result;
		result = `${initNum} ${this.spellOutUnit(
			initUnit
		)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
		return result;
	};
}

module.exports = ConvertHandler;
