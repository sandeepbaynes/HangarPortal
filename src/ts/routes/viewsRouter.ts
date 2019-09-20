import express = require('express');
import iRouter from '../contracts/iRouter';

export default class viewsRouter implements iRouter {
    private router: express.Router;
    private baseDir: string;
    constructor() {
        this.router = express.Router();
        this.baseDir = `${__dirname}/../../views/`;
        this.initRouter();
    }

    public getRouter(): express.Router {
        return this.router;
    }

    private initRouter(): void {
        this.router.get('/:view', this.getView.bind(this));
    }

    private getView(req: any, res: any, next: Function) {
        let view = req.params['view'];
        res.sendFile(`${view}.html`, { root: this.baseDir });
    }
}