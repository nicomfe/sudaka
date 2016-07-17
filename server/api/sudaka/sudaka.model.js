'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var SudakaSchema = new _mongoose2['default'].Schema({
  email: String,
  status: String
});

exports['default'] = _mongoose2['default'].model('Sudaka', SudakaSchema);
module.exports = exports['default'];
//# sourceMappingURL=sudaka.model.js.map
