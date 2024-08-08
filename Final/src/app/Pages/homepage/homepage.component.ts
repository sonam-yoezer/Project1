import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Module from 'module';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  image1:string="assets/800-Doctors-Talking-GettyImages-1421919753.jpg"
  image2:string="assets/b.jpg"
  image3:string="assets/xray.jpg"
  image4:string="assets/ward.jpg"
  image5:string="assets/pressure.jpg"
  image6:string="assets/happy-doctors.jpg"
  
  imagewidth = 700;
  imageheight = 500;
}
