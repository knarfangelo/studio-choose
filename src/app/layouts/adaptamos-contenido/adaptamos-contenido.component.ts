import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, signal, ViewChild } from '@angular/core';
import { CardsComponent } from "../../components/cards/cards.component";
import { register, SwiperContainer } from 'swiper/element/bundle';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

register();

@Component({
  selector: 'app-adaptamos-contenido',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    CardsComponent
  ],
  template: `
    <section class="adaptamos-contenido">
      <h1>Nos adaptamos a tu contenido</h1>
      <swiper-container class="swiper-adaptamos" init=false>
        <swiper-slide>
          <app-cards image="icons/webinars.svg" title="WEBINARS" description="Transmite tus cursos, charlas, clases en vivo o grabadas, etc."></app-cards>
        </swiper-slide>
        <swiper-slide>
          <app-cards image="icons/podcast.svg" title="PODCAST" description="Estudio profesional para hacer podcast de audio, video y radio en vivo."></app-cards>
        </swiper-slide>
        <swiper-slide>
          <app-cards image="icons/live.svg" title="LIVE STREAMING" description="Transmite a varias cámaras con sonido e iluminación profesional."></app-cards>
        </swiper-slide>
   
        <swiper-slide>
          <app-cards image="icons/eventos.svg" title="EVENTOS" description="Estudios portátiles o móviles desarrollados para eventos o activaciones."></app-cards>
        </swiper-slide>
        <swiper-slide>
          <app-cards image="icons/shopping.svg" title="LIVE SHOPPING" description="Soluciones para la venta de productos y servicios en live streaming."></app-cards>
        </swiper-slide>
      </swiper-container>
    </section>
  `,
  styleUrls: ['./adaptamos-contenido.component.css'],
})
export class AdaptamosContenidoComponent {

  swiperElements: SwiperContainer | null = null;


  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('.swiper-adaptamos') as SwiperContainer;
    const swiperOptions: SwiperOptions = {
      navigation:{
        enabled:true,
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
      },
      slidesPerView: 'auto',
      speed: 1000,
      spaceBetween: 30,
      breakpoints: {
        0:{
          slidesPerView:1.5,
          loop: true,
          centeredSlides: true,
        },
        900: {
          slidesPerView: 3, // Fijo para que se ajuste
          loop: false,
          initialSlide: 3,
          centeredSlides: true,
        },
        1300: {
          slidesPerView:5,
          enabled: false,
        },
      },
    };
    Object.assign(swiperElemConstructor, swiperOptions);
    this.swiperElements = swiperElemConstructor;
    this.swiperElements.initialize();
  }

  
}
