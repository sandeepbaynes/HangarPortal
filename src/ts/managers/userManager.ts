import iUserManager from "../contracts/manager_contracts/iUserManager";
import user from "../types/user";
import iUserRepository from "../contracts/repository_contracts/iUserRepository";

export default class addUser implements iUserManager {
    private userRepository: iUserRepository;
    constructor(userRepository: iUserRepository) {
        this.userRepository = userRepository;
    }
    getAllUsers(): user[] {
        return this.userRepository.getAllUsers();
    }   
    
    getUserByUserId(userId: string): user {
        throw new Error("Method not implemented.");
    }
    
    searchUsers(): user[] {
        throw new Error("Method not implemented.");
    }
}