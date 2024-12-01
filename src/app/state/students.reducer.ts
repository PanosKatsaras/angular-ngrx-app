import { createReducer, on } from "@ngrx/store";
import { StudentsRecords } from "./students-model"; // Import StudentsRecords model
import * as Actions from "./students.actions";

// Define the state structure for students' records and error handling
export interface StudentsState {
    studentsList: StudentsRecords[]; // Array of student records
    error: string | null; // Error message or null if no error
}

// Define the initial state for students records and error
export const initState: StudentsState = {
    studentsList: [],  // Start with an empty array for students records
    error: null  // No error initially
};

// Define the reducer
export const studentsReducer = createReducer(
    initState,

    // Action: Handle success when students records are fetched
    on(Actions.callStudentsRecordsApiSuccess, (state, { payload }) => ({
        ...state,
        studentsList: payload,  // Set the students records
        error: null  // Clear any existing error on success
    })),

    // Action: Handle failure when fetching student records fails
    on(Actions.callStudentsRecordsApiFailure, (state, { error }) => ({
        ...state,
        error // Store the error in state
    }))
);
