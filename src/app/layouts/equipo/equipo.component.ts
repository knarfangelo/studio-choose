import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

register();
@Component({
  selector: 'app-equipo',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <h1>Conoce a nuestro equipo de trabajo</h1>
      <main>
        <swiper-container init=false class="swiper-equipo">
          <swiper-slide>
        <section class="trabajador">
        <div class="contenedor-img">
          <img  src="trabajadores/director-general.png" alt=""></div>
          <p class="cargo">
          Director General
          </p>
        </section></swiper-slide>
        <swiper-slide>
        <section class="trabajador">
        <div class="contenedor-img">
          <img src="trabajadores/director-de-switcher.png" alt=""></div>
          <p class="cargo">
          Director de Switcher
          </p>
        </section></swiper-slide>
        <swiper-slide>
        <section class="trabajador">
        <div class="contenedor-img">
          <img src="trabajadores/directora-de-arte.png" alt=""></div>
          <p class="cargo">
          Directora de Arte
          </p>
        </section></swiper-slide>
        <swiper-slide>
        <section class="trabajador">
          <div class="contenedor-img">
          <img src="trabajadores/camarografo.png" alt=""></div>
          <p class="cargo">
          Camarógrafo
          </p>
        </section></swiper-slide>
        <swiper-slide>
        <section class="trabajador">
          <div class="contenedor-img">
          <img src="trabajadores/fotografo.png" alt=""></div>
          <p class="cargo">
          Fotógrafo
          </p>
        </section></swiper-slide>
        <swiper-slide>
        <section class="trabajador">
          <div class="contenedor-img">
          <img src="trabajadores/Luminotecnico.png" alt=""></div>
          <p class="cargo">
          Luminotécnico
          </p>
        </section></swiper-slide>
        <swiper-slide>
        <section class="trabajador">
          <div class="contenedor-img">
          <img src="trabajadores/asistente-de-produccion.png" alt=""></div>
          <p class="cargo">
          Asistente de Producción
          </p>
        </section></swiper-slide>
        <swiper-slide>
        <section class="trabajador">
          <div class="contenedor-img">
          <img src="trabajadores/equipo-tecnico.png" alt=""></div>
          <p class="cargo">
          Equipo Técnico
          </p>
        </section></swiper-slide>
      </swiper-container>
    </main>
    </header>
  `,
  styleUrl: './equipo.component.css',
})
export class EquipoComponent {


  swiperElements = signal<SwiperContainer | null>(null);



  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('.swiper-equipo');
    const swiperOptions: SwiperOptions = {
      slidesPerView: 1.8,
      speed: 1000,
      initialSlide: 2,
      grid: {rows: 2, fill: 'row'},
      autoplay: true,
      spaceBetween: 30,
      breakpoints: {
        0:{
          slidesPerView:1.5,
          allowTouchMove: true,
          initialSlide: 2,
          loop: true,
        },
        800:{
          slidesPerView:3,
          allowTouchMove: true,
          loop: true,
        },
        1200: {
          slidesPerView:3,
          loop: true,
          allowTouchMove: true,
        },
        1400: {
          slidesPerView:3,
          loop: true,
          allowTouchMove: true,
          initialSlide: 3,
        },
        1500: {
          slidesPerView:4,
          loop: true,
          allowTouchMove: true,
          
        },
        1600: {
          slidesPerView:4,
          allowTouchMove: false,
        },
      },
    };
    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElements.set(swiperElemConstructor as SwiperContainer);
    this.swiperElements()?.initialize();
  }



}
