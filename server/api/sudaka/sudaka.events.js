/**
 * Sudaka model events
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _events = require('events');

var Sudaka = require('./sudaka.model');
var SudakaEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
SudakaEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Sudaka.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc) {
    SudakaEvents.emit(event + ':' + doc._id, doc);
    SudakaEvents.emit(event, doc);
  };
}

exports['default'] = SudakaEvents;
module.exports = exports['default'];
//# sourceMappingURL=sudaka.events.js.map
