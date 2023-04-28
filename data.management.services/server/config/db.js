import mongoose from 'mongoose';

const connect = () => {
  mongoose
    .connect('mongodb://127.0.0.1:27017/new_work_camp')
    .then(() => {
      console.log('database is connected successfully');
    })
    .catch((err) => {
      console.log({ mongooseError: err.message });
    });
};

export default connect;
