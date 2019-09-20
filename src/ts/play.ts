import express = require('express');
import authenticator from './custom_modules/logic/authenticator/authenticator';
import config = require('config');
import server from './server';
import { iAuthenticator } from './custom_modules/contracts/authenticator/iAuthenticator';
const app: express.Application =  express();

const auth: iAuthenticator = new authenticator();
app.use('/', auth.validate);

app.get('/disp', function(req, res) {
    res.send();
});

app.get('/abc/disp', function(req, res) {
    res.send();
});

const router = express.Router();
router.get('/routea', function(req, res) {
    console.log('routea');
    res.send();
});

app.use('/newroute', router);

app.listen(config.get('port'), function() {
    console.log(`server started on port ${config.get('port')}`);
});