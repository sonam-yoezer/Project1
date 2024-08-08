import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  image1: string ="assets/p.jpg"
  image2: string = "assets/ward.jpg"
  image3: string = "assets/xray.jpg"
  image4: string = "assets/pressure.jpg"
  image5: string = "assets/happy-doctors.jpg"
}
