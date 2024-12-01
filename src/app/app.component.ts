import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentsTableComponent } from './students-table/students-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, StudentsTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-ngrx';
}
