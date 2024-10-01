import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { EquiposComponent } from "../../components/equipos/equipos.component";

register();

@Component({
  selector: 'app-nuestros-socios',
  standalone: true,
  imports: [
    CommonModule,
    EquiposComponent
],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
  <header>
    <h1>Socio Estratégico</h1>
    <img class="dron" src="icons/dron.svg" alt="dron">
    <main>
      <swiper-container class="swiper-drones" init=false>
        <swiper-slide>
          <app-equipos
            title="Dron DJI Avata 2"
            description="Un dron compacto y versátil para grabaciones en alta definición."
            image="geodrone/1-dji-avata-2.png"
          ></app-equipos>
        </swiper-slide>
        <swiper-slide>
          <app-equipos
            title="Dron Matrice 300 RKT"
            description="Dron industrial para aplicaciones de inspección y mapeo."
            image="geodrone/2-matrice-300-rkt.png"
          ></app-equipos>
        </swiper-slide>
        <swiper-slide>
          <app-equipos
            title="Dron Mavic 3 Pro"
            description="Dron de nivel profesional con excelente calidad de imagen."
            image="geodrone/3-dron-mavic-3-pro.png"
          ></app-equipos>
        </swiper-slide>
        <swiper-slide>
          <app-equipos
            title="Dron DJI Phantom 4"
            description="Dron fácil de usar, ideal para principiantes y expertos."
            image="geodrone/4-dron-dji-phantom-4.png"
          ></app-equipos>
        </swiper-slide>
      </swiper-container>
    </main>
  </header>
  `,
  styleUrls: ['./nuestros-socios.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NuestrosSociosComponent {
  swiperElements = signal<SwiperContainer | null>(null);

  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('.swiper-drones');
    const swiperOptions: SwiperOptions = {
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 'auto',
      speed: 5000,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 4,
        },
      },
    };

    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElements.set(swiperElemConstructor as SwiperContainer);
    this.swiperElements()?.initialize();
  }
}
