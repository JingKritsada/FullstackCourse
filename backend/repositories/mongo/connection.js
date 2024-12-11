import mongoose from 'mongoose';

export default (uri, options) => {
    return mongoose.createConnection(uri, options);
}