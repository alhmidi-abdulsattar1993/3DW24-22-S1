const request = require('supertest');
const app = require('../app');

describe('Test : Get all users', function() {
    it('responds with json', function(done) {
        request(app)
        .get('/api/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

describe('Test : Get a user with his id', function() {
    it('responds with json', function(done) {
        request(app)
        .get('/api/user/4')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

describe('Test : Create a user', function() {
    it('responds with json', function(done) {
        request(app)
        .post('/api/user/create')
        .field('firstname', 'abdo_test')
        .field('lastname', 'abdo_test')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

describe('Test : Update a user', function() {
    it('responds with json', function(done) {
        request(app)
        .post('/api/user/update')
        .field('id', '4')
        .field('firstname', 'ad_update')
        .field('lastname', 'ad_update')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

describe('Test : Delete a user', function() {
    it('responds with json', function(done) {
        request(app)
        .get('/api/user/delete/4')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});
