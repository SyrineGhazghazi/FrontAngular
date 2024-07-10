export class User {
    username: string;
    password: string;
    email?:string
    createdAt?: Date;
    updatedAt?: Date;

    constructor(username: string, password: string,email:string) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
}
