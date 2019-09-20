import iUserRepository from './../contracts/repository_contracts/iUserRepository';
import user from "./../types/user";

export default class userRepository implements iUserRepository {
    getAllUsers(): user[] {
        throw new Error("Method not implemented.");
    }
}