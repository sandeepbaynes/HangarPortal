import express = require('express');
import config from 'config';
import { iAuthenticator } from './custom_modules/contracts/authenticator/iAuthenticator';
import viewsRouter from './routes/viewsrouter';

class server {
    private app: express.Application;
    private authenticator: iAuthenticator;
    private viewsrouter: viewsRouter;
    constructor(authenticator: iAuthenticator) {
        this.app = express();
        this.authenticator = authenticator;
        this.viewsrouter = new viewsRouter();
        this.init();
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
        this.app.use('/css', express.static(`${__dirname}/views/css`));
        this.app.use('/img', express.static(`${__dirname}/views/img`));
        this.app.use('/script', express.static(`${__dirname}/scripts`));
    }

    private initRoutes(): void {
        this.app.use('/view/', this.viewsrouter.router);
    }

    public start(): void {
        this.app.listen(config.get('port'), function () {
            console.log(`server started on port ${config.get('port')}`);
        });
    }
}

export default server;