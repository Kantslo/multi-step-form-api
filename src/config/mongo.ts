import mongoose from 'mongoose';

const connectToMongo = () => {
  try {
    const url = process.env.MONGO_URL!;
    mongoose.connect(url)
  } catch (error) {
    console.log(error)
    return error
  }
}

export default connectToMongo;