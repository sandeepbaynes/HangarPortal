import express = require('express');
import iUserManager from "../contracts/manager_contracts/iUserManager";
import iRouter from '../contracts/iRouter';

export default class userRouter implements iRouter {
    private router: express.Router;
    private userManager: iUserManager;
    constructor(userManager: iUserManager) {
        this.userManager = userManager;
        this.router = express.Router();
        this.initRouter();
    }

    public getRouter(): express.Router {
        return this.router;
    }

    private initRouter(): void {
        this.router.get('/:getallusers', this.getAllUsers.bind(this));
    }

    private getAllUsers(req: any, res: any, next: Function) {
        res.send(this.userManager.getAllUsers());
    }
}