import iUserManager from "../contracts/manager_contracts/iUserManager";
import userManager from '../managers/userManager';
import repositoryFactory from './repositoryFactory';

export default class managerFactory {

    private repositoryFactory: repositoryFactory;

    constructor() {
        this.repositoryFactory = new repositoryFactory();
    }

    getUserManager(): iUserManager {
        return new userManager(this.repositoryFactory.getUserRepository());
    }
}