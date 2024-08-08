import { Component, inject } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read',
  standalone: true,
  imports: [
    HttpClientModule,
    
  ],
  templateUrl: './read.component.html',
  styleUrl: './read.component.css'
  
})
export class ReadComponent {
  httpClient = inject(HttpClient);
  router = inject(Router);

  appointmentList: {
    id: string;
    name: string;
    email: string;
    num:string;
    appd: string;
    sdepartment: string;
    doctor: string;
  }[] = [];
  id: any;
  form: any;

  ngOnInit(): void {
    this.fetchAppointment();
  }

  fetchAppointment() {
    this.httpClient.get(`${environment.baseApiUrl}/appointment`).subscribe({
      next: (data) => {
        this.appointmentList = data as {
          id: string;
           name: string;
           email: string;
           num:string;
          appd: string;
           sdepartment: string;
          doctor: string;
        }[];
      },
      error: () => {
        alert('There was an error!');
      }
      });
  }

  onDelete(id: string) {
    if (confirm("Do you want to Delete?")) {
      this.httpClient.delete(`${environment.baseApiUrl}/appointment/${id}`).subscribe({
        next: (data) => {
          alert('Appointment has been Deleted Sucessfully');
          this.fetchAppointment();
        },
        error: () => {
          alert('There was an error!');
        }
      });
    } else {
    }
  }

  onEdit(id: string) {
    this.router.navigate(['appointment/edit/' + id]);
  }

}
