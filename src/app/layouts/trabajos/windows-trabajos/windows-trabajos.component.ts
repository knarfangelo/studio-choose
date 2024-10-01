import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ITrabajos, trabajos } from '../Mantenimiento/trabajos';

@Component({
  selector: 'app-windows-trabajos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <h1>Conoce nuestro trabajo <br> Streams de alta calidad</h1>
      <main>
        @for (trabajo of trabajos; track $index) {
          <img class="imagenes" [src]="trabajo.img" [alt]="trabajo.titulo">
        }
      </main>
    </header>

  `,
  styleUrl: './windows-trabajos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WindowsTrabajosComponent {

  trabajos: ITrabajos[] = trabajos;

}
