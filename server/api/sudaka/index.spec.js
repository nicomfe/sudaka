'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var sudakaCtrlStub = {
  index: 'sudakaCtrl.index',
  show: 'sudakaCtrl.show',
  create: 'sudakaCtrl.create',
  update: 'sudakaCtrl.update',
  destroy: 'sudakaCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  'delete': sinon.spy()
};

// require the index with our stubbed out modules
var sudakaIndex = proxyquire('./index.js', {
  'express': {
    Router: function Router() {
      return routerStub;
    }
  },
  './sudaka.controller': sudakaCtrlStub
});

describe('Sudaka API Router:', function () {

  it('should return an express router instance', function () {
    sudakaIndex.should.equal(routerStub);
  });

  describe('GET /api/sudaka', function () {

    it('should route to sudaka.controller.index', function () {
      routerStub.get.withArgs('/', 'sudakaCtrl.index').should.have.been.calledOnce;
    });
  });

  describe('GET /api/sudaka/:id', function () {

    it('should route to sudaka.controller.show', function () {
      routerStub.get.withArgs('/:id', 'sudakaCtrl.show').should.have.been.calledOnce;
    });
  });

  describe('POST /api/sudaka', function () {

    it('should route to sudaka.controller.create', function () {
      routerStub.post.withArgs('/', 'sudakaCtrl.create').should.have.been.calledOnce;
    });
  });

  describe('PUT /api/sudaka/:id', function () {

    it('should route to sudaka.controller.update', function () {
      routerStub.put.withArgs('/:id', 'sudakaCtrl.update').should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/sudaka/:id', function () {

    it('should route to sudaka.controller.update', function () {
      routerStub.patch.withArgs('/:id', 'sudakaCtrl.update').should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/sudaka/:id', function () {

    it('should route to sudaka.controller.destroy', function () {
      routerStub['delete'].withArgs('/:id', 'sudakaCtrl.destroy').should.have.been.calledOnce;
    });
  });
});
//# sourceMappingURL=index.spec.js.map
