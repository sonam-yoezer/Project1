import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment.development';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    HttpClientModule
  ],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent implements OnInit{
  @Input() id: string = '';

  form!: FormGroup;
  formBuilder = inject(FormBuilder);
  httpClient = inject(HttpClient);
  router = inject(Router);
 
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email]],
      num: ['', [Validators.pattern(/^(\+975-)\d{8}$/)]],
      appd: ['', [Validators.required]],
      sdepartment: ['', [Validators.required]],
      doctor: ['', [Validators.required]],
    });
    
  }

  department = ['Critical Care', 'Emergency Department', 'Radiology', 'Nursing', 'General Surgery', 'Medicine'];
  doctors = ['Dr.Jigme', 'Dr.Pema', 'Dr.Dorji', 'Dr.Sonam'];


  onSave() {
    this.httpClient.post(`${environment.baseApiUrl}/appointment`, this.form.value).subscribe({
      next: (data) => {
        alert('Appointment has been Booked Sucessfully')
        this.router.navigate(['read']);
      },
      error: () => {
        alert('There was an error!');
      }
    });
  }
          
}
