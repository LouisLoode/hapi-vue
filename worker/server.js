const Amqp = require('amqp');
const Config = require('./config/config');
const RabbitMQ = Amqp.createConnection({ url: Config.rabbitmq });
const Glob = require('glob');
const Path = require('path');

// add this for better debuging
RabbitMQ.on('error', (error) => {
  console.log('Error from amqp: ', error);
});

// Wait for connection to become established.
RabbitMQ.on('ready', () => {
  // Use the default 'amq.topic' exchange
  Glob.sync('src/queues/**/*.js', {
    root: __dirname
  }).forEach((file) => {

    const job = require(Path.join(__dirname, file));
    const name = Path.basename(file, '.js');
    const options = {
      durable: true,
      autoDelete: false
    };
    RabbitMQ.queue(name, options, job);
    console.log(`Register queue: ${name} (file:  ${file})`);
  });

});
