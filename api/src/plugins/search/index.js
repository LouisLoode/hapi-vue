const Glob = require('glob')

exports.register = function (plugin, options, next) {
  const routes = []

  // Load routes
  Glob.sync('src/plugins/search/routes/**/*.js', {
    root: __dirname,
    ignore: 'src/plugins/search/routes/**/*.spec.js'
  }).forEach((file) => {
    routes.push(require(`/api/${file}`))
  })

  plugin.route(routes)
  return next()
}

exports.register.attributes = {
  name: 'search',
  version: '0.0.1',
  description: 'Hapi user plugin',
  main: 'index.js'
}
