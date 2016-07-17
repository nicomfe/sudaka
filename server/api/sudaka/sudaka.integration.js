'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var app = require('../..');

var newSudaka;

describe('Sudaka API:', function () {

  describe('GET /api/sudaka', function () {
    var sudakas;

    beforeEach(function (done) {
      (0, _supertest2['default'])(app).get('/api/sudaka').expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        sudakas = res.body;
        done();
      });
    });

    it('should respond with JSON array', function () {
      sudakas.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/sudaka', function () {
    beforeEach(function (done) {
      (0, _supertest2['default'])(app).post('/api/sudaka').send({
        name: 'New Sudaka',
        info: 'This is the brand new sudaka!!!'
      }).expect(201).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        newSudaka = res.body;
        done();
      });
    });

    it('should respond with the newly created sudaka', function () {
      newSudaka.name.should.equal('New Sudaka');
      newSudaka.info.should.equal('This is the brand new sudaka!!!');
    });
  });

  describe('GET /api/sudaka/:id', function () {
    var sudaka;

    beforeEach(function (done) {
      (0, _supertest2['default'])(app).get('/api/sudaka/' + newSudaka._id).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        sudaka = res.body;
        done();
      });
    });

    afterEach(function () {
      sudaka = {};
    });

    it('should respond with the requested sudaka', function () {
      sudaka.name.should.equal('New Sudaka');
      sudaka.info.should.equal('This is the brand new sudaka!!!');
    });
  });

  describe('PUT /api/sudaka/:id', function () {
    var updatedSudaka;

    beforeEach(function (done) {
      (0, _supertest2['default'])(app).put('/api/sudaka/' + newSudaka._id).send({
        name: 'Updated Sudaka',
        info: 'This is the updated sudaka!!!'
      }).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        updatedSudaka = res.body;
        done();
      });
    });

    afterEach(function () {
      updatedSudaka = {};
    });

    it('should respond with the updated sudaka', function () {
      updatedSudaka.name.should.equal('Updated Sudaka');
      updatedSudaka.info.should.equal('This is the updated sudaka!!!');
    });
  });

  describe('DELETE /api/sudaka/:id', function () {

    it('should respond with 204 on successful removal', function (done) {
      (0, _supertest2['default'])(app)['delete']('/api/sudaka/' + newSudaka._id).expect(204).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });

    it('should respond with 404 when sudaka does not exist', function (done) {
      (0, _supertest2['default'])(app)['delete']('/api/sudaka/' + newSudaka._id).expect(404).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });
  });
});
//# sourceMappingURL=sudaka.integration.js.map
