import iUserRepository from "../contracts/repository_contracts/iUserRepository";
import userRepository from "../tests/mock_repositories/userRepository"; // import from "../repositories/userRepository" when ready.

export default class repositoryFactory {
    getUserRepository(): iUserRepository {
        return new userRepository();
    }
}