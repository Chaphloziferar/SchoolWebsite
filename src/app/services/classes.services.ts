import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ClassesService {
    constructor() { }

    async getClasses() {
        const options: RequestInit = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain, */*',
                'Access-Control-Allow-Origin': '*'
            }
        }

        const res = await fetch('http://johncanales-001-site1.dtempurl.com/api/classes', options);
        let data = await res.json();

        return data;
    }
}