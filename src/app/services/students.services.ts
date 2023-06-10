import { Injectable } from '@angular/core';
import { Student } from '../model/student.model';

@Injectable({
    providedIn: 'root'
})
export class StudentsService {
    constructor() { }

    async getStudents() {
        const options: RequestInit = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain, */*',
                'Access-Control-Allow-Origin': '*'
            }
        }

        const res = await fetch('http://johncanales-001-site1.dtempurl.com/api/students', options);
        let data = await res.json();

        return data;
    }

    async addStudent(student: Student) {
        const options: RequestInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain, */*',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(student)
        }

        const res = await fetch('http://johncanales-001-site1.dtempurl.com/api/students', options);
        let data = await res.json();

        return data;
    }

    async editStudent(student: Student) {
        const options: RequestInit = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain, */*',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(student)
        }

        const res = await fetch('http://johncanales-001-site1.dtempurl.com/api/students', options);
        let data = await res.json();

        return data;
    }

    async deleteStudent(studentId: number) {
        const options: RequestInit = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain, */*',
                'Access-Control-Allow-Origin': '*'
            }
        }

        const res = await fetch('http://johncanales-001-site1.dtempurl.com/api/students/' + studentId, options);
        let data = await res.json();

        return data;
    }
}