const prefabs = require('webpack-config-prefabs');

module.exports = prefabs.nodeLibrary(module, {
    entry: './index.js'
});
