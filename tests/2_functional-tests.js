const chaiHttp = require("chai-http");
const chai = require("chai");
let assert = chai.assert;
const server = require("../server");

chai.use(chaiHttp);

suite("Functional Tests", function () {
	//#1
	test("#Convert 10L correct via GET /api/convert", () => {
		chai.request(server)
			.get("/api/convert")
			.query({ input: "10L" }) // Provide the desired query parameters
			.end(function (err, res) {
				assert.equal(err, null); // No error should occur
				assert.equal(res.status, 200);
				assert.property(res.body, "initNum", "initNum does not exist");
				assert.property(
					res.body,
					"initUnit",
					"initUnit does not exist"
				);
				assert.property(
					res.body,
					"returnNum",
					"returnNum does not exist"
				);
				assert.property(
					res.body,
					"returnUnit",
					"returnUnit does not exist"
				);
				assert.property(res.body, "string", "string does not exist");
				// Add specific expectations for returnNum and returnUnit
				assert.equal(res.body.returnNum, 2.64172);
				assert.equal(res.body.returnUnit, "gal");
			});
	});
	//#2
	test("#Convert 32g correct via GET /api/convert", () => {
		chai.request(server)
			.get("/api/convert")
			.query({ input: "32g" }) // Provide the desired query parameters
			.end(function (err, res) {
				assert.equal(err, null); // No error should occur
				assert.equal(res.status, 200);
				assert.equal(res.text, "invalid unit");
			});
	});
	//#3
	test("#Convert 3/7.2/4kg correct via GET /api/convert", () => {
		chai.request(server)
			.get("/api/convert")
			.query({ input: "3/7.2/4kg" }) // Provide the desired query parameters
			.end(function (err, res) {
				assert.equal(err, null); // No error should occur
				assert.equal(res.status, 200);
				assert.equal(res.text, "invalid number");
			});
	});
	//#4
	test("#Convert 3/7.2/4kilomegagram correct via GET /api/convert", () => {
		chai.request(server)
			.get("/api/convert")
			.query({ input: "3/7.2/4kilomegagram" }) // Provide the desired query parameters
			.end(function (err, res) {
				assert.equal(err, null); // No error should occur
				assert.equal(res.status, 200);
				assert.equal(res.text, "invalid number and unit");
			});
	});
	//#5
	test("#Convert kg correct via GET /api/convert", () => {
		chai.request(server)
			.get("/api/convert")
			.query({ input: "kg" }) // Provide the desired query parameters
			.end(function (err, res) {
				assert.equal(err, null); // No error should occur
				assert.equal(res.status, 200);
				assert.property(res.body, "initNum", "initNum does not exist");
				assert.property(
					res.body,
					"initUnit",
					"initUnit does not exist"
				);
				assert.property(
					res.body,
					"returnNum",
					"returnNum does not exist"
				);
				assert.property(
					res.body,
					"returnUnit",
					"returnUnit does not exist"
				);
				assert.property(res.body, "string", "string does not exist");
				// Add specific expectations for returnNum and returnUnit
				assert.equal(res.body.returnNum, 2.20462);
				assert.equal(res.body.returnUnit, "lbs");
			});
	});
});
