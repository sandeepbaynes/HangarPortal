import iRouter from "../contracts/iRouter";
import viewsRouter from "../routes/viewsrouter";
import iUserManager from "../contracts/manager_contracts/iUserManager";
import managerFactory from "./managerFactory";
import userRouter from "../routes/userRouter";

export default class routeFactory {
    private managerFactory: managerFactory;

    constructor() {
        this.managerFactory = new managerFactory();
    }

    getViewsRouter(): iRouter {
        return new viewsRouter();
    }

    getUserRouter(): iRouter {
        var userManager: iUserManager = this.managerFactory.getUserManager();
        return new userRouter(userManager);
    }
}