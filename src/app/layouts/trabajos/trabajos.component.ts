import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { TrabajosResponsiveComponent } from "../../components/trabajos-responsive/trabajos-responsive.component";
import { SwiperOptions } from 'swiper/types';
import { register, SwiperContainer } from 'swiper/element';
import { WindowsTrabajosComponent } from "./windows-trabajos/windows-trabajos.component";
import { SwiperTrabajosComponent } from "./swiper-trabajos/swiper-trabajos.component";
register();
@Component({
  selector: 'app-trabajos',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [
    CommonModule,
    TrabajosResponsiveComponent,
    WindowsTrabajosComponent,
    SwiperTrabajosComponent
],
  template: `
  <header>
      <app-windows-trabajos></app-windows-trabajos>
      <app-swiper-trabajos></app-swiper-trabajos></header>
  `,
  styleUrl: './trabajos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrabajosComponent {



}
