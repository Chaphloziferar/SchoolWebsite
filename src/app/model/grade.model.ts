export class Grade {
    public gradeId: number;
    public enrollmentId: number;
    public gradeValue: number;
    public deletedDate: Date | null;

    constructor(obj: DataObj) {
        this.gradeId = obj && obj.gradeId;
        this.enrollmentId = obj && obj.enrollmentId;
        this.gradeValue = obj && obj.gradeValue;
        this.deletedDate = obj && obj.deletedDate;
    }
}

interface DataObj {
    gradeId: number;
    enrollmentId: number;
    gradeValue: number;
    deletedDate: Date | null;
}