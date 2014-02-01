var helpers = require('./helpers');

var casual = helpers.extend({}, helpers);

casual.register_provider(require('./providers/text'));
casual.register_provider(require('./providers/person'));
casual.register_provider(require('./providers/address'));
casual.register_provider(require('./providers/internet'));
casual.register_provider(require('./providers/number'));

module.exports = casual;