import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StudentsRecords } from "../state/students-model";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class StudentsRecordsService {

    private API_URL = environment.apiUrl

    constructor(
        private http: HttpClient
    ) {}

    getStudentsRecords() {
        return this.http.get<Array<StudentsRecords>>(this.API_URL);
    }
}