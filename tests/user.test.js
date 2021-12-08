const request = require('supertest');
const app = require('../app');

describe('Test : Get all users', function(){
	it('responds with json', function(done){
		request(app)
		.get('/api/users')
		.set("Content-Type", "application/json; charset=utf-8")
		.expect('Content-Type', 'application/json')
		.expect(201, done);
	  });
});
