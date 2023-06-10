import { Injectable } from '@angular/core';
import {  Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap } from 'rxjs';
import { UsersService } from '../services/users.services';
import * as userActions from '../action/user.action';
import { User } from '../model/user.model';

@Injectable()
export class UserEffect {
    constructor(
        private userService: UsersService,
        private action$: Actions
    ) {}

    users: User[] = [];

    loadUsersRequestEffect$ = createEffect<any, any, any, any>(
        () => this.action$.pipe(
            ofType(userActions.loadUsersAction),
            switchMap(action => {
                return this.userService.getUsers().then(res => {
                    if(res) {
                        this.users = res;
                        let data = userActions.loadUsersActionSuccess({users: this.users});
                        return data;
                    } else {
                        return userActions.loadUsersActionFailure({error: 'Internal Server Error'});
                    }
                }).catch(error => {
                    return userActions.loadUsersActionFailure(error);
                })
            })
        )
    )
}