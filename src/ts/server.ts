import express = require('express');
import bodyparser = require('body-parser');
import config from 'config';
import { iAuthenticator } from './custom_modules/contracts/authenticator/iAuthenticator';
import iRouter from './contracts/iRouter';
import routeFactory from './factory/routeFactory';
import cors = require('cors');


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
        if (process.env.NODE_ENV == 'dev') {
            this.app.use(cors(this.getCorsOptions()));
        }
        this.app.use('/', this.authenticator.validate);
        this.app.use(bodyparser.json());
        this.initDefaultRedirect();
        this.initRoutes();
        this.initStaticRoutes();
    }

    ///
    //Section used only for dev env. Vue cli renders the UI and will require cors enabled to send requests to back end. In prod, this should render from views controller
    ///
    private getCorsOptions(): object {
        var port = process.env.PORT || config.get('port');
        var whitelist = [`http://localhost:${port}`, 'http://172.17.6.55:8080']
        return {
            origin: function (origin: any, callback: Function) {
                if (!origin || whitelist.indexOf(origin) !== -1) {
                    callback(null, true)
                } else {
                    callback(new Error('Not allowed by CORS'))
                }
            }
        }
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
        var port = process.env.PORT || config.get('port')
        this.app.listen(port, function () {
            console.log(`Hangar Portal server started on port ${port}`);
        });
    }
}

export default server;