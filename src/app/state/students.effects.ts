import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { StudentsRecordsService } from '../services/students-records.service';
import { actionsList } from './students.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class StudentsRecordsEffects {

    // Effect to load students records
    loadStudentsRecords$ = createEffect(() => this.actions$.pipe(
        ofType(actionsList.callStudentsRecordsApi),  // Listening for the action to call students records API
        exhaustMap(() =>
            this.studentsRecordsService.getStudentsRecords().pipe(
                map(studentsRecords => {
                    // On success, dispatch the success action with the data
                    return {
                        type: actionsList.callStudentsRecordsApiSuccess,
                        payload: studentsRecords  // Dispatch the success action
                    };
                }),
                catchError((error) => {
                    // On error, show a snackbar with the error message
                    this.snackBar.open('Failed to fetch student records. Please try again later.', 'Close', {
                        duration: 5000,
                    });

                    // Dispatch the failure action with the error message
                    return of({
                        type: actionsList.callStudentsRecordsApiFailure,
                        error: error.message || 'Unknown Error'
                    });
                })
            )
        )
    ));

    constructor(
        private actions$: Actions,  // Inject actions
        private studentsRecordsService: StudentsRecordsService,  // Inject the service to fetch data
        private snackBar: MatSnackBar  // Inject MatSnackBar for error notifications
    ) { }
}
