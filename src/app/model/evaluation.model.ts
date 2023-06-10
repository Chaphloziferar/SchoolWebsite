export class Evaluation {
    public evaluationId: number;
    public enrollmentId: number;
    public evaluationDate: Date;
    public evaluationType: string;
    public score: number;
    public deletedDate: Date | null;

    constructor(obj: DataObj) {
        this.evaluationId = obj && obj.evaluationId;
        this.enrollmentId = obj && obj.enrollmentId;
        this.evaluationDate = obj && obj.evaluationDate;
        this.evaluationType = obj && obj.evaluationType;
        this.score = obj && obj.score;
        this.deletedDate = obj && obj.deletedDate;
    }
}

interface DataObj {
    evaluationId: number;
    enrollmentId: number;
    evaluationDate: Date;
    evaluationType: string;
    score: number;
    deletedDate: Date | null;
}