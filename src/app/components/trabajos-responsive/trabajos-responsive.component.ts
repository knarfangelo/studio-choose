import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-trabajos-responsive',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <header>
    <img [src]="image" alt="">
    <main>
      <h1>{{title}}</h1>
      <p>{{description}}</p>
    </main>
  </header>
  `,
  styleUrl: './trabajos-responsive.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrabajosResponsiveComponent {

  @Input() title: string = 'Titular';
  @Input() description: string = 'Descripcion';
  @Input() image: string = 'trabajos/trabajo.png';

}
