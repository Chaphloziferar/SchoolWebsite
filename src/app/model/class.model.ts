export class Class {
    public classId: number;
    public className: string;
    public teacherId: number;
    public deletedDate: Date | null;

    constructor(obj: DataObj) {
        this.classId = obj && obj.classId;
        this.className = obj && obj.className;
        this.teacherId = obj && obj.teacherId;
        this.deletedDate = obj && obj.deletedDate;
    }
}

interface DataObj {
    classId: number;
    className: string;
    teacherId: number;
    deletedDate: Date | null;
}
