import { Injectable } from '@angular/core';
import {  Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap } from 'rxjs';
import { ClassesService } from '../services/classes.services';
import * as classActions from '../action/class.action';
import { Class } from '../model/class.model';

@Injectable()
export class ClassEffect {
    constructor(
        private classService: ClassesService,
        private action$: Actions
    ) {}

    classes: Class[] = [];

    loadClassesRequestEffect$ = createEffect<any, any, any, any>(
        () => this.action$.pipe(
            ofType(classActions.loadClassesAction),
            switchMap(action => {
                return this.classService.getClasses().then(res => {
                    if(res) {
                        this.classes = res;
                        let data = classActions.loadClassesActionSuccess({classes: this.classes});
                        return data;
                    } else {
                        return classActions.loadClassesActionFailure({error: 'Internal Server Error'});
                    }
                }).catch(error => {
                    return classActions.loadClassesActionFailure(error);
                })
            })
        )
    )
}