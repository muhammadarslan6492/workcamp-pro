import amqp from 'amqplib';

// const RabbitSettings = {
//   protocol: 'amqp',
//   hostname: process.env.RABBIT_MQ_HOST,
//   port: process.env.RABBIT_MQ_PORT,
//   username: process.env.RABBIT_MQ_USER_NAME,
//   password: process.env.RABBIT_MQ_PASSWORD,
//   authMechanism: 'AMQPLAIN',
//   vhost: '/',
// };

export default class RabbitConnection {
  constructor() {
    RabbitConnection.createConnection();
    this.connection = null;
    this.channel = null;
  }

  static getInstance() {
    if (!RabbitConnection.instance) {
      RabbitConnection.instance = new RabbitConnection();
    }
    return RabbitConnection.instance;
  }

  static async createConnection() {
    try {
      this.connection = await amqp.connect('amqp://guest:guest@localhost:5672');
      this.channel = this.connection.createChannel();
      console.log('RabbitMQ connection establish');
    } catch (err) {
      console.log({ mqError: err.message });
    }
  }

  static async sendMessage(data, queueName) {
    try {
      let msg = (await this.channel).sendToQueue(
        queueName,
        Buffer.from(JSON.stringify(data)),
      );
      console.log('message sent to the RabbitMQ queue');
      return msg;
    } catch (err) {
      return err;
    }
  }

  static async generateNotification(data, queueName) {
    try {
      let msg = (await this.channel).sendToQueue(
        queueName,
        Buffer.from(JSON.stringify(data)),
      );
      console.log('message sent to the RabbitMQ queue');
      return msg;
    } catch (err) {
      return err;
    }
  }
}
