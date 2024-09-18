import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <h1>Conoce a nuestro equipo de trabajo</h1>
      <main>
        <section class="trabajador">
          <img src="trabajadores/trabajador1.png" alt="">
          <p class="nombre">
            wimper
          </p>
          <p class="cargo">
            Developer
          </p>
        </section>
        <section class="trabajador">
          <img src="trabajadores/trabajador2.png" alt="">
          <p class="nombre">
            wimper
          </p>
          <p class="cargo">
            Developer
          </p>
        </section>
        <section class="trabajador">
          <img src="trabajadores/trabajador3.png" alt="">
          <p class="nombre">
            wimper
          </p>
          <p class="cargo">
            Developer
          </p>
        </section>
        <section class="trabajador">
          <img src="trabajadores/trabajador4.png" alt="">
          <p class="nombre">
            wimper
          </p>
          <p class="cargo">
            Developer
          </p>
        </section>
      </main>
    </header>
  `,
  styleUrl: './equipo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EquipoComponent {

}
