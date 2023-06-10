import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    constructor() { }

    async getUsers() {
        const options: RequestInit = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain, */*',
                'Access-Control-Allow-Origin': '*'
            }
        }

        const res = await fetch('http://johncanales-001-site1.dtempurl.com/api/users', options);
        let data = await res.json();

        return data;
    }
}