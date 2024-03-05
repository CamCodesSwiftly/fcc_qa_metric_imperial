const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

// suite("Unit Tests", function () {
// 	//#1
// 	test("#isInteger", function () {
// 		assert.strictEqual(
// 			Number.isInteger(convertHandler.getNum("20km")),
// 			true,
// 			"A String is not an integer"
// 		);
// 		assert.strictEqual(
// 			Number.isInteger(convertHandler.getNum("20")),
// 			true,
// 			"A String representing an integer should be recognized as an integer"
// 		);
// 		assert.strictEqual(
// 			Number.isInteger(convertHandler.getNum(20)),
// 			true,
// 			"A Number is an integer"
// 		);
// 	});
// });
