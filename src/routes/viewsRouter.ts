import express = require('express');
import { Http2SecureServer } from 'http2';

export default class viewsRouter {
    public router: express.Router;
    public baseDir: string;
    constructor() {
        this.router = express.Router();
        this.baseDir = `${__dirname}/../views/`;
        this.initRouter();
    }

    private initRouter(): void {
        this.router.get('/:view', this.getView.bind(this));
    }

    private getView(req: any, res: any, next: Function) {
        let view = req.params['view'];
        res.sendFile(`${view}.html`, { root: this.baseDir });
    }
}