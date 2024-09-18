import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { CardsComponent } from "../../components/cards/cards.component";
import { register } from 'swiper/element/bundle';
import { EffectCoverflow, Pagination } from 'swiper/modules';

register(); // Registra el Swiper

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
      <swiper-container #swiperEl>
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
          <app-cards image="icons/shopping.svg" title="LIVE SHOPPING" description="Soluciones para la venta de productos y servicios en live streaming."></app-cards>
        </swiper-slide>
        <swiper-slide>
          <app-cards image="icons/eventos.svg" title="EVENTOS" description="Estudios portátiles o móviles desarrollados para eventos o activaciones."></app-cards>
        </swiper-slide>
      </swiper-container>
    </section>
  `,
  styleUrls: ['./adaptamos-contenido.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdaptamosContenidoComponent {
  @ViewChild('swiperEl') swiperEl!: any;

  ngAfterViewInit(): void {
    const swiperParams = {
      effect: 'coverflow', // Activa el efecto coverflow
      grabCursor: true, // Cambia el cursor a "grabbing"
      centeredSlides: true, // Centra el slide principal
      slidesPerView: 'auto', // Ajusta automáticamente el tamaño del slide
      spaceBetween: 20, // Espacio entre slides
      coverflowEffect: { // Configuración del efecto coverflow
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true, // Muestra sombras en los slides laterales
      },
      pagination: true, // Activa la paginación
      modules: [EffectCoverflow, Pagination], // Módulos utilizados
    };

    // Asigna los parámetros al elemento Swiper
    Object.assign(this.swiperEl.nativeElement, swiperParams);

    // Inicializa el swiper
    this.swiperEl.nativeElement.initialize();
  }
}
