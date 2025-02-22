import { AfterViewChecked, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { PreviewComponent } from '../../components/preview/preview.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, PreviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements AfterViewChecked {
  @ViewChildren('fadeInElements') fadeInElements!: QueryList<ElementRef>;
  private observer!: IntersectionObserver;
  private hasInitialized = false; // Prevent multiple observer setups

  ngAfterViewChecked() {
    if (!this.hasInitialized && this.fadeInElements.length > 0) {
      this.hasInitialized = true;

      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fadeIn');
              this.observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.7 }
      );

      this.fadeInElements.forEach((element) => {
        this.observer.observe(element.nativeElement);
      });
    }
  }
}

