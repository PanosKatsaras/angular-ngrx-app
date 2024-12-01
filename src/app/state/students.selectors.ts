import { StudentsRecords } from "./students-model";
import { createSelector } from "@ngrx/store";

export interface AppState {
    students: StudentsRecords[]
}
export const selectFeature = (state: AppState) => state.students;

export const selectAllStudents = createSelector(
    selectFeature, (state: StudentsRecords[]) => state);


    