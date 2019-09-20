export interface iAuthenticator {
    validate(req: any, res: any, next: Function): void;
}