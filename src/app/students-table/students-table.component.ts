import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { StudentsRecords } from "../state/students-model";
import { AppState, selectAllStudents } from "../state/students.selectors";
import * as Actions from "../state/students.actions";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-students-table',
    standalone: true,
    imports: [MatTableModule],
    templateUrl: './students-table.component.html',
    styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {
    dataSource: any = [];
    dataSource$: Observable<StudentsRecords[]> = this.store.select(selectAllStudents);
    displayColumns: string[] = ['name', 'city', 'country', 'subject', 'courseName', 'date', 'state', 'street', 'email', 'phone', 'postalCode'];

    constructor(
        private store: Store<AppState>,  // Store to dispatch actions and select data
        private snackBar: MatSnackBar  // MatSnackBar for showing error messages
    ) {
        this.store.dispatch(Actions.callStudentsRecordsApi());  // Dispatch the action to load student records
    }

    ngOnInit(): void {
        // Subscribe to the dataSource observable to fetch the data
        this.dataSource$.subscribe({
            next: (res: any) => {
                if (res?.studentsList?.studentsRecords) {
                    this.dataSource = res.studentsList.studentsRecords;
                }
            },
            error: (error) => {
                console.error("Error loading student data:", error);  // Log the error to the console
                this.showError("Failed to load student records. Please try again later.");  // Show the error in a snackbar
            }
        });
    }

    // Function to show error message using MatSnackBar
    private showError(message: string): void {
        this.snackBar.open(message, 'Close', {
            duration: 3000,  // Duration for the snackbar to stay on screen
        });
    }
}
