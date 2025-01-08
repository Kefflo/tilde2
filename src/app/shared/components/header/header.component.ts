import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  imageSource: string = 'https://tilde.ai/wp-content/uploads/2024/05/cropped-Tilde_logo_1080-1.png';
  title: string = 'Tilde';
}
