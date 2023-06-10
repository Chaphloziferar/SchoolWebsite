import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EnrollmentsService {
    constructor() { }

    async getEnrollments() {
        const options: RequestInit = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain, */*',
                'Access-Control-Allow-Origin': '*'
            }
        }

        const res = await fetch('http://johncanales-001-site1.dtempurl.com/api/enrollments', options);
        let data = await res.json();

        return data;
    }
}