process.env.ITS_A_JEST = "YES";

const listen = require('../server');

const supertest = require('supertest');

const phoneNumber="+37252082";
const need="Süüa tahaks!";
const location="";
const location_tag="Kolmas kivi päikesest";
        
describe("Testing posting as user", () => {

	it("post message and get back post ID", async (done) => {

		const response = await supertest(listen)
        .post('/api/newuserpost')
        .send({
            phoneNumber,
			need,
			location,
			location_tag
        });

		expect(response.status).toBe(200);
		expect(response.body.working).toBe(true);
        done();

	});

});