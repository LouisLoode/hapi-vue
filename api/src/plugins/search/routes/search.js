// const SearchHandler = require('../handlers')
// const Joi = require('joi')

module.exports = {
  method: 'GET',
  path: '/v1/search',
  config: {
    // Include this API in swagger documentation
    auth: false,
    tags: ['api'],
    description: 'Search something',
    notes: 'Search something'
  },
  handler(request, reply) { //Action
    // Response JSON object
    reply({
      statusCode: 200,
      message: 'Welcome search'
    })
  }
}
