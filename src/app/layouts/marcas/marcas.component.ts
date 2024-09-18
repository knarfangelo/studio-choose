import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-marcas',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <section class="marcas">
      <h1>Marcas que usamos</h1>
      <main>
        <div class="marcas-1">
        <img src="empresas/sony.svg" alt="">
        <img src="empresas/asus.svg" alt="">
        <img src="empresas/blackmagic.svg" alt="">
        <img src="empresas/canon.svg" alt=""></div>
        <div class="marcas-1">
        <img src="empresas/dji.svg" alt="">
        <img src="empresas/rode.svg" alt="">
        <img src="empresas/aorus.svg" alt="">
        <img src="empresas/msi.svg" alt=""></div></main>
    </section>
  `,
  styleUrl: './marcas.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarcasComponent { }
