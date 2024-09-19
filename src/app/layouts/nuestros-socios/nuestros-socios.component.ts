import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nuestros-socios',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <header>
    <h1>Nuestros Socios</h1>
    <main>
      <img src="icons/dron.svg" alt="">
      <img src="icons/dron.svg" alt="">
      <img src="icons/dron.svg" alt="">
    </main>
    
  </header>
  `,
  styleUrl: './nuestros-socios.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NuestrosSociosComponent { }
