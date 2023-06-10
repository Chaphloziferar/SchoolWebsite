export class Enrollment {
    public enrollmentId: number;
    public studentId: number;
    public classId: number;
    public enrollmentDate: Date;
    public deletedDate: Date | null;

    constructor(obj: DataObj) {
        this.enrollmentId = obj && obj.enrollmentId;
        this.studentId = obj && obj.studentId;
        this.classId = obj && obj.classId;
        this.enrollmentDate = obj && new Date(obj.enrollmentDate);
        this.deletedDate = obj && obj.deletedDate;
    }
}

interface DataObj {
    enrollmentId: number;
    studentId: number;
    classId: number;
    enrollmentDate: string;
    deletedDate: Date | null;
}