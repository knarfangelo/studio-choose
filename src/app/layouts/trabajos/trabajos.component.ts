import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-trabajos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <h1>Conoce nuestro trabajo <br>Streams de alta calidad</h1>
      <main>
        <div class="panel-1">
          <img src="publicidad/1.png" alt="">
          <img  src="publicidad/3.png" alt="">
        </div>
        <div class="panel-2">
          <img class="img2" src="publicidad/2.png" alt="">
          <img src="publicidad/4.png" alt="">
        </div>
      </main>
    </header>
  `,
  styleUrl: './trabajos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrabajosComponent { }
