import mongoose from 'mongoose';

const connect = () => {
  mongoose
    .connect(process.env.TEST_BD)
    .then(() => {
      console.log('database is connected successfully');
    })
    .catch((err) => {
      console.log({ mongooseError: err.message });
    });
};

export default connect;
