import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TraductorComponent } from "../../components/traductor/traductor.component";

@Component({
  selector: 'app-studio',
  standalone: true,
  imports: [
    CommonModule,
    TraductorComponent
],
  animations: [
    trigger('enterState', [
      state('void', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      transition(':enter', [
        animate(300, style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ])
    ])
  ],
  template: `
    <section class="inicio">
      <header class="home">
      <img class="fondo-principal" src="fondo-principal.png" alt="">
      <h1 class="titulo-principal" @enterState>Estudio de Streaming</h1>
      </header>
      <main>
        <div class="part-1">
        <div class="numero"><span class="numero-1">#1</span>
          <p class="numero-parrafo">CHOOSE Agencia digital para Todos los negocios</p>
        </div>
        <div class="parrafo">
        Con una presencia internacional, estamos orgullosos de haber influido en empresas de todo el mundo, y nuestra pasión por la innovación nos impulsa a crear un futuro aún más brillante en el ámbito digital.
        </div></div>
        <a href="https://chooseagencia.com/#contactanos" target="_blank" class="part-2"><div class="trabajemos">
          <img src="icons/flecha.svg" alt="">
          <p>Trabajemos juntos</p></div>
          <img src="icons/play.svg" alt="">
        </a>
      </main>

    </section>
  `,
  styleUrl: './studio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudioComponent { }
