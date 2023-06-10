export class User{
    public userId : number;
    public username : string;
    public password : string;
    public userType : string;
    public deletedDate  : Date | null;

    constructor(obj: DataObj) {
        this.userId = obj && obj.userId;
        this.username = obj && obj.username;
        this.password = obj && obj.password;
        this.userType = obj && obj.userType;
        this.deletedDate = obj && obj.deletedDate;
    }
}

interface DataObj {
    userId : number;
    username : string;
    password : string;
    userType : string;
    deletedDate  : Date | null;
}