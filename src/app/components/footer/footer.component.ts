import { Component } from '@angular/core';

@Component({
  selector: 'footer-app',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public year = new Date().getFullYear();
}
