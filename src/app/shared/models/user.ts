export class User {
    _id:string
    username: string;
    password: string;
    email?:string
    createdAt?: Date;
    updatedAt?: Date;

    constructor(username: string, password: string,email:string,  _id:string) {
        this.username = username;
        this.password = password;
        this.email = email;
        this._id=_id
    }
}
