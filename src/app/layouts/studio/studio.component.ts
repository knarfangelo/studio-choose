import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-studio',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <section class="inicio">
      <header class="home">
      <img class="fondo-principal" src="fondo-principal.png" alt="">
      <h1 class="titulo-principal">Estudio de Streaming</h1>
      </header>
      <main>
        <div class="part-1">
        <div class="numero"><span class="numero-1">#1</span>
          <p class="numero-parrafo">CHOOSE Agencia digital para Todos los negocios</p>
        </div>
        <div class="parrafo">
        Con una presencia internacional, estamos orgullosos de haber influido en empresas de todo el mundo, y nuestra pasión por la innovación nos impulsa a crear un futuro aún más brillante en el ámbito digital.
        </div></div>
        <div class="part-2"><div class="trabajemos">
          <img src="icons/flecha.svg" alt="">
          <p>Trabajemos juntos</p></div>
          <img src="icons/play.svg" alt="">
        </div>
      </main>
    </section>
  `,
  styleUrl: './studio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudioComponent { }
