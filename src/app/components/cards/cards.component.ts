import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <div class="imagen">
      <img [src]="image" alt="">
      </div>
      <main>
      <h1>{{title}}</h1>
      <p>{{description}}</p></main>
    </header>
  `,
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  @Input() image: string = 'icons/webinars.svg';
  @Input() title: string = 'WEBINARS';
  @Input() description: string = 'Transmite tus cursos, charlas, clases en vivo grabadas, etc.';

}
