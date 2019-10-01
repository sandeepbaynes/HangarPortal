import { iAuthenticator } from '../../contracts/authenticator/iAuthenticator';
export default class authenticator implements iAuthenticator {
    public validate(req: any, res: any, next: Function): void {
        //console.log('Implement authenticator later. Authenticating all requests temporarily');
        next();
    };
    //TODO: update session - method to update the session token and id
};