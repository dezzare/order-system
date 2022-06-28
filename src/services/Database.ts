import mongoose from 'mongoose';
import { MONGO_URI } from '../config';

export default async () => {

  try {
    await mongoose.connect(MONGO_URI)
    // await mongoose.connect('mongodb://mongo:27017/my_db')
    // {
    //   dbName: process.env.DB_NAME,
    //   user: process.env.DB_USER,
    //   pass: process.env.DB_PASS,
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useFindAndModify: false
    // })
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

}
