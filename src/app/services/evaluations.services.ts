import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EvaluationsService {
    constructor() { }

    async getEvaluations() {
        const options: RequestInit = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain, */*',
                'Access-Control-Allow-Origin': '*'
            }
        }

        const res = await fetch('http://johncanales-001-site1.dtempurl.com/api/evaluations', options);
        let data = await res.json();

        return data;
    }
}