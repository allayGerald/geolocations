import mongoose from 'mongoose';
import constants from './constants.js';

const NODE_ENV = process.env.NODE_ENV;
const DB = (NODE_ENV === 'test' ? constants.TEST_DB : constants.DB_DATABASE);

export default  (app) => {
  const con = mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

  mongoose.connection.on('open', function () {
    console.log(`${DB} Database connected successfully`);
    if (NODE_ENV === 'test') {
      mongoose.connection.db.dropDatabase(function (err, result) {
        console.log(`${DB} Database dropped successfully`);
      });
    }
    app.emit('ready');
  })
}