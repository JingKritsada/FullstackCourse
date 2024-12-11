import { Schema } from 'mongoose';
import mongooseBcrypt from 'mongoose-bcrypt';

export default (connection) => {
    const UserSchema = new Schema({
        username: String,
        password: { type: String, bcrypt: true },
    });

    UserSchema.plugin(mongooseBcrypt);

    // initialize the model
    const UserModel = connection.model('User', UserSchema);

    async function getUser(username, password) {
        let user;

        try {
            const foundedUser = await UserModel.where({
                username,
            }).findOne();

            if (!foundedUser) {
                return user;
            }

            const verifiedPassword = await foundedUser.verifyPassword(password);

            if (verifiedPassword) {
                user = foundedUser;
            }
        } catch (error) {
            throw new Error(error);
        }

        return user;
    }

    async function createUser(username, password) {
        try {
            const user = new UserModel({
                username,
                password,
            });
            await user.save();
        } catch (error) {
            throw new Error(error);
        }

        return true;
    }

    return {
        getUser,
        createUser,
    };
}