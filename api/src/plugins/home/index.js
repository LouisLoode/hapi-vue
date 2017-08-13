const Glob = require('glob')

exports.register = function (plugin, options, next) {
  const routes = []

  // Load routes
  Glob.sync('src/plugins/home/routes/**/*.js', {
    root: __dirname,
    ignore: 'src/plugins/home/routes/**/*.spec.js'
  }).forEach((file) => {
    routes.push(require(`/api/${file}`))
  })

  plugin.route(routes)
  return next()
}

exports.register.attributes = {
  name: 'home',
  version: '0.0.1',
  description: 'Hapi home plugin',
  main: 'index.js'
}
