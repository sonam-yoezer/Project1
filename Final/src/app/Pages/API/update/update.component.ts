import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../../environments/environment.development';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-update',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit{
  id: string = '';
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email]],
      num: ['', [Validators.pattern(/^(\+975-)\d{8}$/)]],
      appd: ['', [Validators.required]],
      sdepartment: ['', [Validators.required]],
      doctor: ['', [Validators.required]],
    });

    this.fetchAppointment();
  }

  fetchAppointment() {
    this.httpClient.get(`${environment.baseApiUrl}/appointment/${this.id}`).subscribe({
      next: (data: any) => {
        this.form.patchValue(data); // Assuming data matches form structure
      },
      error: (err) => {
        console.error('Error fetching appointment details:', err);
        // Handle error - Display error message in UI or log it to console
      }
    });
  }

  onUpdate() {
    this.httpClient.put(`${environment.baseApiUrl}/appointment/${this.id}`, this.form.value).subscribe({
      next: (data) => {
        alert('Appointment has been Updated Successfully');
        this.router.navigate(['read']);
      },
      error: (err) => { 
        console.error('Error updating appointment:', err);
   
      }
    });
  }

  department = ['Critical Care', 'Emergency Department', 'Radiology', 'Nursing', 'General Surgery', 'Medicine'];
  doctors = ['Dr.Jigme', 'Dr.Pema', 'Dr.Dorji', 'Dr.Sonam'];

}