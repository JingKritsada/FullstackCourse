import connect from '#app/repositories/mongo/connection';
import useUserRepo from '#app/repositories/mongo/user';

export default ({ db }) => {
    const connection = connect(db.mongo.uri);

    const userRepo = useUserRepo(connection);

    return {
        userRepo,
    }
}