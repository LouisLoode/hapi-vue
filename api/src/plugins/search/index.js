const Glob = require('glob');
const Path = require('path');

exports.register = function (plugin, options, next) {

    const routes = [];

    // Load routes
    console.log(__dirname);
    Glob.sync('src/plugins/search/routes/**/*.js', {
        root: __dirname,
        ignore: 'src/plugins/search/routes/**/*.spec.js'
    }).forEach((file) => {
        routes.push(require('/api/'+file));
    });

    plugin.route(routes);

    next()
}

exports.register.attributes = {
    name: 'search',
    version: '0.0.1',
    description: 'Hapi user plugin',
    main: 'index.js'
}
