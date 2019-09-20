import express = require('express');
import config from 'config';
import { iAuthenticator } from './custom_modules/contracts/authenticator/iAuthenticator';
import iRouter from './contracts/iRouter';
import routeFactory from './factory/routeFactory';

class server {
    private app: express.Application;
    private authenticator: iAuthenticator;
    private viewsRouter!: iRouter;
    private userRouter!: iRouter;
    private routeFactory: routeFactory;
    constructor(authenticator: iAuthenticator) {
        this.app = express();
        this.authenticator = authenticator;
        this.routeFactory = new routeFactory();
        this.initRouters();
        this.init();
    }

    private initRouters() {
        this.viewsRouter = this.routeFactory.getViewsRouter();
        this.userRouter = this.routeFactory.getUserRouter();
    }

    private init(): void {
        this.app.use('/', this.authenticator.validate);
        this.initDefaultRedirect();
        this.initRoutes();
        this.initStaticRoutes();
    }

    private initDefaultRedirect() {
        this.app.get('/', function (req, res) {
            res.redirect('/view/index');
        });
    }

    private initStaticRoutes(): void {
        this.app.use('/css', express.static(`${__dirname}/../views/css`));
        this.app.use('/img', express.static(`${__dirname}/../views/img`));
        this.app.use('/script', express.static(`${__dirname}/../scripts`));
    }

    private initRoutes(): void {
        this.app.use('/view/', this.viewsRouter.getRouter());
        this.app.use('/users/', this.userRouter.getRouter());
    }

    public start(): void {
        this.app.listen(config.get('port'), function () {
            console.log(`server started on port ${config.get('port')}`);
        });
    }
}

export default server;