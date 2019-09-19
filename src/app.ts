import server from './server';
import authenticator from './custom_modules/logic/authenticator/authenticator';
import { iAuthenticator } from './custom_modules/contracts/authenticator/iAuthenticator';


const auth: iAuthenticator = new authenticator();
const srv = new server(auth);

srv.start();