function ConvertHandler() {
	this.getNum = function (input) {
		let result;

		let nonNumericIndex = Array.from(input).findIndex((char) =>
			isNaN(Number(char))
		);
		// Extract numeric and non-numeric parts
		result = Number(input.substring(0, nonNumericIndex));
		console.log(result);

		return result;
	};

	this.getUnit = function (input) {
		let result;
		let lowerCaseInput = input.toLowerCase();

		let nonNumericIndex = Array.from(lowerCaseInput).findIndex((char) =>
			isNaN(Number(char))
		);
		// Extract numeric and non-numeric parts
		result = lowerCaseInput.substring(nonNumericIndex);
		if (result == "l") {
			console.log("L");
			return "L";
		}
		console.log(result);
		return result;
	};

	this.getReturnUnit = function (initUnit) {
		let result;
		let lowerCaseInput = initUnit.toLowerCase();
		switch (lowerCaseInput) {
			case "gal":
				result = "L"; // Gallons to Liters
				console.log(result);
				return result;
			case "l":
				result = "gal"; // Liters to Gallons
				console.log(result);
				return result;
			case "mi":
				result = "km"; // Miles to Kilometers
				console.log(result);
				return result;
			case "km":
				result = "mi"; // Kilometers to Miles
				console.log(result);
				return result;
			case "lbs":
				result = "kg"; // Pounds to Kilograms
				console.log(result);
				return result;
			case "kg":
				result = "lbs"; // Kilograms to Pounds
				console.log(result);
				return result;
			default:
				result = null; // Handle unsupported units or return an error
				console.log(result);
				return result;
		}
	};

	this.spellOutUnit = function (unit) {
		let lowerCaseUnit = unit.toLowerCase();
		let result;
		switch (lowerCaseUnit) {
			case "gal":
				result = "gallons";
				console.log(result);
				return result;
			case "l":
				result = "liters";
				console.log(result);
				return result;
			case "mi":
				result = "miles";
				console.log(result);
				return result;
			case "km":
				result = "kilometers";
				console.log(result);
				return result;
			case "lbs":
				result = "pounds";
				console.log(result);
				return result;
			case "kg":
				result = "kilograms";
				console.log(result);
				return result;
			default:
				result = null; // Handle unsupported units or return an error
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
				console.log(result);
				return parseFloat(result.toFixed(5));
			case "l":
				result = initNum / galToL;
				console.log(result);
				return parseFloat(result.toFixed(5));
			case "mi":
				result = initNum * miToKm;
				console.log(result);
				return parseFloat(result.toFixed(5));
			case "km":
				result = initNum / miToKm;
				console.log(result);
				return parseFloat(result.toFixed(5));
			case "lbs":
				result = initNum * lbsToKg;
				console.log(result);
				return parseFloat(result.toFixed(5));
			case "kg":
				result = initNum / lbsToKg;
				console.log(result);
				return parseFloat(result.toFixed(5));
			default:
				result = null;
				console.log(result);
				return result; // Handle unsupported units or return an error
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
