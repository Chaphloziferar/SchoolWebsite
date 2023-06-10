export class Teacher {
    public teacherId: number;
    public firstName: string;
    public lastName: string;
    public dateOfBirth: Date;
    public address: string;
    public phoneNumber: string;
    public email: string;
    public deletedDate: Date | null;

    constructor(obj: DataObj) {
        this.teacherId = obj && obj.teacherId;
        this.firstName = obj && obj.firstName;
        this.lastName = obj && obj.lastName;
        this.dateOfBirth = obj && obj.dateOfBirth;
        this.address = obj && obj.address;
        this.phoneNumber = obj && obj.phoneNumber;
        this.email = obj && obj.email;
        this.deletedDate = obj && obj.deletedDate;
    }
}

interface DataObj {
    teacherId: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    address: string;
    phoneNumber: string;
    email: string;
    deletedDate: Date | null;
}