import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <main>
        <h1>{{title}}</h1>
        <p>{{description}}</p>
      </main>
    </header>
  `,
  styleUrl: './equipos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EquiposComponent {

  @Input() title: string = 'UNDEFINED';
  @Input() description: string = 'NONE DESCRIPTION';
  @Input() image: string = 'equipos/blackmagic-pocket-cinema-6k-pro.png';



}
