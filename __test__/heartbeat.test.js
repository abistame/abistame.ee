process.env.ITS_A_JEST = "YES";

const listen = require('../server');

const supertest = require('supertest');

describe("Testing heartbeat", () => {

	it("tests the base route and returns true for status", async (done) => {

		const response = await supertest(listen).get('/heartbeat');

		expect(response.status).toBe(200);
		expect(response.body.working).toBe(true);
        done();

	});

});