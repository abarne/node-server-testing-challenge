const request = require('supertest');
const server = require('./server.js');

describe('server tests', function() {
	describe('GET /', function() {
		it('should return status code 200', function() {
			return request(server).get('/').then((res) => {
				expect(res.status).toBe(200);
			});
		});
	});
});
