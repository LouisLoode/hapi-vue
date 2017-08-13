// Import dependencies
const Hapi = require('hapi')
const Blipp = require('blipp')
const Good = require('good')
const Inert = require('inert')
const Vision = require('vision')
const Yar = require('yar')

// Import database
require('./config/database')

const HapiAuthJwt2 = require('hapi-auth-jwt2')

const Glob = require('glob')

// Import configuration
const Config = require('./config/config')

// Import middlewares
const Policies = require('./src/middlewares/policies')
const Swagger = require('./src/middlewares/swagger')
const Grant = require('grant-hapi')
const grant = new Grant()

const server = new Hapi.Server()

server.connection({
  port: 9000,
  routes: {
    cors: {
      origin: ['*'],
      credentials: true
    }
  }
})

if (process.env.NODE_ENV === 'development') {
  server.register([
    Inert,
    Vision,
    Swagger
  ])
}

// Logger
if (process.env.NODE_ENV !== 'test') {
  server.register({
    register: Good,
    options: {
      reporters: {
        console: [{
          module: 'good-squeeze',
          name: 'Squeeze',
          args: [{
            log: '*',
            response: '*'
          }]
        }, {
          module: 'good-console'
        }, 'stdout'
        ]
      }
    }
  }, (err) => {
    if (err) {
      console.error(err)
    }
  })
}

server.register([
  // REQUIRED:
  {
    register: Yar,
    options: {
      cookieOptions: {
        password: process.env.JWT_KEY, //#TODO
        isSecure: false
      }
    }
  },
  // mount grant
  {
    register: grant,
    options: Config
  }], (err) => {

  if (err) {
    console.log(err)
  }
})

server.register(HapiAuthJwt2, () => {
  // Define strategy
  server.auth.strategy('jwt', 'jwt',{
    key: process.env.JWT_KEY,
    verifyFunc: Policies.Jwt
  })

  // server.auth.default('jwt')

  // Load routes
  Glob.sync('./src/plugins/**/index.js', {
    root: __dirname,
    ignore: './src/plugins/**/*.spec.js'
  }).forEach((file) => {
    server.register(require(file))
  })

  server.register({ register: Blipp, options: { showAuth : true } }, (err) => {
    if (err) {
      console.error('Error was handled!')
      console.error(err)
    }

    server.start((err) => {
      if (err) {
        console.error('Error was handled!')
        console.error(err)
      }
      console.log(`Server started at ${server.info.uri}`)
      console.log(`Environment ${Config.env}`)
    })
  })
})

module.exports = server
