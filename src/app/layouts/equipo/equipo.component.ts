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
        <ul class="redes">
            <li><img src="icons/facebook.svg" alt=""></li>
            <li><img src="icons/twitter.svg" alt=""></li>
            <li><img src="icons/youtube.svg" alt=""></li>
          </ul>
          <img src="trabajadores/trabajador1.png" alt=""></div>
          <p class="nombre">
            wimper
          </p>
          <p class="cargo">
            Developer
          </p>
        </section></swiper-slide>
        <swiper-slide>
        <section class="trabajador">
        <div class="contenedor-img">
        <ul class="redes">
            <li><img src="icons/facebook.svg" alt=""></li>
            <li><img src="icons/twitter.svg" alt=""></li>
            <li><img src="icons/youtube.svg" alt=""></li>
          </ul>
          <img src="trabajadores/trabajador2.png" alt=""></div>
          <p class="nombre">
            wimper
          </p>
          <p class="cargo">
            Developer
          </p>
        </section></swiper-slide>
        <swiper-slide>
        <section class="trabajador">
        <div class="contenedor-img">
        <ul class="redes">
            <li><img src="icons/facebook.svg" alt=""></li>
            <li><img src="icons/twitter.svg" alt=""></li>
            <li><img src="icons/youtube.svg" alt=""></li>
          </ul>
          <img src="trabajadores/trabajador3.png" alt=""></div>
          <p class="nombre">
            wimper
          </p>
          <p class="cargo">
            Developer
          </p>
        </section></swiper-slide>
        <swiper-slide>
        <section class="trabajador">
          <div class="contenedor-img">
        <ul class="redes">
            <li><img src="icons/facebook.svg" alt=""></li>
            <li><img src="icons/twitter.svg" alt=""></li>
            <li><img src="icons/youtube.svg" alt=""></li>
          </ul>
          <img src="trabajadores/trabajador4.png" alt=""></div>
          <p class="nombre">
            wimper
          </p>
          <p class="cargo">
            Developer
          </p>
        </section></swiper-slide>
      </swiper-container>
    </main>
    </header>
  `,
  styleUrl: './equipo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EquipoComponent {

  swiperElements = signal<SwiperContainer | null>(null);



  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('.swiper-equipo');
    const swiperOptions: SwiperOptions = {
      navigation:{
        enabled:true,
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
      },
      slidesPerView: 1.8,
      
      
      speed: 1000,
      initialSlide: 2,
      spaceBetween: 30,
      breakpoints: {
        0:{
          slidesPerView:1.5,
          allowTouchMove: true,
          loop: true,
        },
        800:{
          slidesPerView:3,
          allowTouchMove: true,
          loop: true,
          centeredSlides: true,
        },
        1200: {
          slidesPerView:3,
          loop: true,
          allowTouchMove: true,
          centeredSlides: true,
        },
        1400: {
          slidesPerView:3,
          loop: true,
          allowTouchMove: true,
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
